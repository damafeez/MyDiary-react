import React from 'react';
import Profile from './Profile';

it('matches snapshot', () => {
  const wrapper = shallow(<Profile />);
  expect(wrapper).toMatchSnapshot();
});
