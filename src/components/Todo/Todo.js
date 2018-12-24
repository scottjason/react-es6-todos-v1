import React from 'react';
import { Container } from './Todo.style';

const Todo = ({ text }) => (
  <Container>
    <p>{text}</p>
  </Container>
)

export default Todo;