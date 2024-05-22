// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Encrypt from './components/Encrypt';
import Decrypt from './components/Decrypt';

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <h1 className="text-center mb-4">Caesar Cipher App</h1>
        <nav className="nav nav-pills nav-justified mb-4">
          <Link className="nav-item nav-link" to="/encrypt">Encrypt</Link>
          <Link className="nav-item nav-link" to="/decrypt">Decrypt</Link>
        </nav>
        <Routes>
          <Route path="/encrypt" element={<Encrypt />} />
          <Route path="/decrypt" element={<Decrypt />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
