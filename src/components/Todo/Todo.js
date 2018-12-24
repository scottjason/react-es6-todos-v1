import React from 'react';
import { Container, Delete, Update, Input, Form } from './Todo.style';

const Todo = props => {
  
  let inputRef = React.createRef();

  const onSubmit = e => {
    e && e.preventDefault();
    props.onSaveUpdatedTodo(inputRef.current.value)
  }
  return(
    <Container>
      <Form onSubmit={e => onSubmit(e)}>
        <Input
          ref={inputRef}
          isEditMode={props.isEditMode}
          readOnly={!props.isEditMode}
          defaultValue={props.todo.text}
        />
      </Form>
      <Delete onClick={()=> props.onDeleteTodo(props.todo)}>X</Delete>
      <Update onClick={()=> props.onToggleUpdate(props.todo)}>UPDATE</Update>
    </Container>
  )
}

export default Todo;