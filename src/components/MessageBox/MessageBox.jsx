import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import "./message-box.scss";

const MessageBox = ({ title, message, buttonLabel, onClick }) => {
  return (
    <div className="message-box-wrapper">
      <div className="message-box">
        <Alert variant="info">
          <Alert.Heading>{title}</Alert.Heading>
          <p>{message}</p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={onClick} variant="primary">
              {buttonLabel}
            </Button>
          </div>
        </Alert>
      </div>
    </div>
  );
};

MessageBox.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  buttonLabel: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default MessageBox;
