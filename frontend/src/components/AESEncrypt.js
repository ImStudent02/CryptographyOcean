import React, { useState } from 'react';
import axios from 'axios';

function AESEncrypt() {
  const [text, setText] = useState('');
  const [key, setKey] = useState('');
  const [salt, setSalt] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  const [mode, setMode] = useState('cbc');
  const [keySize, setKeySize] = useState(256);
  const [iv, setIV] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/aes/encrypt', { text, key, salt, mode, keySize, iv });
      setEncryptedText(response.data.encryptedText);
      setIV(response.data.iv); // Set the IV returned from the server
    } catch (error) {
      console.error('Error encrypting text', error);
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">AES Encrypt</h2>
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
            <label htmlFor="key">Encryption Key:</label>
            <input
              type="text"
              className="form-control"
              id="key"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="salt">Salt:</label>
            <input
              type="text"
              className="form-control"
              id="salt"
              value={salt}
              onChange={(e) => setSalt(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mode">Mode:</label>
            <select
              id="mode"
              className="form-control"
              value={mode}
              onChange={(e) => setMode(e.target.value)}
            >
              <option value="cbc">CBC</option>
              <option value="ecb">ECB</option>
              <option value="ctr">CTR</option>
              <option value="gcm">GCM</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="keySize">Key Size:</label>
            <select
              id="keySize"
              className="form-control"
              value={keySize}
              onChange={(e) => setKeySize(parseInt(e.target.value))}
            >
              <option value={128}>128 bits</option>
              <option value={192}>192 bits</option>
              <option value={256}>256 bits</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="iv">Initialization Vector (IV):</label>
            <input
              type="text"
              className="form-control"
              id="iv"
              value={iv}
              onChange={(e) => setIV(e.target.value)}
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
        {iv && (
          <div className="mt-4">
            <h4>IV:</h4>
            <p className="alert alert-info">{iv}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AESEncrypt;
