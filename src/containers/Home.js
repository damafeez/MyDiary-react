import React from 'react';
import Scroller from '../layouts/Scroller';
import AddEntry from './AddEntry';
import EntryList from './EntryList';
import ReadEntry from '../components/home/ReadEntry';
import './Home.scss';

export default () => (
  <div className="home">
    <Scroller>
      <AddEntry />
      <EntryList />
      <ReadEntry />
    </Scroller>
  </div>
);
