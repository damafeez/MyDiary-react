import React from 'react';
import Scroller from './Scroller';

it('matches snapshot', () => {
  const wrapper = shallow(<Scroller />);
  expect(wrapper).toMatchSnapshot();
});
