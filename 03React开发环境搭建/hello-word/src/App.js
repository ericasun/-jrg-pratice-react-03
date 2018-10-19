import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>React 也不过如此嘛</div>
        </header>
          <p>
              编辑<code>src/App.js</code> 就能改变页面展示<button>点我</button>
          </p>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
              Learn React
          </a>
      </div>
    );
  }
}

export default App;
