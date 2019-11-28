import React, { useState } from "react";
import PropTypes from "prop-types";
import SubmitBtn from "./layouts/SubmitBtn";

const Prime = ({ getResult, setAlert, clearResult }) => {
  const [numX, setNumX] = useState(null);

  const handlenumXChange = e => {
    setNumX(Number(e.target.value));
  };

  const isPrime = n => {
    if (n < 2) {
      return false;
    }

    for (var i = 2; i < n; i += 1) {
      if (n % i === 0) {
        return false;
      }
    }

    return true;
  };

  const primeAction = n => {
    let primes = [];
    let num = 2;

    if (numX === null || numX === 0) {
      setAlert("Tolong perikasa kembali masukan Anda", "danger");
    } else {
      if (numX <= 0) {
        setAlert(
          "Bilangan yang dimasukkan tidak boleh kurang dari 0",
          "danger"
        );
      } else {
        while (primes.length < n) {
          if (isPrime(num)) {
            primes.push(num);
          }
          num += 1;
        }
        getResult(primes);
      }
    }
  };

  return (
    <div
      className="tab-pane fade"
      id="pills-prime"
      role="tabpanel"
      aria-labelledby="pills-prime-tab"
    >
      <form id="profesi-form">
        <p className="text-left mb-3">
          Tampilkan sejumlah X deret bilangan prima.
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
            primeAction(numX);
          }}
        />
      </form>
    </div>
  );
};

Prime.propTypes = {
  setAlert: PropTypes.func.isRequired,
  getResult: PropTypes.func.isRequired,
  clearResult: PropTypes.func.isRequired
};

export default Prime;
