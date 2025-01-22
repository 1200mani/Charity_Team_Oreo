import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import News from './container/News';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<News/>}/>
      </Routes>
    </Router>
  );
}

export default App;
