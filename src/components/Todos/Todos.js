import React, { Component } from 'react';
import { Container } from './Todos.style';
import Todo from '../Todo/Todo';

class Todos extends Component {
  render() {
    return(
      <Container>
        {this.props.todos.map(todo => {
          return(
            <Todo
              key={todo.id}
              text={todo.text}
            />
          );
        })}
      </Container>
    )
  }
}

export default Todos;