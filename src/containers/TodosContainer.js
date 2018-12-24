import React, { Component } from 'react';
import CreateTodo from '../components/CreateTodo/CreateTodo';
import Todos from '../components/Todos/Todos';
import { fetchTodos } from '../api';
import faker from 'faker';

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
    fetchTodos(stub).then(data => {
      let todos = data.todos;
      this.setState({ todos })
    });
  }
  createRandId() {
    return faker.random.uuid();
  }
  onCreateTodo = text => {
    let todo = {
      id: this.createRandId(),
      text: text,
      createdAt: Date.now(),
    };
    let todos = this.state.todos;
    todos.push(todo);
    this.setState({todos});
  } 
  render() {
    return(
      <React.Fragment>
        <CreateTodo onCreateTodo={todo => this.onCreateTodo(todo)} />
        <Todos todos={this.state.todos} />
      </React.Fragment>
    )
  }
}

export default TodosContainer;