import React from 'react';
import ReadEntry from './ReadEntry';

const setup = (overrideProps) => {
  const props = {
    currentIndex: 0,
    entries: [{
      id: 1, title: 'this title', body: 'this body', created: (new Date(5000)),
    }],
  };
  const wrapper = shallow(<ReadEntry {...props} {...overrideProps} />);
  return { props, wrapper };
};

it('matches snapshot', () => {
  const { wrapper } = setup();
  expect(wrapper).toMatchSnapshot();
});
it('matches snapshot:::loading', () => {
  const { wrapper } = setup({ entries: [], loading: true });
  expect(wrapper).toMatchSnapshot();
});
it('matches snapshot:::error', () => {
  const { wrapper } = setup({ entries: [], error: true });
  expect(wrapper).toMatchSnapshot();
});
it('matches snapshot:::entries:[]', () => {
  const { wrapper } = setup({ entries: [] });
  expect(wrapper).toMatchSnapshot();
});
