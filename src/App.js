import React from "react";
import { Routes, Route } from "react-router-dom";
import Books from "./pages/Books";
import Add from "./pages/Add";
import Update from "./pages/Update";

import "./style.css";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Books />} />
        <Route exact path="/add" element={<Add />} />
        <Route exact path="/update" element={<Update />} />
      </Routes>
    </div>
  );
};

export default App;
