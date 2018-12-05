import React from 'react';
import DefaultLayout from './DefaultLayout';

it('matches snapshot', () => {
  const wrapper = shallow(<DefaultLayout />);
  expect(wrapper).toMatchSnapshot();
});
