import React from "react";
import PropTypes from "prop-types";

const SubmitBtn = ({ cmd, onClick }) => {
  return (
    <div className="form-group">
      <button
        type="submit"
        className="btn btn-primary btn-block text-uppercase"
        onClick={onClick}
      >
        {cmd}
      </button>
    </div>
  );
};

SubmitBtn.propTypes = {
  cmd: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default SubmitBtn;
