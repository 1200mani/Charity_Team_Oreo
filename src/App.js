import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import Hero from "./component/Hero";
import News from "./container/News";
// // import Header from "./component/Header";
// import { GetInvolved } from "./getinvolved/getinvolved";
// import SuccessStories from "./container/successstories";
// import ContactPage from "./ContactPage/ContactPage";


function App() {
  return (
    <Router>
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<News/>} />
         {/* <Route path="/get-involved" element={<GetInvolved/>} />  */}
        {/* <Route path="/donate" element={</>} /> */}
        {/* <Route path="/impact-areas" element={</>} /> */}
         {/* <Route path="/success-stories" element={<SuccessStories/>} /> */}
        {/* <Route path="/news" element={<News/>} />  */}
        {/* <Route path="/contact-us" element={<ContactPage/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
