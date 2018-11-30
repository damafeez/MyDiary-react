import React from 'react';
import Footer from './Footer';

const setup = (overrideProps) => {
  const props = {
    entryIsSelected: true,
    updateMode: false,
    showAdd: true,
    handleAdd: jest.fn(),
    history: { push: jest.fn() },
    entries: [{ title: 'this title', body: 'this body' }],
  };
  const wrapper = shallow(<Footer {...props} {...overrideProps} />);
  return { props, wrapper };
};

it('matches snapshot', () => {
  const { wrapper } = setup({ currentIndex: 1 });
  expect(wrapper).toMatchSnapshot();
});

it('matches snapshot', () => {
  const { wrapper } = setup({ currentIndex: 1, showAdd: false });
  wrapper.find('button.settings').simulate('click');
  expect(wrapper).toMatchSnapshot();
});
