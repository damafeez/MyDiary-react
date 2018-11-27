import React, { Component } from 'react';
import InputBox from '../shared/inputBox';
import './AddEntry.scss';

export default class AddEntry extends Component {
  state = {
    title: '',
    body: '',
  }

  render() {
    const { title, body } = this.state;
    return (
      <section className="add-entry">
        <h2>Add diary entry</h2>
        <form name="edit-entry">
          <InputBox handleChange={this.handleChange} value={title} label="Title" icon="icon-edit-2" name="title" required />
          <InputBox type="textarea" handleChange={this.handleChange} value={body} label="Body" icon="icon-file-text" name="body" required />
          <input type="submit" name="update" value="Add" className="btn round" />
          <input onclick="hideAdd()" type="reset" className="btn round cancel" value="Cancel" />
        </form>
      </section>
    );
  }
}
