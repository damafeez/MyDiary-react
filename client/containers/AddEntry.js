import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddEntryUI from '../components/home/AddEntry';
import scrollAction from '../actions/scroll';
import { createEntry as createEntryAction, updateEntry as updateEntryAction } from '../actions/entries';

export class AddEntry extends Component {
  handleSubmit = async (event) => {
    event.preventDefault();
    const { createEntry, updateEntry, updateMode } = this.props;
    const form = event.target;
    const payload = {
      title: form.title.value,
      body: form.body.value,
    };
    let response;
    if (updateMode) response = await updateEntry(payload);
    else response = await createEntry(payload);
    if (!response.error) form.reset();
  }

  render() {
    const {
      scroll,
      createEntryLoading,
      updateMode,
      entry,
    } = this.props;
    return (
      <AddEntryUI
        createEntryLoading={createEntryLoading}
        handleSubmit={this.handleSubmit}
        scroll={scroll}
        updateMode={updateMode}
        entry={entry}
      />
    );
  }
}
const mapStateToProps = (state) => ({ createEntryLoading: state.entries.createEntryLoading });

export default connect(mapStateToProps, {
  scroll: scrollAction,
  createEntry: createEntryAction,
  updateEntry: updateEntryAction,
})(AddEntry);
