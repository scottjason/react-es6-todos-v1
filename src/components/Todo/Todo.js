import React, { Component } from 'react';
import { Container, Delete, Update, Input, Form } from './Todo.style';

class Todo extends Component {
  
  constructor(props) {
    super();
    const { id, text } = props.todo;
    this.state = { id, text };
  }
  onSubmit(e){
    e && e.preventDefault();
    let targetId = this.state.id;
    let newTodo = {...this.props.todo};
    newTodo.text = this.state.text;
    this.props.onSaveUpdatedTodo(newTodo);
    this.setState({});
  }
  render() {
    return(
      <Container>
        <Form onSubmit={e => this.onSubmit(e)}>
          <Input
            isEditMode={this.props.isEditMode}
            readOnly={!this.props.isEditMode}
            defaultValue={this.state.text}
          />
        </Form>
        <Delete onClick={()=> this.props.onDeleteTodo(this.props.todo)}>X</Delete>
        <Update onClick={()=> this.props.onToggleUpdate(this.props.todo)}>UPDATE</Update>
      </Container>
    )
  }
}

export default Todo;