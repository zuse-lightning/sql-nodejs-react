import React from "react";
import { Routes, Route } from "react-router-dom";
import Books from "./pages/Books";
import Add from "./pages/Add";
import Update from "./pages/Update";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Books />} />
      <Route exact path="/add" element={<Add />} />
      <Route exact path="/update" element={<Update />} />
    </Routes>
  );
};

export default App;
