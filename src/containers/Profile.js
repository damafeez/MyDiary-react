import React, { Component } from 'react';
import { connect } from 'react-redux';
import scrollAction from '../actions/scroll';
import { getEntries as getEntriesAction } from '../actions/entries';
import InputBox from '../components/shared/inputBox';
import icons from '../assets/icons.svg';
import './Profile.scss';

export class Home extends Component {
  state = {
    fullName: '',
    email: '',
    password: '',
    newPassword: '',
    confirmPassword: '',
    activeView: '',
  }

  switchView = (view) => {
    this.setState((prevState) => ({ activeView: prevState.activeView !== view ? view : '' }));
  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value })

  handleProfileUpdate = () => {
  }

  handlePasswordUpdate = () => {
  }

  render() {
    const {
      fullName,
      email,
      password,
      newPassword,
      confirmPassword,
      activeView,
    } = this.state;
    const {
      entries,
      user,
    } = this.props;
    return (
      <div className="profile">
        <section className="info-settings">
          <div className="settings">
            <div>
              <div className="header" onClick={() => this.switchView('edit-profile')}>
                <span>EDIT PROFILE</span>
                <svg className="icon">
                  <use xlinkHref={`${icons}#icon-user`} />
                </svg>
              </div>
              <form className={`open-close ${activeView === 'edit-profile' ? 'active' : ''}`} onSubmit="editProfile(event)">
                <InputBox handleChange={this.handleChange} value={fullName} label="Full Name" icon="icon-user" name="fullName" required />
                <InputBox handleChange={this.handleChange} value={email} label="Email" icon="icon-at-sign" name="email" required />
                <button type="submit" name="button" className="round btn">Update</button>
              </form>
            </div>
            <div>
              <div className="header" onClick={() => this.switchView('reset-password')}>
                <span>CHANGE PASSWORD</span>
                <svg className="icon">
                  <use xlinkHref={`${icons}#icon-unlock`} />
                </svg>
              </div>
              <form className={`open-close ${activeView === 'reset-password' ? 'active' : ''}`} onSubmit="changePassword(event)">
                <InputBox handleChange={this.handleChange} value={password} label="Current Password" icon="icon-unlock" name="password" required />
                <InputBox handleChange={this.handleChange} value={newPassword} label="New Password" icon="icon-unlock" name="newPassword" required />
                <InputBox handleChange={this.handleChange} value={confirmPassword} label="Confirm Password" icon="icon-unlock" name="confirmPassword" required />
                <button type="submit" name="button" className="round btn">Update</button>
              </form>
            </div>
            <div>
              <div className="header check">
                <label htmlFor="show-notification">SHOW DAILY REMINDER</label>
                <input type="checkbox" checked name="reminder" id="show-notification" />
              </div>
            </div>
            <button type="button" onClick="logout()" className="btn round logout">Logout</button>
          </div>
          <div className="info">
            <span id="number">{entries.length}</span>
            <span id="title">{entries.length > 1 ? 'ENTRIES' : 'ENTRY'} ADDED</span>
            <h2>{user.fullName}</h2>
            <p>{user.email}</p>
          </div>
        </section>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  entries: state.entries.entries,
  user: state.auth.user,
});

export default connect(mapStateToProps, {
  scroll: scrollAction,
  getEntries: getEntriesAction,
})(Home);
