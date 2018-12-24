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
              todo={todo}
              key={todo.id}
              isEditMode={todo.isEditMode}
              onDeleteTodo={this.props.onDeleteTodo}
              onToggleUpdate={this.props.onToggleUpdate}
              onSaveUpdatedTodo={this.props.onSaveUpdatedTodo}
            />
          );
        })}
      </Container>
    )
  }
}

export default Todos;