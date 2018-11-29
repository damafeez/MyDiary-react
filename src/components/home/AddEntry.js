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

  // eslint-disable-next-line consistent-return
  componentDidUpdate = (prevProps) => {
    const { updateMode, entry } = this.props;
    if (prevProps.updateMode !== updateMode) {
      if (updateMode) return this.setState({ title: entry.title, body: entry.body });
      this.setState({ title: '', body: '' });
    }
  }

  render() {
    const { title, body } = this.state;
    const { handleSubmit, createEntryLoading, updateMode } = this.props;
    return (
      <section className="add-entry">
        <h2>{updateMode ? 'Modify diary entry' : 'Add diary entry'}</h2>
        <form name="edit-entry" onSubmit={handleSubmit} onReset={this.handleReset}>
          <InputBox handleChange={this.handleChange} value={title} label="Title" icon="icon-edit-2" name="title" required />
          <InputBox type="textarea" handleChange={this.handleChange} value={body} label="Body" icon="icon-file-text" name="body" required />
          <input type="submit" disabled={createEntryLoading} value={updateMode ? 'Update' : 'Add'} className="btn round" />
          <input type="reset" disabled={createEntryLoading} className="btn round cancel" value="Cancel" />
        </form>
      </section>
    );
  }
}
