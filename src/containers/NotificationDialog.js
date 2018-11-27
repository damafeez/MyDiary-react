import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clear } from '../actions/notification';
import './NotificationDialog.scss';

export class NotificationDialog extends Component {
  componentDidUpdate = () => {
    const { notification, clearNotification } = this.props;
    if (notification.status) {
      setTimeout(() => clearNotification(), notification.timeout);
    }
  }

  render() {
    const { notification } = this.props;
    return (<div className={`notification-dialog ${notification.status ? `${notification.status} active` : ''}`}>{notification.message}</div>);
  }
}

const mapStateToProp = (state) => ({ notification: state.notification.payload });

export default connect(mapStateToProp, { clearNotification: clear })(NotificationDialog);