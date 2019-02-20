import React from 'react';
import PropTypes from 'prop-types';

import './Modal.scss';

const Modal = (props) => {
  const {
    title,
    cancel,
    submit,
    children,
    show,
  } = props;

  const className = show ? 'show d-block' : '';
  const submitButton = submit
    ? <button type="button" className="btn btn-primary" onClick={submit}>Save</button>
    : null;

  return (
    <div className={`modal fade ${className}`} tabIndex="-1" role="dialog" aria-hidden="true" data-backdrop>
      <div className="modal-dialog modal-dialog-scrollable" role="dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={cancel}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {children}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={cancel}>Close</button>
            {submitButton}
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.defaultProps = {
  show: false,
  submit: null,
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  cancel: PropTypes.func.isRequired,
  submit: PropTypes.func,
  children: PropTypes.instanceOf(Object).isRequired,
  show: PropTypes.bool,
};

export default Modal;
