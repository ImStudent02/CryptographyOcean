// src/components/Encrypt.js
import React, { useState } from 'react';
import axios from 'axios';

function Encrypt() {
  const [text, setText] = useState('');
  const [shift, setShift] = useState(0);
  const [encryptedText, setEncryptedText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/caesar/encrypt', { text, shift: parseInt(shift, 10) });
      setEncryptedText(response.data.encryptedText);
    } catch (error) {
      console.error('Error encrypting text', error);
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Encrypt</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="text">Text to Encrypt:</label>
            <input
              type="text"
              className="form-control"
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="shift">Shift Value:</label>
            <input
              type="number"
              className="form-control"
              id="shift"
              value={shift}
              onChange={(e) => setShift(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Encrypt</button>
        </form>
        {encryptedText && (
          <div className="mt-4">
            <h4>Encrypted Text:</h4>
            <p className="alert alert-success">{encryptedText}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Encrypt;
