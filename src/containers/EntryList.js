import React, { Component } from 'react';
import { connect } from 'react-redux';
import EntryListUI from '../components/home/EntryList';
import scrollAction from '../actions/scroll';
import { getEntries as getEntriesAction, setCurrentEntry } from '../actions/entries';

export class EntryList extends Component {
  componentDidMount = () => {
    const { getEntries } = this.props;
    getEntries();
  }

  render() {
    const {
      scroll,
      getEntriesLoading,
      getEntriesError,
      entries,
      setEntry,
      currentEntry,
    } = this.props;
    return (
      <EntryListUI
        loading={getEntriesLoading}
        error={getEntriesError}
        entries={entries}
        scroll={scroll}
        handleClick={setEntry}
        currentEntry={currentEntry}
      />
    );
  }
}
const mapStateToProps = (state) => ({
  getEntriesLoading: state.entries.getEntriesLoading,
  getEntriesError: state.entries.getEntriesError,
  entries: state.entries.entries,
  currentEntry: state.entries.currentEntry,
});

export default connect(mapStateToProps, {
  scroll: scrollAction,
  getEntries: getEntriesAction,
  setEntry: setCurrentEntry,
})(EntryList);
