import React from 'react';
import { Header } from './Header';

it('matches snapshot', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});

it('matches snapshot', () => {
  const wrapper = shallow(<Header profileImage="random-image" />);
  expect(wrapper).toMatchSnapshot();
});
