import React, { Component } from 'react';
import map from 'lodash/map';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { gitSearchResult } from '../actions/search';
import { selectRepo } from '../actions/selectRepo';
import Search from './Search';

class GitSearchList extends Component {
  constructor(props){
    super(props);
    this.state = {showmore: false}
    
  }
  componentDidMount() {
    this.props.gitSearchResult('reactjs');
  }
   clickHandler=()=>{

     this.setState({showmore: !this.state.showmore});
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
              <a className="btn btn-primary" onClick={ this.clickHandler}>More</a>
              { this.state.showmore ? this.showMore(item) : '' } 
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
