import React, { useState } from "react";
import SubmitBtn from "./layouts/SubmitBtn";
import PropTypes from "prop-types";

const Sum = ({ getResult, setAlert, clearResult }) => {
  const [numX, setNumX] = useState(null);
  const [numY, setNumY] = useState(null);

  const handlenumXChange = e => {
    setNumX(Number(e.target.value));
  };

  const handlenumYChange = e => {
    setNumY(Number(e.target.value));
  };

  const addAction = e => {
    e.preventDefault();
    if (numX === null || numY === null || numX === 0 || numY === 0) {
      setAlert("Jangan biarkan borang kosong", "danger");
    } else {
      let res = numX + numY;
      getResult(res);
    }
  };

  return (
    <div
      className="tab-pane fade show active"
      id="pills-sum"
      role="tabpanel"
      aria-labelledby="pills-sum-tab"
    >
      <form id="profesi-form">
        <p className="text-left mb-3">
          Hitung berapa hasil jumlah nilai X dan Y.
        </p>
        <div className="form-group">
          <div className="input-group">
            <label className="sr-only" htmlFor="inlineFormInputGroup">
              Masukkan nilai X
            </label>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <div className="input-group-text">X</div>
              </div>
              <input
                type="number"
                className="form-control"
                id="val-x"
                placeholder="Masukkan nilai X"
                onChange={handlenumXChange}
                onFocus={clearResult}
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <label className="sr-only" htmlFor="inlineFormInputGroup">
              Masukkan nilai Y
            </label>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <div className="input-group-text">Y</div>
              </div>
              <input
                type="number"
                className="form-control"
                id="val-y"
                placeholder="Masukkan nilai Y"
                onChange={handlenumYChange}
                onFocus={clearResult}
              />
            </div>
          </div>
        </div>
        <SubmitBtn cmd="Hitung" onClick={addAction} />
      </form>
    </div>
  );
};

Sum.propTypes = {
  getResult: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  clearResult: PropTypes.func.isRequired
};

export default Sum;
