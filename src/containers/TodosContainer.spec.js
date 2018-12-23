import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import TodosContainer from './TodosContainer';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('TodosContainer', () => {
  test('renders', () => {
    const wrapper = shallow(<TodosContainer />);
    expect(wrapper.exists()).toBe(true);
  })
});
