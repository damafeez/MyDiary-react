/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
import './Footer.scss';
import icons from '../../assets/icons.svg';

export default class AddEntry extends Component {
  state = {
    title: '',
    body: '',
  }

  render() {
    const { title, body } = this.state;
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
        <button type="button" title="New entry" onClick="addDiary()" className="add">
          <svg className="icon">
            <use xlinkHref={`${icons}#icon-plus`} />
          </svg>
        </button>
        <button type="button" title="Edit Entry" onClick="editDiary()" className="edit">
          <svg className="icon">
            <use xlinkHref={`${icons}#icon-edit-3`} />
          </svg>
        </button>
        <button type="button" title="Delete Entry" onClick="confirmAction('Are you sure you want to delete?', deleteEntry)" className="delete">
          <svg className="icon">
            <use xlinkHref={`${icons}#icon-trash-2`} />
          </svg>
        </button>
      </footer>
    );
  }
}
