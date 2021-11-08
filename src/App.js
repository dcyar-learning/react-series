import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchForm from './components/SearchForm';
import ListSeries from './components/ListSeries'
import SingleSerie from './components/SingleSerie'
import './App.scss';
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
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={
              <React.Fragment>
                <SearchForm searchSeries={this.handleSetListSeries} clearSeriesList={this.handleClearSeriesList} />
                <ListSeries series={this.state.series} />
              </React.Fragment>
            } />
            <Route path="/shows/:id" element={<SingleSerie />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
