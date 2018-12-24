import React from 'react';
import { shallow, mount } from 'enzyme';
import CreateTodo from './CreateTodo';

const createRandId = () => faker.random.uuid();

/**
 *
 * Unit Testing
 *
*/

describe('CreateTodo', () => {
  
  let wrapper, input, componentInstance;
  
  beforeEach(() => {
    wrapper = mount(<CreateTodo />)
    componentInstance = wrapper.childAt(0);
    input = wrapper.find('input').first();
  });

  const createShallowWrapper = () => {
    wrapper = shallow(<CreateTodo />)
    componentInstance = wrapper.childAt(0);
    input = wrapper.find('input').first();
  };
  
  /**
  * High-Level Checks
  */
  test('it should have a form and and an input', () => {
    expect(wrapper.find('form')).toExist();
    expect(wrapper.find('input')).toExist();
  });
  
  test('should have exactly one form', ()=> {
    expect(wrapper).toContainExactlyOneMatchingElement('form');
  });
 
 test('should have exactly one input', ()=> {
    expect(wrapper).toContainExactlyOneMatchingElement('input');
  });
  

  /**
  * Input Field
  */
  test('should have exatly one input', ()=> {
    expect(wrapper).toContainExactlyOneMatchingElement('input');
  });
  
  test('input should have correct defaultValue', () => {
    expect(input.props().defaultValue).toEqual('')
  });
  
  test('input should have correct placeholder', () => {
    expect(input.props().placeholder).toEqual('create todo...')
  });
 
  test('input should have correct type', () => {
    expect(input.props().type).toEqual('text')
  });

  test('input value should correctly handle change', () => {
    input.instance().value = 'hello'
    input.simulate('change');
    expect(input.instance().value).toEqual('hello');
  });
});
