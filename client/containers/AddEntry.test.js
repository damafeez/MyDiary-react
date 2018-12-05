import React from 'react';
import { AddEntry } from './AddEntry';

const mockEvent = {
  preventDefault: jest.fn(),
  target: {
    title: { value: '' },
    body: { value: '' },
    reset: jest.fn(),
  },
};
const setup = (overrideProps) => {
  const props = {
    updateEntry: jest.fn(() => ({})),
    createEntry: jest.fn(() => ({})),
  };
  const wrapper = shallow(<AddEntry {...props} {...overrideProps} />);
  return { props, wrapper };
};

it('matches snapshot', () => {
  const { wrapper } = setup();
  expect(wrapper).toMatchSnapshot();
});


it('handleSubmit should be callable', () => {
  const { wrapper } = setup();
  wrapper.instance().handleSubmit(mockEvent);
  expect(mockEvent.preventDefault).toHaveBeenCalled();
});

it('handleSubmit should be callable::::updateMode:true', () => {
  const { wrapper } = setup({ updateMode: true });
  wrapper.instance().handleSubmit(mockEvent);
  expect(mockEvent.preventDefault).toHaveBeenCalled();
});
