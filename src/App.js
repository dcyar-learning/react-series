import React from 'react'
import './App.scss';
import SearchForm from './components/SearchForm';
import ListSeries from './components/ListSeries'
class App extends React.Component {
  state = {
    series: []
  }

  handleSetListSeries = series => {
    this.setState({ series })
  }

  handleClearSeriesList = () => {
    this.setState({ series: [] })
  }

  render() {
    return (
      <div className="App">
        <SearchForm searchSeries={this.handleSetListSeries} clearSeriesList={this.handleClearSeriesList} />
        <ListSeries series={this.state.series} />
      </div>
    );
  }
}

export default App;
