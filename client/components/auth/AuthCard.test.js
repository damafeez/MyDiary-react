import React from 'react';
import AuthCard from './AuthCard';

const setup = (overrideProps) => {
  const props = {
    value: 'name',
    signup: jest.fn(),
    login: jest.fn(),
  };
  const wrapper = shallow(<AuthCard {...props} {...overrideProps} />);
  return { props, wrapper };
};

it('matches snapshot', () => {
  const { wrapper } = setup();
  expect(wrapper).toMatchSnapshot();
});
it('matches snapshot:::click:loginP', () => {
  const { wrapper, props } = setup();
  wrapper.setState({ activeView: 'signup' });
  wrapper.find('.login-signup_login > p > span').simulate('click');
  wrapper.find('.login-signup_login form').simulate('submit');
  expect(wrapper).toMatchSnapshot();
  expect(props.login).toHaveBeenCalled();
});
it('matches snapshot:::click:signupP', () => {
  const { wrapper, props } = setup();
  wrapper.setState({ activeView: 'signup' });
  wrapper.find('.login-signup_signup > p > span').simulate('click');
  wrapper.find('.login-signup_signup form').simulate('submit');
  expect(wrapper).toMatchSnapshot();
  expect(props.signup).toHaveBeenCalled();
});
