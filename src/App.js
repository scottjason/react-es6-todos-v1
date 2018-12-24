import React, { Component } from 'react';
import GlobalStyles, { Container } from './App.style.js';
import TodosContainer from './containers/TodosContainer/TodosContainer';
import CreateTodoContainer from './containers/CreateTodoContainer/CreateTodoContainer';

class App extends Component {
  render() {
    return (
      <Container>
        <GlobalStyles />
        <CreateTodoContainer />
        <TodosContainer />
      </Container>
    );
  }
}

export default App;
