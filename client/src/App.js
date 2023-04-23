import Hero from "./component/Auth/Hero";
import React, { Fragment } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./component/Game/Home";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" />} />
        <Route path="/welcome" element={<Hero />} />
        <Route path="/game" element={<HomePage />} />
      </Routes>
    </Fragment>
  );
};

export default App;
