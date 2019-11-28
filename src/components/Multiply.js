import React, { useState } from "react";
import PropTypes from "prop-types";
import SubmitBtn from "./layouts/SubmitBtn";

const Multiply = ({ getResult, setAlert, clearResult }) => {
  const [numX, setNumX] = useState(null);
  const [numY, setNumY] = useState(null);

  const handlenumXChange = e => {
    if (e.target.value === "") {
      setNumX(null);
    } else {
      setNumX(Number(e.target.value));
    }
  };

  const handlenumYChange = e => {
    if (e.target.value === "") {
      setNumY(null);
    } else {
      setNumY(Number(e.target.value));
    }
  };

  const multiplyAction = e => {
    e.preventDefault();
    if (numY === null || numX === null) {
      setAlert("Tolong perikasa kembali masukan Anda", "danger");
    } else {
      let res = numX * numY;
      getResult(res);
    }
  };

  return (
    <div
      className="tab-pane fade"
      id="pills-multiply"
      role="tabpanel"
      aria-labelledby="pills-multiply-tab"
    >
      <form id="profesi-form">
        <p className="text-left mb-3">
          Hitung berapa hasil kali nilai X dan Y.
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
        <SubmitBtn cmd="Hitung" onClick={multiplyAction} />
      </form>
    </div>
  );
};

Multiply.propTypes = {
  getResult: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  clearResult: PropTypes.func.isRequired
};

export default Multiply;
