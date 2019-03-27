import React, { Component } from 'react';
import { connect } from 'react-redux';

class GitSearchDetail extends Component {

  render() {
    
    if (!this.props.SelectedRepo) {
      return '';
    }

    const { name, owner, language, followers, url, description } = this.props.SelectedRepo;

    return (
      <div>
        <h3>language : {language}</h3>
        <h3>followers : {followers}</h3>
        <h4>url : {url}</h4>
        <p>{description}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { SelectedRepo: state.activeRepo };
}

export default connect(mapStateToProps)(GitSearchDetail);
