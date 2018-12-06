import React from 'react';
import ImageUploader from './ImageUploader';

const setup = (overrideProps) => {
  const props = {
    value: 'name',
  };
  const wrapper = shallow(<ImageUploader {...props} {...overrideProps} />);
  return { props, wrapper };
};

it('matches snapshot', () => {
  const { wrapper } = setup();
  expect(wrapper).toMatchSnapshot();
});
it('matches snapshot:::loading:', () => {
  const { wrapper } = setup({ loading: true });
  expect(wrapper).toMatchSnapshot();
});
it('matches snapshot:::profileImage', () => {
  const { wrapper } = setup({ profileImage: 'profileImage' });
  expect(wrapper).toMatchSnapshot();
});
