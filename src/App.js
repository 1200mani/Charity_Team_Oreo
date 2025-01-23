import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import News from "./container/News";
import { GetInvolved } from "./getinvolved/getinvolved";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/get-involved" element={<GetInvolved />} />
      </Routes>
    </Router>
  );
}

export default App;
