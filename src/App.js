import React, { Component } from 'react';
import GlobalStyles, { Container } from './App.style.js';
import Todos from './components/Todos/Todos';

/* initial stub data */
import stub from './stub';

class App extends Component {
  render() {
    return (
      <Container>
        <GlobalStyles />
        <Todos todos={stub.todos} />
      </Container>
    );
  }
}

export default App;
