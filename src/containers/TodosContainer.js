import React, { Component } from 'react';
import Todos from '../components/Todos/Todos';
import { fetchTodos } from '../api';

class TodosContainer extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }
  componentDidMount() {
    let todos = fetchTodos();
    this.setState({todos});
  }
  render() {
    return(
      <div>
        <Todos todos={this.state.todos} />
      </div>
    )
  }
}

export default TodosContainer;