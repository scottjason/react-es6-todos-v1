import React from 'react';
import { shallow, mount } from 'enzyme';
import CreateTodo from './CreateTodo';

const createRandId = () => faker.random.uuid();

describe('CreateTodo', () => {

  test('it should exist', () => {
    let wrapper = mount(<CreateTodo />);
    expect(wrapper.find('form')).toExist();
    expect(wrapper.find('input')).toExist();
  });

  test('should have exatly one input', ()=> {
    let wrapper = mount(<CreateTodo />);
    expect(wrapper).toContainExactlyOneMatchingElement('input');
  })
  
  test('input should have default value of empty string', () => {
    let wrapper = mount(<CreateTodo />);
    expect(wrapper.find('input').at(0)).toHaveValue('');
  });
  
  test('should have an on onSubmit prop method', () => {
    let wrapper = shallow(<CreateTodo />);
    expect(wrapper.props().children.props.onSubmit).toBeInstanceOf(Function);
  });
});
