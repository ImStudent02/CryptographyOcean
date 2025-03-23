// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CaesarEncrypt from './components/CaesarEncrypt';
import CaesarDecrypt from './components/CaesarDecrypt';
import AESEncrypt from './components/AESEncrypt';
import AESDecrypt from './components/AESDecrypt';
import MD5Hash from './components/MD5Hash';

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <h1 className="text-center mb-4">Cryptography App</h1>
       
        
        <nav className="nav nav-pills nav-justified mb-4">
          <Link className="nav-item nav-link" to="/CaesarEncrypt">CaesarEncrypt</Link> 
          <Link className="nav-item nav-link" to="/CaesarDecrypt">CaesarDecrypt</Link>
          <Link className="nav-item nav-link" to="/AESEncrypt">AESEncrypt</Link>
          <Link className="nav-item nav-link" to="/AESDecrypt">AESDecrypt</Link>
          <Link className="nav-item nav-link" to="/MD5Hash">MD5Hash</Link>
        </nav>
        <Routes>
          <Route path="/CaesarEncrypt" element={<CaesarEncrypt />} />
          <Route path="/CaesarDecrypt" element={<CaesarDecrypt />} />
          <Route path='/AESEncrypt' element={<AESEncrypt />} />
          <Route path='/AESDecrypt' element={<AESDecrypt />} />
          <Route path='/MD5Hash' element={<MD5Hash />} />
        </Routes>
        {/* Dynamic Footer Bootstrap*/}
        <footer className="text-center mt-5">
          <p>Basic and extendable project for implementing cryptography. Distributed by <strong>Xposys Data Labs</strong> and developed by <b>YC Mayani</b>.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;