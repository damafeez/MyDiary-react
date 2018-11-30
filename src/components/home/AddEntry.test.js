import React from 'react';
import AddEntry from './AddEntry';

const setup = (overrideProps) => {
  const props = {
    updateMode: false,
    scroll: jest.fn(),
    entry: { title: 'this title', body: 'this body' },
  };
  const wrapper = shallow(<AddEntry {...props} {...overrideProps} />);
  return { props, wrapper };
};

it('matches snapshot :::update:false', () => {
  const { wrapper } = setup();
  wrapper.setState({ updateMode: true });
  expect(wrapper).toMatchSnapshot();
});

it('matches snapshot :::update:true', () => {
  const { wrapper } = setup({ updateMode: true });
  wrapper.setState({ updateMode: false });
  expect(wrapper).toMatchSnapshot();
});
it('calls scroll :::reset', () => {
  const { wrapper, props } = setup({ updateMode: true });
  wrapper.find('[type="reset"]').simulate('click');
  wrapper.find('form').simulate('reset');
  expect(props.scroll).toHaveBeenCalled();
});
