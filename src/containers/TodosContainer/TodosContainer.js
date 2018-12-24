import React, { Component } from 'react';
import Todos from '../../components/Todos/Todos';
import { fetchTodos } from '../../api';

/* initial stub data */
import stub from '../../stub';

class TodosContainer extends Component {
  constructor(props) {
    super();
    this.state = {
      todos: [],
    };
  }
  componentWillMount() {
    fetchTodos(stub).then(data => {
      let todos = data.todos;
      this.setState({ todos })
    });
  }
  render() {
    return(
      <Todos todos={this.state.todos} />
    )
  }
}

export default TodosContainer;