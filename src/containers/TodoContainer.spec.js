import React from 'react';
import { shallow, mount } from 'enzyme';
import TodosContainer from './TodosContainer';
import Todos from '../components/Todos/Todos';
import CreateTodo from '../components/CreateTodo/CreateTodo';
import stub from '../stub';
import { fetchTodos } from '../api';

describe('TodosContainer', () => {

  test('it should be correct element', () => {
  /* shallow, no children */
    let wrapper = shallow(<TodosContainer />);
    expect(wrapper).toMatchElement(<TodosContainer />);
  });

 test('_mounted should be true when mounted', () => {
  /* shallow, no children */
    let wrapper = shallow(<TodosContainer />);
    expect(wrapper.instance()._isMounted).toEqual(true)
  });
  
  test('renders correctly with no props', () => {
    /* shallow, no children */
    let wrapper = shallow(<TodosContainer />);
    expect(wrapper.exists()).toBe(true)
    expect(wrapper).toMatchSnapshot();;
  });
  
  test('it should render both one CreateTodo component and one Todos Component ', () => {
    /* mount, includes children */
    let wrapper = mount(<TodosContainer />);
    return fetchTodos(stub).then(() => {
      expect(wrapper.children(Todos).length).toEqual(1);
      expect(wrapper.children(CreateTodo).length).toEqual(1);
    });
  });
  
  test('todos should be an array in state ', () => {
    /* mount, includes children */
    let wrapper = mount(<TodosContainer />);
    return fetchTodos(stub).then(() => {
      let state = wrapper.instance().state;
      expect(state.todos).toBeInstanceOf(Array)
    });
  });
});
