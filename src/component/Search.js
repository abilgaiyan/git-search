import React, {Component} from 'react';

class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit(event) {
    const query = this.state.value.trim();
    event.preventDefault();
    if (query && query.length > 0 ){
      this.props.onSearch(query)
    }
  }

  render () {
    return (
      <div className='well blosd'>
        {/* <h3 className='lead'>Search</h3> */}
        <div className='input-group'>
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleChange}
              type='text'
              className='form-control'
              placeholder='type to search ...'
              defaultValue='react js'           
            />
             <span className='input-group-btn'>
          <button className='btn btn-default' type="submit">
            Submit
          </button>
        </span>
          </form>
         
        </div>
      </div>
    )
  }
}
export default Search;
