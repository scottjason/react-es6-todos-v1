import React from 'react';
import { Input, Form, Container } from './CreateTodo.style';

const CreateTodo = props => {
  /**
  * Input must be declared here so the ref can refer to it
  */
  let todoInput = React.createRef();
  const currentInputVal = () => todoInput.current.value;
  const onSubmit = e => {
    e.preventDefault();
    props.onCreateTodo(currentInputVal())
  };
  
  return(
    <Container>
      <Form onSubmit={onSubmit}>
        <Input
          ref={todoInput}
          type={'text'}
          placeholder='create todo...'
        />
      </Form>
    </Container>
  )
}

export default CreateTodo;