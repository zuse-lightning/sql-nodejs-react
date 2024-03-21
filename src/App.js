import React from "react";
import { Routes, Route } from "react-router-dom";
import Books from "./pages/Books";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Books />} />
    </Routes>
  );
}

export default App;
