import React from 'react';
import { shallow, mount } from 'enzyme';
import TodosContainer from './TodosContainer';
import Todos from '../components/Todos/Todos';
import stub from '../stub';
import { fetchTodos } from '../api';

describe('TodosContainer', () => {
  
  test('renders correctly with no props', () => {
    
    /* shallow, no children */
    let wrapper = shallow(<TodosContainer />);
    expect(wrapper.exists()).toBe(true)
    expect(wrapper).toMatchSnapshot();;
  });
  
  test('it should render one Todos component', () => {
    
    /* mount, includes children */
    let wrapper = shallow(<TodosContainer />);
    return fetchTodos(stub).then(() => {
      expect(wrapper.children(Todos).length).toEqual(1);
    });
  });
});
