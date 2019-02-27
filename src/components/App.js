import React, { Component } from 'react';
import '../styles/App.css';
import TodoApp from './TodoApp'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Up and running</h1>
        <TodoApp />
      </div>
    );
  }
}

export default App;
