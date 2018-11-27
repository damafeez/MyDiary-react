import React, { Component } from 'react';
import './EntryList.scss';

export default class AddEntry extends Component {
  state = {
    title: '',
    body: '',
  }

  render() {
    const { title, body } = this.state;
    const { setRef } = this.props;
    return (
      <section ref={setRef} className="entries">
        <div className="today">
          <span id="date">13</span>
          <span id="day">TUESDAY</span>
        </div>
        <ul>
          <li>
            <span className="pointer" />
            <h4 className="title">Funny Title</h4>
            <p className="body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis aliquam corrupti non eius labore facilis dolor doloremque, molestias necessitatibus esse eos dolorum architecto aut fugiat praesentium, delectus ipsum sint veniam.</p>
            <span className="date">JUN<br />2018</span>
          </li>
          <li>
            <span className="pointer" />
            <h4 className="title">Funny Title</h4>
            <p className="body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis aliquam corrupti non eius labore facilis dolor doloremque, molestias necessitatibus esse eos dolorum architecto aut fugiat praesentium, delectus ipsum sint veniam.</p>
            <span className="date">JUN<br />2018</span>
          </li>
        </ul>
      </section>
    );
  }
}
