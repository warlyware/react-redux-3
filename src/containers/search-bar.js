import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({term: event.target.value});
  }

  handleFormSubmit = (event) =>{
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit} className="input-group">
        <input value={this.state.term}
        onChange={this.handleInputChange}
        placeholder="Get five-day forecast"
        type="text"
        className="form-control" />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);