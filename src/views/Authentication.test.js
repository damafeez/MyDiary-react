import React from 'react';
import Authentication from './Authentication';

it('matches snapshot', () => {
  const wrapper = shallow(<Authentication />);
  expect(wrapper).toMatchSnapshot();
});
