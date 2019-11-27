import React from "react";

const Result = ({ result }) => {
  const val = result == null ? "" : result;

  return (
    <div id="results">
      <h4 className="text-left mb-3">Hasil</h4>
      <div className="form-group">
        <div className="input-group">
          <label className="sr-only" htmlFor="inlineFormInputGroup">
            Hasil keluaran
          </label>
          <div className="input-group mb-3">
            <input className="form-control" id="result" disabled value={val} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
