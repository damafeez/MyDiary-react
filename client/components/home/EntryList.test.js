import React from 'react';
import EntryList from './EntryList';

const setup = (overrideProps) => {
  const props = {
    updateMode: false,
    currentIndex: 0,
    scroll: jest.fn(),
    handleClick: jest.fn(),
    entries: [{ id: 1, title: 'this title', body: 'this body' }],
  };
  const wrapper = shallow(<EntryList {...props} {...overrideProps} />);
  return { props, wrapper };
};

it('matches snapshot', () => {
  const { wrapper, props } = setup();
  wrapper.find('li').simulate('click');
  expect(props.handleClick).toHaveBeenCalled();
  expect(props.scroll).toHaveBeenCalledWith(false);
  expect(wrapper).toMatchSnapshot();
});
it('matches snapshot :::currentIndex:1', () => {
  const { wrapper } = setup({ currentIndex: 1 });
  expect(wrapper).toMatchSnapshot();
});
