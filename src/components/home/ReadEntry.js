import React from 'react';
import moment from 'moment';
import './ReadEntry.scss';

export default ({
  entries,
  loading,
  error,
  currentIndex,
}) => {
  const entry = entries[currentIndex] || {};
  if (entries.length === 0) {
    if (loading) entry.title = 'Loading....';
    else if (error) entry.title = error;
    else {
      entry.title = 'You have not added any entry to your diary';
      entry.body = 'Please click the green  button at bottom left to get started';
    }
  }
  return (
    <section className="read-entry">
      <h2>{entry.title}</h2>
      <p className="date">{entry.created && `${moment(entry.created).format('MMM').toUpperCase()} ${moment(entry.created).date()}`}</p>
      <p className="body">{entry.body}</p>
    </section>
  );
};
