import React, { Component } from 'react';
import icons from '../../assets/icons.svg';
import { userPlaceholderImage } from '../../mixin';
import './ImageUploader.scss';

class ProfileImageUploader extends Component {
  state = {
    imagePreview: '',
  }

  handleChange = (e) => {
    const file = e.target.files[0];
    e.preventDefault();
    const reader = new FileReader();
    reader.onloadend = () => {
      this.upload(file);
      this.setState({ imagePreview: reader.result });
    };
    if (file) reader.readAsDataURL(file);
  }

  upload = (image) => {
    const { uploadImage } = this.props;
    const imgFile = new FormData();
    imgFile.append('profileImage', image);
    uploadImage(imgFile);
  }

  render() {
    const {
      profileImage,
      loading,
    } = this.props;
    const { imagePreview } = this.state;
    return (
      <div
        className="profile-image profile-image-uploader"
        style={{ backgroundImage: `linear-gradient(rgba(150, 150, 150, 0.4), rgba(150, 150, 150, 0.4)), url(${imagePreview || profileImage || userPlaceholderImage})` }}
      >
        {profileImage && <span onClick={() => this.upload(null)} className="profile-image-uploader_cancel hoverable centralizer">x</span>}
        <input type="file" onChange={this.handleChange} id="uploader" accept=".png, .jpg, .jpeg" />
        <label htmlFor="uploader">
          <svg className={`icon ${loading ? 'spin' : ''}`}>
            <use xlinkHref={`${icons}#camera`} />
          </svg>
        </label>
      </div>
    );
  }
}

export default ProfileImageUploader;
