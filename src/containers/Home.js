import React from 'react';
import Scroller from '../layouts/Scroller';
import AddEntry from '../components/home/AddEntry';
import EntryList from '../components/home/EntryList';
import ReadEntry from '../components/home/ReadEntry';
import './Home.scss';

export default (props) => (
  <div className="home">
    <Scroller>
      <AddEntry />
      <EntryList />
      <ReadEntry />
    </Scroller>
  </div>
);
