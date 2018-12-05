import React from 'react';
import Header from './Header';

it('matches snapshot', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});
