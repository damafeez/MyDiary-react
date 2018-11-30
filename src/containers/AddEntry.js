import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddEntryUI from '../components/home/AddEntry';
import scrollAction from '../actions/scroll';
import { createEntry as createEntryAction } from '../actions/entries';

export class AddEntry extends Component {
  handleSubmit = async (event) => {
    event.preventDefault();
    const { createEntry } = this.props;
    const form = event.target;
    const response = await createEntry({
      title: form.title.value,
      body: form.body.value,
    });
    if (!response.error) form.reset();
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
  scroll: scrollAction,
  createEntry: createEntryAction,
})(AddEntry);
