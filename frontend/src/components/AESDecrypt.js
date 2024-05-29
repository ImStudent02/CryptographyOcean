import React, { useState } from 'react';
import axios from 'axios';

function AESDecrypt() {
  const [text, setText] = useState('');
  const [key, setKey] = useState('');
  const [salt, setSalt] = useState('');
  const [decryptedText, setDecryptedText] = useState('');
  const [mode, setMode] = useState('cbc');
  const [keySize, setKeySize] = useState(256);
  const [iv, setIv] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/aes/decrypt', { text, key, salt, mode, keySize, iv });
      setDecryptedText(response.data.decryptedText);
    } catch (error) {
      console.error('Error decrypting text', error);
      console.log(error);
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">AES Decrypt</h2>
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
            <label htmlFor="key">Decryption Key:</label>
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
              onChange={(e) => setIv(e.target.value)}
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

export default AESDecrypt;
