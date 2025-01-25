import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import News from "./container/News";
import SuccessStories from "./container/successstories";
import { GetInvolved } from "./getinvolved/getinvolved";
import {Hero} from "./component/Hero"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/" element={<SuccessStories />} />
        <Route path="/"  element={<Hero/>}/>
      </Routes>
    </Router>
  );
}

export default App;
