import React, {Component} from 'react';
import './App.css';
import {data} from './data';
import Book from './Book'

class App extends Component {
  render () {
    const {data, i} = this.state
    return (
      <div className = 'App'>
        <Book
        book = {data[i]}
        i = {i}
        data = {data}
        inc = {this.inc}
        dec = {this.dec}
        />
      </div>
    )
  }

  constructor () {
    super ();

    this.state = {
      data,
      i: 0
    }
    this.inc = this.inc.bind(this)
    this.dec = this.dec.bind(this)
  }

  inc () {
    if (this.state.i === this.state.data.length - 1) {
      this.setState({i: 0})
    } else {
      this.setState({i: this.state.i + 1})
    }
  }

  dec () {
    if  (this.state.i === 0) {
      this.setState({i: this.state.data.length - 1})
    } else {
      this.setState({i: this.state.i - 1})
    }
  }
}



export default App;
