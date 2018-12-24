import React, { Component } from 'react';
import CreateTodo from '../../components/CreateTodo/CreateTodo';

class CreateTodoContainer extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  onSubmit = text => {
    console.log('text', text)
  }
  render() {
    return(
      <CreateTodo onSubmit={this.onSubmit} />
    )
  }
}

export default CreateTodoContainer;