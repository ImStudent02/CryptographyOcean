import React, { useState } from 'react';
import axios from 'axios';

function MD5Hash() {
  const [text, setText] = useState('');
  const [hashedText, setHashedText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/md5/hash', { text });
      setHashedText(response.data.hashedText);
    } catch (error) {
      console.error('Error hashing text', error);
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">MD5 Hash</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="text">Text to Hash:</label>
            <input
              type="text"
              className="form-control"
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Hash</button>
        </form>
        {hashedText && (
          <div className="mt-4">
            <h4>Hashed Text:</h4>
            <p className="alert alert-success">{hashedText}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MD5Hash;
