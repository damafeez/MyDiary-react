import React from 'react';
import AuthCard from './AuthCard';

const signup = (e, callback) => callback();
const setup = (overrideProps) => {
  const props = {
    value: 'name',
    signup,
  };
  const wrapper = shallow(<AuthCard {...props} {...overrideProps} />);
  return { props, wrapper };
};

it('matches snapshot', () => {
  const { wrapper } = setup();
  expect(wrapper).toMatchSnapshot();
});
it('matches snapshot:::click:loginP', () => {
  const { wrapper } = setup();
  wrapper.setState({ activeView: 'signup' });
  wrapper.find('.login-signup_login > p > span').simulate('click');
  expect(wrapper).toMatchSnapshot();
});
it('matches snapshot:::click:signupP', () => {
  const { wrapper } = setup();
  wrapper.setState({ activeView: 'signup' });
  wrapper.find('.login-signup_signup > p > span').simulate('click');
  wrapper.find('.login-signup_signup form').simulate('submit');
  expect(wrapper).toMatchSnapshot();
});
