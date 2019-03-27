import React, { Component } from 'react';
import map from 'lodash/map';
import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';
import { gitSearchResult } from '../actions/search';
import { selectRepo } from '../actions/selectRepo';
import Search from './Search';

class GitSearchList extends Component {
  constructor(props){
    super(props);
    this.state = {showmore: false, currentIndex: 0}
    
  }
  componentDidMount() {
    this.props.gitSearchResult('reactjs');
  }
   clickHandler=(index)=>{
      console.log(index);
     //this.setState( {showmore: !this.state.showmore, currentIndex: index});
     //this.setState( {showmore: !this.state.showmore, currentIndex: index});
     this.setState((prevState) => {
       let newstate = {...prevState};
       newstate.showmore = newstate.currentIndex === index ? !newstate.showmore : true;
       newstate.currentIndex = index;

       
       //console.log(newstate);
      return newstate;
    })
     //console.log(this.state);
   }
   SearchHandler =(query) =>{
    // console.log(query);
    this.props.gitSearchResult(query);
  }
  
  showMore=({language,followers, url, description})=>{
    
    return (
      <div>
        <h3>language : {language}</h3>
        <h3>followers : {followers}</h3>
        <h4>url : {url}</h4>
        <p>{description}</p>
      </div>
    );
  }

  renderSearch() {
    //  console.log(this.props.search.repositories);
    if (!this.props.search.repositories){
      return(<div>Processing ....</div>)
    }
    // return this.props.search.repositories.map(res => {
    //   return(
    //     <div>
    //       <label>Owner Name: </label>
    //       <span>{res.owner}</span>
    //     </div>
    //   )
    // })
    return map(this.props.search.repositories, (item,index) => {
      return (
        <div className="card darken-1 horizontal" key={index}>
          <div className="card-stacked">
            <div className="card-content">
              <span className="card-title">Name: {item.name}</span>
              <p>Owner: {item.owner}</p>
            </div>
            <div className="card-action">
              {/* <Link to={`/search/${item.name}`}>More</Link> */}
              <button className="btn btn-primary" onClick={ () => this.clickHandler(index)}>{ this.state.showmore && this.state.currentIndex === index? 'Show Less' : 'Show More' }</button>
              { this.state.showmore && this.state.currentIndex === index ? this.showMore(item) : '' } 
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>
      <Search onSearch ={this.SearchHandler}></Search>
    {this.renderSearch()}
    </div>;
  }
}

function mapStateToProps({ search }) {
  return { search };
}

export default connect(mapStateToProps, { gitSearchResult, selectRepo })(GitSearchList);
