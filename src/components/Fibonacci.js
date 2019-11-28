import React, { useState } from "react";
import PropTypes from "prop-types";
import SubmitBtn from "./layouts/SubmitBtn";

const Fibonacci = ({ getResult, setAlert, clearResult }) => {
  const [numX, setNumX] = useState(null);

  const handlenumXChange = e => {
    setNumX(Number(e.target.value));
  };

  const fibonacciAction = num => {
    let s = [];
    if (num !== 1) {
      s = fibonacciAction(num - 1);
      s.push(s[s.length - 1] + s[s.length - 2]);
      return s;
    } else {
      return [0, 1];
    }
  };

  return (
    <div
      className="tab-pane fade"
      id="pills-fibonacci"
      role="tabpanel"
      aria-labelledby="pills-fibonacci-tab"
    >
      <form id="profesi-form">
        <p className="text-left mb-3">
          Tampilkan sejumlah X deret bilangan fibonacci.
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
        <SubmitBtn
          cmd="Masukkan"
          onClick={e => {
            e.preventDefault();
            if (numX === null || numX === 0) {
              setAlert("Tolong perikasa kembali masukan Anda", "danger");
            } else {
              if (numX <= 0) {
                setAlert(
                  "Bilangan yang dimasukkan tidak boleh kurang dari 0",
                  "danger"
                );
              } else {
                getResult(fibonacciAction(numX - 1));
              }
            }
          }}
        />
      </form>
    </div>
  );
};

Fibonacci.propTypes = {
  setAlert: PropTypes.func.isRequired,
  getResult: PropTypes.func.isRequired,
  clearResult: PropTypes.func.isRequired
};

export default Fibonacci;
