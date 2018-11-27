import React, { Component } from 'react';
import Scroller from '../layouts/Scroller';
import AddEntry from './AddEntry';
import EntryList from '../components/home/EntryList';
import ReadEntry from '../components/home/ReadEntry';
import './Home.scss';

export default class Home extends Component {
  addEntryRef = React.createRef();

  entryListRef = React.createRef();

  render() {
    return (
      <div className="home">
        <Scroller addEntry={this.addEntryRef} entryList={this.entryListRef}>
          <AddEntry setRef={this.addEntryRef} />
          <EntryList setRef={this.entryListRef} />
          <ReadEntry />
        </Scroller>
      </div>
    );
  }
}
