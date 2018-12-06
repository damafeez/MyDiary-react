import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.scss';
import { userPlaceholderImage } from '../mixin';

export const Header = ({ profileImage }) => (
  <header>
    <h1><Link to="/">MyDiary</Link></h1>
    <Link to="/profile"><img className="bg" src={profileImage || userPlaceholderImage} alt="" /></Link>
  </header>
);

export default connect((state) => ({ profileImage: state.auth.user.image }), {})(Header);
