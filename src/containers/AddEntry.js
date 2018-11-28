import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddEntryUI from '../components/home/AddEntry';
import scrollAction from '../actions/scroll';
import { createEntry as createEntryAction } from '../actions/entries';
import set from '../actions/notification';

export class AddEntry extends Component {
  handleSubmit = async (event) => {
    event.preventDefault();
    const { createEntry, setNotification } = this.props;
    const form = event.target;
    const response = await createEntry({
      title: form.title.value,
      body: form.body.value,
    });
    if (response.success) form.reset();
    if (response.error) setNotification({ message: response.error, status: 'error' });
  }

  render() {
    const { scroll, createEntryLoading } = this.props;
    return (
      <AddEntryUI
        createEntryLoading={createEntryLoading}
        handleSubmit={this.handleSubmit}
        scroll={scroll}
      />
    );
  }
}
const mapStateToProps = (state) => ({ createEntryLoading: state.entries.createEntryLoading });

export default connect(mapStateToProps, {
  setNotification: set,
  scroll: scrollAction,
  createEntry: createEntryAction,
})(AddEntry);
