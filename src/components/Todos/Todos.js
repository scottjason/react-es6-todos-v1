import React, { Component } from 'react';
import { Container } from './Todos.style';
import Todo from '../Todo/Todo';

class Todos extends Component {
  sortByMostRecent(x, y) {
    return x.createdAt - y.createdAt;
  }
  render() {
    return(
      <Container>
        {this.props.todos.sort(this.sortByMostRecent).map(todo => {
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