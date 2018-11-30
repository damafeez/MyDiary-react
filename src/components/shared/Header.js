import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import john from '../../assets/john.jpg';

export default (props) => {
  const {
    type, label, handleChange, value, name, required, icon,
  } = props;
  return (
    <header>
      <h1><a href="home.html">MyDiary</a></h1>
      <Link to="/profile"><img className="bg" src={john} alt="" /></Link>
    </header>
  );
};
