import React from 'react';
import { shallow, mount } from 'enzyme';
import TodosContainer from './TodosContainer';
import Todos from '../components/Todos';

jest.mock('../../api/');

describe('TodosContainer', () => {
  test('renders', () => {
    const wrapper = shallow(<TodosContainer />);
    expect(wrapper.exists()).toBe(true);
  })
});
