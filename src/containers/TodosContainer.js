import React, { Component } from 'react';
import CreateTodo from '../components/CreateTodo/CreateTodo';
import Todos from '../components/Todos/Todos';
import { fetchTodos } from '../api';
import faker from 'faker';

/* initial stub data */
import stub from '../stub';

class TodosContainer extends Component {

  _isMounted = false;
  
  constructor(props) {
    super();
    this.state = {
      todos: [],
    };
  }
  componentDidMount() {
    this._isMounted = true;

    fetchTodos(stub).then(data => {
      let todos = data.todos;
      if (this._isMounted) {
        todos = todos.map(todo=> {
          todo.isEditMode = false
          return todo;
        })
        this.setState({ todos })
      }
    });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  createRandId() {
    return faker.random.uuid();
  }
  
  sortByMostRecent(x, y) {
    return x.createdAt - y.createdAt;
  }
  
  onCreateTodo = text => {
    let todo = {
      id: this.createRandId(),
      text: text,
      isEditMode: false,
      createdAt: Date.now(),
    };
    let todos = this.state.todos;
    todos.push(todo);
    todos = todos.sort(this.sortByMostRecent);
    this.setState({todos});
  } 
  onDeleteTodo = todo => {
    let todos = this.state.todos;
    todos = todos.filter(td => td.id !== todo.id);
    this.setState({todos});
  }
  onToggleUpdate = todo => {
    let todos = this.state.todos.map(td=> {
      if (td.id === todo.id) {
        td.isEditMode = !td.isEditMode;
      } else {
        td.isEditMode = false;
      }
      return td;
    });
    this.setState({todos}); 
  }
  onSaveUpdatedTodo = todo => {
    let todos = this.state.todos.map(td=> {
      if(td.id === todo.id) {
        td.text = todo.text;
      }
      td.isEditMode = false;
      return td;
    }).sort(this.sortByMostRecent);
    this.setState({todos});
  }
  render() {
    return(
      <React.Fragment>
        <CreateTodo 
          onCreateTodo={todo=> this.onCreateTodo(todo)}
        />
        <Todos
          todos={this.state.todos}
          onToggleUpdate={todo=> this.onToggleUpdate(todo)}
          onDeleteTodo={todo=> this.onDeleteTodo(todo)}
          onSaveUpdatedTodo={todo=> this.onSaveUpdatedTodo(todo)}
        />
      </React.Fragment>
    )
  }
}

export default TodosContainer;