import React from 'react';
import { Home } from './Home';

const setup = (overrideProps) => {
  const props = {
    updateMode: false,
    currentIndex: 0,
    scroll: jest.fn(),
    getEntries: jest.fn(),
    deleteEntryAction: jest.fn(),
    handleClick: jest.fn(),
    confirmAction: jest.fn(),
    entries: [{ id: 1, title: 'this title', body: 'this body' }],
    user: { fullName: 'Afeez Awoyemi', email: 'test@gmail.c' },
  };
  const wrapper = shallow(<Home {...props} {...overrideProps} />);
  return { props, wrapper };
};

it('should call getEntries on mount', () => {
  const { wrapper, props } = setup();
  expect(props.getEntries).toHaveBeenCalled();
  expect(wrapper).toMatchSnapshot();
});

it('should be able to call deleteEntry', () => {
  const { wrapper, props } = setup();
  wrapper.instance().deleteEntry();
  expect(props.deleteEntryAction).toHaveBeenCalled();
});

it('should be able to call confirmDelete', () => {
  const { wrapper, props } = setup();
  wrapper.instance().confirmDelete();
  expect(props.confirmAction).toHaveBeenCalledWith('Are you sure you want to delete?', wrapper.instance().deleteEntry);
});

it('should be able to call confirmAction', () => {
  const { wrapper, props } = setup();
  wrapper.instance().handleAdd();
  expect(props.scroll).toHaveBeenCalled();
});

it('should be able to call handleUpdate', () => {
  const { wrapper, props } = setup();
  wrapper.instance().handleUpdate();
  expect(props.scroll).toHaveBeenCalled();
});
