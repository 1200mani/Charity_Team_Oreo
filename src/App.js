import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Hello! Welcome to Charity Websitegit</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
