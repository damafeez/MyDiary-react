import React, { Component } from 'react';
import { connect } from 'react-redux';
import scrollAction from '../actions/scroll';
import { getEntries as getEntriesAction } from '../actions/entries';
import { updateProfile as profileUpdate, updatePassword as passwordUpdate, signout as signouAction } from '../actions/auth';
import InputBox from '../components/shared/inputBox';
import ImageUploader from '../components/profile/ImageUploader';
import icons from '../assets/icons.svg';
import './Profile.scss';

export class Profile extends Component {
  state = {
    fullName: '',
    email: '',
    password: '',
    newPassword: '',
    confirmPassword: '',
    activeView: '',
  }

  componentDidMount = () => {
    const { user } = this.props;
    this.setState({ fullName: user.fullName, email: user.email });
  }

  switchView = (view) => {
    this.setState((prevState) => ({ activeView: prevState.activeView !== view ? view : '' }));
  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value })

  handleProfileUpdate = async (event) => {
    event.preventDefault();
    const { updateProfile } = this.props;
    const response = await updateProfile({
      fullName: event.target.fullName.value,
      email: event.target.email.value,
    });
    if (!response.error) this.switchView('');
  }

  handlePasswordUpdate = async (event) => {
    event.preventDefault();
    const { updatePassword } = this.props;
    const response = await updatePassword({
      password: event.target.password.value,
      newPassword: event.target.newPassword.value,
      confirmPassword: event.target.confirmPassword.value,
    });
    if (!response.error) {
      this.switchView('');
      this.setState({ password: '', newPassword: '', confirmPassword: '' });
    }
  }

  uploadImage = (file) => {};

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
      profileUpdateLoading,
      profileImageUpdateLoading,
      passwordUpdateLoading,
      signout,
    } = this.props;
    return (
      <div className="profile">
        <section className="info-settings">
          <div className="settings">
            <ImageUploader name="image" uploadImage={this.uploadImage} loading={profileImageUpdateLoading} profileImage={user.imageURL} />
            <div>
              <div className="header" onClick={() => this.switchView('edit-profile')}>
                <span>EDIT PROFILE</span>
                <svg className="icon">
                  <use xlinkHref={`${icons}#icon-user`} />
                </svg>
              </div>
              <form className={`open-close ${activeView === 'edit-profile' ? 'active' : ''}`} onSubmit={this.handleProfileUpdate}>
                <InputBox handleChange={this.handleChange} value={fullName} label="Full Name" icon="icon-user" name="fullName" required />
                <InputBox handleChange={this.handleChange} value={email} label="Email" icon="icon-at-sign" name="email" required />
                <button disabled={profileUpdateLoading} type="submit" name="button" className="round btn">Update</button>
              </form>
            </div>
            <div>
              <div className="header" onClick={() => this.switchView('reset-password')}>
                <span>CHANGE PASSWORD</span>
                <svg className="icon">
                  <use xlinkHref={`${icons}#icon-unlock`} />
                </svg>
              </div>
              <form className={`open-close ${activeView === 'reset-password' ? 'active' : ''}`} onSubmit={this.handlePasswordUpdate}>
                <InputBox type="password" handleChange={this.handleChange} value={password} label="Current Password" icon="icon-unlock" name="password" required />
                <InputBox type="password" handleChange={this.handleChange} value={newPassword} label="New Password" icon="icon-unlock" name="newPassword" required />
                <InputBox type="password" handleChange={this.handleChange} value={confirmPassword} label="Confirm Password" icon="icon-unlock" name="confirmPassword" required />
                <button disabled={passwordUpdateLoading} type="submit" name="button" className="round btn">Update</button>
              </form>
            </div>
            <div>
              <div className="header check">
                <label htmlFor="show-notification">SHOW DAILY REMINDER</label>
                <input type="checkbox" name="reminder" id="show-notification" />
              </div>
            </div>
            <button type="button" onClick={signout} className="btn round logout">Logout</button>
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
  profileUpdateLoading: state.auth.profileUpdateLoading,
  passwordUpdateLoading: state.auth.passwordUpdateLoading,
});

export default connect(mapStateToProps, {
  scroll: scrollAction,
  getEntries: getEntriesAction,
  updateProfile: profileUpdate,
  updatePassword: passwordUpdate,
  signout: signouAction,
})(Profile);
