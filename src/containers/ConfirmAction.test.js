import React from 'react';
import { ConfirmAction } from './ConfirmAction';

const setup = (overrideProps) => {
  const props = {
    confirmationPayload: { callback: jest.fn(), message: 'test' },
    cancelAction: jest.fn(),
  };
  const wrapper = shallow(<ConfirmAction {...props} {...overrideProps} />);
  return { props, wrapper };
};

it('matches snapshot', () => {
  const { wrapper, props } = setup();

  setTimeout(() => {
    expect(props.clearNotification).toHaveBeenCalled();
  }, 5);
  expect(wrapper).toMatchSnapshot();
});

it('handleCancel should be callable', () => {
  const { wrapper, props } = setup();
  wrapper.find('button.cancel').simulate('click');
  expect(props.cancelAction).toHaveBeenCalled();
});

it('confirmAction should be callable', () => {
  const { wrapper, props } = setup();
  wrapper.find('button.cancel + button').simulate('click');
  expect(props.confirmationPayload.callback).toHaveBeenCalled();
});
