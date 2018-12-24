import React, { Component } from 'react';
import { Container, Delete, Update, Input, Form } from './Todo.style';

class Todo extends Component {
  
  constructor(props) {
    super(props);
    const { id, text } = props.todo;
    const isEditMode = props.isEditMode;
    this.state = { id, text, isEditMode };
  }
  componentDidUpdate(prevProps) {
    let isChange = prevProps.isEditMode !== this.props.isEditMode;
    if (isChange) {
      this.setState({ isEditMode: !this.state.isEditMode })
    }
  }
  onSubmit = e => {
    e && e.preventDefault();
    let targetId = this.state.id;
    let newTodo = {...this.props.todo};
    newTodo.text = this.state.text;
    this.props.onSaveUpdatedTodo(newTodo);
  }
  onChange = e => {
    this.setState({ text: e.currentTarget.value })
  }
  render() {
    return(
      <Container>
        <Form onSubmit={this.onSubmit}>
          <Input
            isEditMode={this.state.isEditMode}
            readOnly={!this.state.isEditMode}
            value={this.state.text}
            onChange={this.onChange}
          />
        </Form>
        <Delete onClick={()=> this.props.onDeleteTodo(this.props.todo)}>X</Delete>
        <Update onClick={()=> this.props.onToggleUpdate(this.props.todo)}>UPDATE</Update>
      </Container>
    )
  }
}

export default Todo;