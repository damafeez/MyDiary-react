import React from 'react';
import './EntryList.scss';
import moment from 'moment';

export default ({
  entries,
  handleClick,
  currentEntryId,
  scroll,
}) => (
  <section className="entries">
    <div className="today">
      <span id="date">{moment().date()}</span>
      <span id="day">{moment().format('dddd').toUpperCase()}</span>
    </div>
    <ul>
      {
        entries.map((entry, index) => (
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
          <li className={currentEntryId === index ? 'active' : ''} key={entry.id} onClick={() => { scroll(false); handleClick(index); }}>
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
