import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Hero from "./component/Hero";
import News from "./container/News";
import Header from "./container/header";
import Footer from "./container/Footer";
import { GetInvolved } from "./getinvolved/getinvolved";
import ImpactPage from "./container/ImpactPage";
import DonatePage from "./container/DonatePage";
import SuccessStories from "./container/successstories";
import ContactPage from "./ContactPage/ContactPage";


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Hero/>} />
         <Route path="/get-involved" element={<GetInvolved/>} /> 
        <Route path="/impact-areas" element={<ImpactPage/>} />
        <Route path="/donate" element={<DonatePage/>} />
         <Route path="/success-stories" element={<SuccessStories/>} />
        <Route path="/news" element={<News/>} /> 
        <Route path="/contact-us" element={<ContactPage/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
