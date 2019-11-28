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
              {dataTabs.map((tab, index) => {
                const cls = index === 0 ? "active" : "";
                const selected = index === 0 ? "true" : "false";
                return (
                  <li key={tab.id} className="col-md-6 nav-item">
                    <a
                      className={`nav-link ${cls}`}
                      id={`pills-${tab.name}-tab`}
                      data-toggle="pill"
                      href={`#pills-${tab.name}`}
                      role="tab"
                      aria-controls={`pills-${tab.name}`}
                      aria-selected={selected}
                    >
                      {tab.content}
                    </a>
                  </li>
                );
              })}
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

const dataTabs = [
  {
    id: 1,
    name: "sum",
    content: "Sum X & Y"
  },
  {
    id: 2,
    name: "multiply",
    content: "Multipy X & Y"
  },
  {
    id: 3,
    name: "prime",
    content: "Prime Number"
  },
  {
    id: 4,
    name: "fibonacci",
    content: "Fibonacci Sequence"
  }
];

export default Card;
