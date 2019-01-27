import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { uploadImage } from '../actions/common';

const selectFile = (id) => {
  const fileInput = document.getElementById(id);
  if (fileInput) {
    fileInput.click();
  }
};

const handleChange = (formName) => {
  const form = document.forms.namedItem(formName);
  const formData = new FormData(form);
  uploadImage(formData);
};

const ImageUpload = (props) => {
  const {
    btnClass,
    inputId,
    formName,
  } = props;

  return (
    <Fragment>
      <button
        type="button"
        className={btnClass}
        onClick={() => selectFile(inputId)}
      >
        <FontAwesomeIcon icon="upload" />
      </button>
      <form
        name={formName}
        encType="multipart/form-data"
        className="invisible position-absolute"
      >
        <input
          type="file"
          id={inputId}
          name="file"
          onChange={() => handleChange(formName)}
        />
      </form>
    </Fragment>
  );
};

ImageUpload.defaultProps = {
  btnClass: 'btn btn-primary',
};

ImageUpload.propTypes = {
  btnClass: PropTypes.string,
  formName: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
};

export default ImageUpload;
