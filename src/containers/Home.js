import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import scrollAction from '../actions/scroll';
import { getEntries as getEntriesAction, setCurrentEntry, deleteEntry } from '../actions/entries';
import Footer from '../components/home/Footer';
import Scroller from '../layouts/Scroller';
import AddEntry from './AddEntry';
import EntryList from '../components/home/EntryList';
import ReadEntry from '../components/home/ReadEntry';
import { confirmAction as actionConfirm } from '../actions/dialog';
import './Home.scss';

export class Home extends Component {
  componentDidMount = () => {
    const { getEntries } = this.props;
    getEntries();
  }

  deleteEntry = () => {
    const { deleteEntryAction, currentIndex, entries } = this.props;
    deleteEntryAction(entries[currentIndex].id, currentIndex);
  }

  confirmDelete = () => {
    const { confirmAction } = this.props;
    confirmAction('Are you sure you want to delete?', this.deleteEntry);
  }

  render() {
    const {
      scroll,
      getEntriesLoading,
      getEntriesError,
      entries,
      setEntry,
      currentIndex,
      showAdd,
    } = this.props;
    return (
      <Fragment>
        <div className="home">
          <Scroller>
            <AddEntry />
            <EntryList
              entries={entries}
              scroll={scroll}
              handleClick={setEntry}
              currentIndex={currentIndex}
            />
            <ReadEntry
              loading={getEntriesLoading}
              error={getEntriesError}
              entries={entries}
              currentIndex={currentIndex}
            />
          </Scroller>
        </div>
        <Footer showAdd={showAdd} handleDelete={this.confirmDelete} scroll={scroll} entryIsSelected={!!entries[currentIndex]} />
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  getEntriesLoading: state.entries.getEntriesLoading,
  getEntriesError: state.entries.getEntriesError,
  entries: state.entries.entries,
  currentIndex: state.entries.currentEntry,
  showAdd: state.scroller.showAdd,
});

export default connect(mapStateToProps, {
  scroll: scrollAction,
  getEntries: getEntriesAction,
  setEntry: setCurrentEntry,
  confirmAction: actionConfirm,
  deleteEntryAction: deleteEntry,
})(Home);
