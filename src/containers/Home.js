import React, { Component } from 'react';
import { connect } from 'react-redux';
import scrollAction from '../actions/scroll';
import { getEntries as getEntriesAction, setCurrentEntry } from '../actions/entries';
import Scroller from '../layouts/Scroller';
import AddEntry from './AddEntry';
import EntryList from '../components/home/EntryList';
import ReadEntry from '../components/home/ReadEntry';
import './Home.scss';

export class Home extends Component {
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
      currentEntryId,
    } = this.props;
    return (
      <div className="home">
        <Scroller>
          <AddEntry />
          <EntryList
            entries={entries}
            scroll={scroll}
            handleClick={setEntry}
            currentEntryId={currentEntryId}
          />
          <ReadEntry
            loading={getEntriesLoading}
            error={getEntriesError}
            entries={entries}
            currentEntryId={currentEntryId}
          />
        </Scroller>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  getEntriesLoading: state.entries.getEntriesLoading,
  getEntriesError: state.entries.getEntriesError,
  entries: state.entries.entries,
  currentEntryId: state.entries.currentEntry,
});

export default connect(mapStateToProps, {
  scroll: scrollAction,
  getEntries: getEntriesAction,
  setEntry: setCurrentEntry,
})(Home);
