import React, { Component } from 'react';
import './ReadEntry.scss';

export default class AddEntry extends Component {
  state = {
    title: '',
    body: '',
  }

  render() {
    const { title, body } = this.state;
    return (
      <section className="read-entry">
        <h2>This is a simple title</h2>
        <p className="date">JAN 7</p>
        <p className="body">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore voluptate, ea ex iste, provident beatae, aperiam optio corrupti accusantium veritatis natus suscipit est? Expedita ab veritatis esse cum asperiores velit.</p>
      </section>
    );
  }
}
