import React, { Component } from 'react'

export class SearchForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchText: ''
    }
  }

  handleSearchText = (e) => {
    this.setState({ searchText: e.target.value });
  }

  handleSearchSerie = (e) => {
    e.preventDefault();

    fetch(`https://api.tvmaze.com/search/shows?q=${this.state.searchText}`)
      .then(response => {
        return response.json()
      })
      .then(results => {
        this.props.searchSeries(results);
      })
      .catch(err => {
        console.log(err)
      });
  }

  handleResetSearch = e => {
    e.preventDefault();

    document.getElementById('searchText').value = '';

    this.props.clearSeriesList();
  }

  render() {
    return (
      <>
        <h1>Search Series</h1>
        <form className="search-form">
          <input type="text" id="searchText" name="searchText" onChange={this.handleSearchText} placeholder="Type a serie name..." />
          <div>
            <button onClick={this.handleSearchSerie}>Search</button>
            <button id="clearButton" onClick={this.handleResetSearch}>Reset</button>
          </div>
        </form>
      </>
    )
  }
}

export default SearchForm
