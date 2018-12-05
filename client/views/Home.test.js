import React from 'react';
import Home from './Home';

it('matches snapshot', () => {
  const wrapper = shallow(<Home />);
  expect(wrapper).toMatchSnapshot();
});
