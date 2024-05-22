// src/components/Decrypt.js
import React, { useState } from 'react';
import axios from 'axios';

function Decrypt() {
  const [text, setText] = useState('');
  const [shift, setShift] = useState(0);
  const [decryptedText, setDecryptedText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/caesar/decrypt', { text, shift: parseInt(shift, 10) });
      setDecryptedText(response.data.decryptedText);
    } catch (error) {
      console.error('Error decrypting text', error);
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Decrypt</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="text">Text to Decrypt:</label>
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
          <button type="submit" className="btn btn-primary">Decrypt</button>
        </form>
        {decryptedText && (
          <div className="mt-4">
            <h4>Decrypted Text:</h4>
            <p className="alert alert-success">{decryptedText}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Decrypt;
