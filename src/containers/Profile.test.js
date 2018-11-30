import React from 'react';
import { Profile } from './Profile';

const updatePassword = () => ({});
const updateProfile = () => ({});
const mockEvent = {
  preventDefault: jest.fn(),
  target: {
    fullName: { value: '' },
    email: { value: '' },
    password: { value: '' },
    confirmPassword: { value: '' },
    newPassword: { value: '' },
  },
};
const setup = (overrideProps) => {
  const props = {
    entries: [{ id: 1, title: 'this title', body: 'this body' }],
    user: { fullName: 'Afeez Awoyemi', email: 'test@gmail.c' },
    updatePassword,
    updateProfile,
  };
  const wrapper = shallow(<Profile {...props} {...overrideProps} />);
  return { props, wrapper };
};

it('matches snapshot', () => {
  const { wrapper } = setup();
  expect(wrapper).toMatchSnapshot();
});

it('matches snapshot:::entries.length > 1', () => {
  const { wrapper } = setup({ entries: [{ fullName: 'a', email: 'email' }, { fullName: 'b', email: 'emailb' }] });
  wrapper.find('.settings > div:first-child div.header').simulate('click');
  wrapper.find('.settings > div:first-child div.header').simulate('click');
  wrapper.find('.settings > div:first-child + div div.header').simulate('click');
  wrapper.find('.settings > div:first-child + div div.header').simulate('click');
  expect(wrapper).toMatchSnapshot();
});

it('matches snapshot:::entries.length > 1', () => {
  const { wrapper } = setup({ entries: [{ fullName: 'a', email: 'email' }, { fullName: 'b', email: 'emailb' }] });
  wrapper.find('.settings > div:first-child form').simulate('submit', mockEvent);
  wrapper.find('.settings > div:first-child + div form').simulate('submit', mockEvent);
  expect(wrapper).toMatchSnapshot();
});
