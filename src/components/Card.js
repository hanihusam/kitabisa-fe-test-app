import React from "react";
import PropTypes from "prop-types";
import Sum from "./Sum";
import Multiply from "./Multiply";
import Prime from "./Prime";
import Fibonacci from "./Fibonacci";
import Result from "./layouts/Result";
import Alert from "./layouts/Alert";

const Card = ({ result, getResult, clearResult, setAlert, alert }) => {
  return (
    <div className="container" id="main-card">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="shadow-sm card card-body text-center mt-5">
            <ul
              className="row nav nav-pills mb-3"
              id="pills-tab"
              role="tablist"
            >
              <li className="col-md-6 nav-item">
                <a
                  className="nav-link active"
                  id="pills-sum-tab"
                  data-toggle="pill"
                  href="#pills-sum"
                  role="tab"
                  aria-controls="pills-sum"
                  aria-selected="true"
                >
                  Sum X & Y
                </a>
              </li>
              <li className="col-md-6 nav-item">
                <a
                  className="nav-link"
                  id="pills-multiplay-tab"
                  data-toggle="pill"
                  href="#pills-multiply"
                  role="tab"
                  aria-controls="pills-multiply"
                  aria-selected="false"
                >
                  Multiply X & Y
                </a>
              </li>
              <li className="col-md-6 nav-item">
                <a
                  className="nav-link"
                  id="pills-prime-tab"
                  data-toggle="pill"
                  href="#pills-prime"
                  role="tab"
                  aria-controls="pills-prime"
                  aria-selected="false"
                >
                  Find Prime Number
                </a>
              </li>
              <li className="col-md-6 nav-item">
                <a
                  className="nav-link"
                  id="pills-fibonacci-tab"
                  data-toggle="pill"
                  href="#pills-fibonacci"
                  role="tab"
                  aria-controls="pills-fibonacci"
                  aria-selected="false"
                >
                  Find Fibonacci Sequence
                </a>
              </li>
            </ul>
            <Alert alert={alert} />
            <div className="tab-content" id="pills-tabContent">
              <Sum
                getResult={getResult}
                setAlert={setAlert}
                clearResult={clearResult}
              />
              <Multiply
                getResult={getResult}
                setAlert={setAlert}
                clearResult={clearResult}
              />
              <Prime
                getResult={getResult}
                setAlert={setAlert}
                clearResult={clearResult}
              />
              <Fibonacci
                getResult={getResult}
                setAlert={setAlert}
                clearResult={clearResult}
              />
              {result !== null && (
                <Result result={result} clearResult={clearResult} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  loading: PropTypes.bool.isRequired,
  getResult: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired
};

export default Card;
