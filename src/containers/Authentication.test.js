import React from 'react';
import { Authentication } from './Authentication';

const signup = (e, callback) => callback();
const setup = (overrideProps) => {
  const props = {
    value: 'name',
    signup,
  };
  const wrapper = shallow(<Authentication {...props} {...overrideProps} />);
  return { props, wrapper };
};

it('matches snapshot', () => {
  const { wrapper } = setup();
  expect(wrapper).toMatchSnapshot();
});
