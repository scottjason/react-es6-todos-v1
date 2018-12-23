import React, { Component } from 'react';
import GlobalStyles, { Container } from './App.style.js';
import Todos from './components/Todos/Todos';
import stubTodos from './stub'

class App extends Component {
  render() {
    return (
      <Container>
        <GlobalStyles />
        <Todos todos={stubTodos} />
      </Container>
    );
  }
}

export default App;
