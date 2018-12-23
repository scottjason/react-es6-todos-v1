import React, { Component } from 'react';
import Todos from '../components/Todos/Todos';
import { fetchTodos } from '../api';

/* initial stub data */
import stub from '../stub';

class TodosContainer extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }
  componentDidMount() {
    fetchTodos(stub).then(res=> {
      let todos = res.todos;
      this.setState({ todos })
    });
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