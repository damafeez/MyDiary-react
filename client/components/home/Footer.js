/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import './Footer.scss';
import icons from '../../assets/icons.svg';

export default ({
  handleAdd,
  showAdd,
  updateMode,
  entryIsSelected,
  handleDelete,
  handleUpdate,
  history,
}) => (
  <footer>
    <button onClick={() => history.push('/profile')} type="button" title="Settings" className="settings drop-container">
      <svg className="icon">
        <use xlinkHref={`${icons}#icon-settings`} />
      </svg>
      {/* <div className="drop">
            <div className="check">
              <input type="checkbox" checked id="show-notification" />
              <label htmlFor="show-notification">Reminder</label>
            </div>
            <p id="info" />
            <p onClick="logout()" className="btn round">Logout</p>
          </div> */}
    </button>
    <button type="button" title="New entry" onClick={handleAdd} className={`add ${showAdd && !updateMode ? 'active' : ''}`}>
      <svg className="icon">
        <use xlinkHref={`${icons}#icon-plus`} />
      </svg>
    </button>
    {entryIsSelected && (
      <button type="button" title="Edit Entry" onClick={handleUpdate} className="edit">
        <svg className="icon">
          <use xlinkHref={`${icons}#icon-edit-3`} />
        </svg>
      </button>
    )}
    {entryIsSelected && (
      <button type="button" title="Delete Entry" onClick={handleDelete} className="delete">
        <svg className="icon">
          <use xlinkHref={`${icons}#icon-trash-2`} />
        </svg>
      </button>
    )}
  </footer>
);
