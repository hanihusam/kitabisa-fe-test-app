import React, { Fragment, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Loader from "./components/layouts/Loader";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const getResult = val => {
    setResult(null);
    setLoading(true);
    setTimeout(() => {
      setResult(val);
      setLoading(false);
    }, 2000);
  };

  const setAlert = (msg, type) => {
    setError({ msg, type });
    setTimeout(() => setError(null), 2000);
  };

  const clearResult = () => {
    setResult(null);
  };

  return (
    <Fragment>
      <Navbar />
      <main id="home">
        <Card
          loading={loading}
          result={result}
          getResult={getResult}
          setAlert={setAlert}
          alert={error}
          clearResult={clearResult}
        />
      </main>
      {loading && <Loader />}
    </Fragment>
  );
};

export default App;
