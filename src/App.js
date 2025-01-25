import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './ContactPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Hello! Welcome to Charity Websitegit</h1>} />
        <Route path="/contact" element={<Contact />} /> {/* Add the Contact route */}
      </Routes>
    </Router>
  );
}

export default App;


