import React, { Component } from 'react';
import Todos from '../components/Todos/Todos';
import { fetchTodos } from '../api';

/* initial stub data */
import stub from '../stub';

class TodosContainer extends Component {
  constructor(props) {
    super();
    this.state = {
      todos: [],
    };
  }
  componentWillMount() {
    fetchTodos(stub).then(res => {
      let todos = res.todos;
      this.setState({ todos })
    });
  }
  render() {
    return(
      <React.Fragment>
        <Todos todos={this.state.todos} />
      </React.Fragment>
    )
  }
}

export default TodosContainer;