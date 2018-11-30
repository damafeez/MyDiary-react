import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddEntryUI from '../components/home/AddEntry';
import scrollAction from '../actions/scroll';

// eslint-disable-next-line react/prefer-stateless-function
export class AddEntry extends Component {
  render() {
    const { scroll } = this.props;
    return <AddEntryUI scroll={scroll} />;
  }
}

export default connect(null, { scroll: scrollAction })(AddEntry);
