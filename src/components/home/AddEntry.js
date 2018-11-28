import React, { Component } from 'react';
import InputBox from '../shared/inputBox';
import './AddEntry.scss';

export default class AddEntry extends Component {
  state = {
    title: '',
    body: '',
  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value })

  handleReset = () => {
    const { scroll } = this.props;
    this.setState({ title: '', body: '' });
    scroll(false);
  }

  render() {
    const { title, body } = this.state;
    const { handleSubmit, createEntryLoading } = this.props;
    return (
      <section className="add-entry">
        <h2>Add diary entry</h2>
        <form name="edit-entry" onSubmit={handleSubmit} onReset={this.handleReset}>
          <InputBox handleChange={this.handleChange} value={title} label="Title" icon="icon-edit-2" name="title" required />
          <InputBox type="textarea" handleChange={this.handleChange} value={body} label="Body" icon="icon-file-text" name="body" required />
          <input type="submit" disabled={createEntryLoading} name="update" value="Add" className="btn round" />
          <input type="reset" disabled={createEntryLoading} className="btn round cancel" value="Cancel" />
        </form>
      </section>
    );
  }
}
