// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const crypto = require('crypto');

// Initialize the Express app and define the port
const app = express();
const port = 4000;

// Use middleware to parse JSON bodies and handle CORS
app.use(bodyParser.json());
app.use(cors());

// Get the total number of Unicode characters(as per may 2024)
const totalUnicodeChars = 149374;

// Caesar Cipher functions
function caesarCipherEncrypt(str, shift) {
    return str.split('').map(char => {
        const code = char.charCodeAt(0);
        return String.fromCharCode((code + shift) % totalUnicodeChars);
    }).join('');
}

function caesarCipherDecrypt(str, shift) {
    return str.split('').map(char => {
        const code = char.charCodeAt(0);
        return String.fromCharCode((code - shift + totalUnicodeChars) % totalUnicodeChars);
    }).join('');
}

// Function to encrypt text using AES
function aesEncrypt(text, key, salt, mode, keySize, iv) {
    const cipher = crypto.createCipheriv(`aes-${keySize}-${mode}`, crypto.scryptSync(key, salt, keySize / 8), Buffer.from(iv, 'hex'));
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

// Function to decrypt text using AES
function aesDecrypt(text, key, salt, mode, keySize, iv) {
    const decipher = crypto.createDecipheriv(`aes-${keySize}-${mode}`, crypto.scryptSync(key, salt, keySize / 8), Buffer.from(iv, 'hex'));
    let decrypted = decipher.update(text, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

// Function to hash text using MD5
function md5Hash(text) {
    return crypto.createHash('md5').update(text).digest('hex');
}

// API endpoint for Caesar encryption
app.post('/caesar/encrypt', (req, res) => {
    const { text, shift } = req.body;
    if (!text || typeof shift !== 'number') {
        return res.status(400).json({ error: 'Text and shift value are required' });
    }
    const encrypted = caesarCipherEncrypt(text, shift);
    res.json({ encryptedText: encrypted });
});

// API endpoint for Caesar decryption
app.post('/caesar/decrypt', (req, res) => {
    const { text, shift } = req.body;
    if (!text || typeof shift !== 'number') {
        return res.status(400).json({ error: 'Text and shift value are required' });
    }
    const decrypted = caesarCipherDecrypt(text, shift);
    res.json({ decryptedText: decrypted });
});

// API endpoint for AES encryption
app.post('/aes/encrypt', (req, res) => {
    const { text, key, salt, mode, keySize, iv } = req.body;
    if (!text || !key || !salt || !mode || !keySize || !iv) {
        return res.status(400).json({ error: 'Text, key, salt, mode, key size, and IV are required' });
    }
    const encrypted = aesEncrypt(text, key, salt, mode, keySize, iv);
    res.json({ encryptedText: encrypted });
});


// API endpoint for AES decryption
app.post('/aes/decrypt', (req, res) => {
    const { text, key, salt, mode, keySize, iv } = req.body;
    if (!text || !key || !salt || !mode || !keySize || !iv) {
        return res.status(400).json({ error: 'Text, key, salt, mode, key size, and IV are required' });
    }
    const decrypted = aesDecrypt(text, key, salt, mode, keySize, iv);
    res.json({ decryptedText: decrypted });
});

// API endpoint for MD5 hashing
app.post('/md5/hash', (req, res) => {
    const { text } = req.body;
    if (!text) {
        return res.status(400).json({ error: 'Text is required' });
    }
    const hashed = md5Hash(text);
    res.json({ hashedText: hashed });
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
