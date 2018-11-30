import React from 'react';
import { AddEntry } from './AddEntry';

const signup = (e, callback) => callback();
const setup = (overrideProps) => {
  const props = {
    value: 'name',
    signup,
  };
  const wrapper = shallow(<AddEntry {...props} {...overrideProps} />);
  return { props, wrapper };
};

it('matches snapshot', () => {
  const { wrapper } = setup();
  expect(wrapper).toMatchSnapshot();
});
