import React, { Component } from 'react';
import './App.css';
import Todos from './todos';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'test1'},
      {id: 2, content: 'test2'}
    ]
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className='center blue-text'>Todo's</h1>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
