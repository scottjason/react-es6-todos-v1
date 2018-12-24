import React from 'react';
import { Container, Text, Delete } from './Todo.style';

const Todo = ({ todo, onDeleteTodo }) => (
  <Container>
    <Text>{todo.text}</Text>
    <Delete onClick={()=> onDeleteTodo(todo)}>X</Delete>
  </Container>
)

export default Todo;