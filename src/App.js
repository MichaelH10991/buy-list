import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import axios from 'axios'
import './App.css';
import Records from './components/Records';
import About from './components/pages/About';
import List from './components/List'
import Header from './components/layout/Header'
import AddRecord from './components/AddRecord'

class App extends Component {
  state = {
    records: [],
    wantList: []
  }

  /**
   *  TODO save the master release id and make seperate API calls to the master id's
   *  this will allow to get price and number of available copes etc.
   * */

  markComplete = (id) => {
    this.setState({
      records: this.state.records.map((record) => {
        if (record.id === id) {
          record.completed = !record.completed
        }
        return record
      })
    })
  }

  deleteRecord = (id) => {
    this.setState({
      records: [...this.state.records.filter(record => record.id !== id)]
    })
  }

  addRecord = (record) => {
    const newRecord = {
      id: record.id,
      master_id: record.master_id,
      title: record.title,
      thumb: record.thumb,
      price: record.lowest_price,
      completed: false
    }
    this.setState({ wantList: [...this.state.wantList, newRecord] })
  }

  showSearchResults = (releases) => {
    console.log(releases)
    this.setState({ records: releases })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddRecord
                  showSearchResults={this.showSearchResults}
                />
                <Records
                  records={this.state.records}
                  wantList={this.state.wantList}
                  markComplete={this.markComplete}
                  deleteRecord={this.deleteRecord}
                  addRecord={this.addRecord} />
              </React.Fragment>
            )} />
            <Route path="/list" render={props => (
              <React.Fragment>
                <List
                  wantList={this.state.wantList}
                  markComplete={this.markComplete}
                  deleteRecord={this.deleteRecord}
                  addRecord={this.addRecord} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
