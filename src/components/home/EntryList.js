import React from 'react';
import './EntryList.scss';
import moment from 'moment';

export default ({
  entries,
  loading,
  error,
  handleClick,
  currentEntry,
}) => {
  if (entries.length === 0) {
    if (loading) return (<p className="no-record">Loading...</p>);
    if (error) return (<p className="no-record">{error}</p>);
    return (<p className="no-record">No entries.</p>);
  }
  return (
    <section className="entries">
      <div className="today">
        <span id="date">{moment().date()}</span>
        <span id="day">{moment().format('dddd').toUpperCase()}</span>
      </div>
      <ul>
        {
          entries.map((entry) => (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            <li className={currentEntry === entry.id ? 'active' : ''} key={entry.id} onClick={() => handleClick(entry.id)}>
              <span className="pointer" />
              <h4 className="title">{entry.title}</h4>
              <p className="body">{entry.body}</p>
              <span className="date">{moment(entry.created).format('MMM').toUpperCase()}<br />{moment(entry.created).date()}</span>
            </li>
          ))
        }
      </ul>
    </section>
  );
};
