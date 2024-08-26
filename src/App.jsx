import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import RateList from "./components/RateList";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <div>
      {/* <Toaster position="top-center" /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<RateList />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
