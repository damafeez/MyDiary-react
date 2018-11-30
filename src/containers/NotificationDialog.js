import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clear } from '../actions/dialog';
import './NotificationDialog.scss';

export class NotificationDialog extends Component {
  componentDidUpdate = (prevProps) => {
    const { notification, clearNotification } = this.props;
    if (prevProps.notification !== notification && notification.status) {
      setTimeout(() => clearNotification(), notification.timeout);
    }
  }

  render() {
    const { notification } = this.props;
    return (<div className={`notification-dialog ${notification.status ? `${notification.status} active` : ''}`}>{notification.message}</div>);
  }
}

const mapStateToProp = (state) => ({ notification: state.dialog.notification });

export default connect(mapStateToProp, { clearNotification: clear })(NotificationDialog);
