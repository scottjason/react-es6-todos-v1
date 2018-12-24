import React, { Component } from 'react';
import CreateTodo from '../../components/CreateTodo/CreateTodo';

class CreateTodoContainer extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return(
      <CreateTodo />
    )
  }
}

export default CreateTodoContainer;