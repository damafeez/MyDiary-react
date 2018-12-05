import React from 'react';
import { Authentication } from './Authentication';

const signup = jest.fn(() => ({}));
const login = jest.fn(() => ({}));
const signupCallback = jest.fn();
const mockEvent = {
  preventDefault: jest.fn(),
  target: {
    loginUsername: { value: '' },
    loginPassword: { value: '' },
    signupUsername: { value: '' },
    signupPassword: { value: '' },
    signupFullName: { value: '' },
    signupEmail: { value: '' },
    reset: jest.fn(),
  },
};
const setup = (overrideProps) => {
  const props = {
    value: 'name',
    signup,
    login,
  };
  const wrapper = shallow(<Authentication {...props} {...overrideProps} />);
  return { props, wrapper };
};

it('matches snapshot', () => {
  const { wrapper } = setup();
  expect(wrapper).toMatchSnapshot();
});

it('loginHandler should be callable', () => {
  const { wrapper } = setup();
  wrapper.instance().loginHandler(mockEvent);
  expect(login).toHaveBeenCalledWith({
    username: mockEvent.target.loginUsername.value, password: mockEvent.target.loginPassword.value,
  });
});

it('signupHandler should be callable', () => {
  const { wrapper } = setup();
  wrapper.instance().signupHandler(mockEvent, signupCallback);
  expect(signup).toHaveBeenCalledWith({
    username: mockEvent.target.signupUsername.value,
    password: mockEvent.target.signupPassword.value,
    email: mockEvent.target.signupEmail.value,
    fullName: mockEvent.target.signupFullName.value,
  });
});
