import React, { Component } from 'react';
import '../styles/App.css';
import TodoApp from '../containers/TodoAppContainer'
import Navbar from './Navbar'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <TodoApp />
      </div>
    );
  }
}

export default App;
