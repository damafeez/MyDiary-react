import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import john from '../../assets/john.jpg';

export default () => (
  <header>
    <h1><Link to="/">MyDiary</Link></h1>
    <Link to="/profile"><img className="bg" src={john} alt="" /></Link>
  </header>
);
