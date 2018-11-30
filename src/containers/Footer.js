import React, { Component } from 'react';
import { connect } from 'react-redux';
import FooterUI from '../components/home/Footer';
import scrollAction from '../actions/scroll';

// eslint-disable-next-line react/prefer-stateless-function
export class Footer extends Component {
  render() {
    const { scroll, showAdd } = this.props;
    return <FooterUI showAdd={showAdd} scroll={scroll} />;
  }
}
const mapStateToProp = (state) => ({ showAdd: state.scroller.showAdd });

export default connect(mapStateToProp, { scroll: scrollAction })(Footer);
