/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Scroller.scss';

export class Scroller extends Component {
  componentDidMount = () => {
    this.slideTo();
    window.addEventListener('resize', this.slideTo);
    setTimeout(() => { document.querySelector('div.scroller').style.transitionDuration = '1s'; }, 1000);
  }

  componentDidUpdate = (prevProps) => {
    const { showAdd } = this.props;
    if (prevProps.showAdd !== showAdd) this.slideTo();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.slideTo);
  }

  scrollToItem = (item) => {
    const diff = (item.offsetTop - window.scrollY) / 8;
    if (Math.abs(diff) > 1) {
      window.scrollTo(0, (window.scrollY + diff));
      clearTimeout(window._TO);
      window._TO = setTimeout(this.scrollToItem, 30, item);
    } else {
      window.scrollTo(0, item.offsetTop);
    }
  }

  slideTo = () => {
    const scroller = document.querySelector('div.scroller');
    const addEntry = document.querySelector('section.add-entry');
    const entryList = document.querySelector('section.entries');
    const { showAdd } = this.props;
    if (showAdd) {
      addEntry.style.display = 'initial';
      scroller.style.transform = `translate3d(${0}px, 0, 0)`;
      if (window.innerWidth <= 550) {
        this.scrollToItem(addEntry);
      }
    } else if (window.innerWidth > 550) {
      addEntry.style.display = 'initial';
      scroller.style.transform = `translate3d(${-entryList.offsetLeft}px, 0, 0)`;
    } else {
      scroller.style.transform = `translate3d(${0}px, 0, 0)`;
      addEntry.style.display = 'none';
    }
  };

  render() {
    const { children } = this.props;
    return (
      <div className="scroller">{children}</div>
    );
  }
}

const mapStateToProps = (state) => ({
  showAdd: state.scroller.showAdd,
});

export default connect(mapStateToProps)(Scroller);
