import React from 'react';
import InputBox from './inputBox';

const setup = (overrideProps) => {
  const props = {
    value: 'name',
  };
  const wrapper = shallow(<InputBox {...props} {...overrideProps} />);
  return { props, wrapper };
};

it('matches snapshot', () => {
  const { wrapper } = setup();
  expect(wrapper).toMatchSnapshot();
});
it('matches snapshot:::value:', () => {
  const { wrapper } = setup({ value: '' });
  expect(wrapper).toMatchSnapshot();
});
it('matches snapshot:::textarea', () => {
  const { wrapper } = setup({ type: 'textarea' });
  expect(wrapper).toMatchSnapshot();
});
