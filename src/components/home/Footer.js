/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
import './Footer.scss';
import icons from '../../assets/icons.svg';

// eslint-disable-next-line react/prefer-stateless-function
export default class AddEntry extends Component {
  render() {
    const {
      scroll,
      showAdd,
      entryIsSelected,
      handleDelete,
    } = this.props;
    return (
      <footer>
        <button type="button" title="Settings" className="settings drop-container">
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
        <button type="button" title="New entry" onClick={() => scroll(!showAdd)} className={`add ${showAdd ? 'active' : ''}`}>
          <svg className="icon">
            <use xlinkHref={`${icons}#icon-plus`} />
          </svg>
        </button>
        {entryIsSelected && (
          <button type="button" title="Edit Entry" onClick="editDiary()" className="edit">
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
  }
}
