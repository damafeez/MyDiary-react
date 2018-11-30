import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { cancel } from '../actions/dialog';
import './cofirmAction.scss';

export class ConfirmAction extends Component {
  handleConfirm = () => {
    const { confirmationPayload, cancelAction } = this.props;
    confirmationPayload.callback();
    cancelAction();
  }

  handleCancel = () => {
    const { cancelAction } = this.props;
    cancelAction();
  }

  render() {
    const { confirmationPayload } = this.props;
    return (
      <div className={`notification-dialog confirm-dialog ${typeof confirmationPayload.callback === 'function' ? 'active' : ''}`}>
        {typeof confirmationPayload.callback === 'function' && (
          <Fragment>
            <p>{confirmationPayload.message}</p>
            <button type="button" onClick={this.handleCancel} className="btn round cancel">Cancel</button>
            <button type="button" onClick={this.handleConfirm} className="btn round">Confirm</button>
          </Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProp = (state) => ({ confirmationPayload: state.dialog.confirmAction });

export default connect(mapStateToProp, { cancelAction: cancel })(ConfirmAction);
