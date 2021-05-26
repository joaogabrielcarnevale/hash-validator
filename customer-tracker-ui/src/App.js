import React, { Component } from 'react'
import Header from './components/Header'
import Hashinput from './components/Hashinput'
import "./App.css"

class App extends Component {
  state = {}

  render() {
    return (
      <div className="app">
        <div className="container">
          <Header />
          <Hashinput />
        </div>
      </div>
    );
  }
}

export default App;