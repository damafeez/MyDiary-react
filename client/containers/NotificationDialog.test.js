import React from 'react';
import { NotificationDialog } from './NotificationDialog';

const setup = (overrideProps) => {
  const props = {
    notification: { status: 'success', message: 'test', timeout: 1 },
    user: { fullName: 'Afeez Awoyemi', email: 'test@gmail.c' },
    clearNotification: jest.fn(),
  };
  const wrapper = shallow(<NotificationDialog {...props} {...overrideProps} />);
  return { props, wrapper };
};

it('matches snapshot', () => {
  const { wrapper, props } = setup();
  wrapper.instance().componentDidUpdate({ notification: { status: 'error', message: 'test', timeout: 1 } });

  setTimeout(() => {
    expect(props.clearNotification).toHaveBeenCalled();
  }, 5);
  expect(wrapper).toMatchSnapshot();
});
