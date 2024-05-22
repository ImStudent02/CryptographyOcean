// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const port = 4000;

// // Middleware to parse JSON bodies and handle CORS
// app.use(bodyParser.json());
// app.use(cors());

// // Caesar Cipher functions
// function caesarCipherEncrypt(str, shift) {
//     return str.split('').map(char => {
//         const code = char.charCodeAt(0);
//         if (code >= 65 && code <= 90) {
//             // Uppercase letters
//             return String.fromCharCode(((code - 65 + shift) % 26 + 26) % 26 + 65);
//         } else if (code >= 97 && code <= 122) {
//             // Lowercase letters
//             return String.fromCharCode(((code - 97 + shift) % 26 + 26) % 26 + 97);
//         } else if (code >= 48 && code <= 57) {
//             // Numbers
//             return String.fromCharCode(((code - 48 + shift) % 10 + 10) % 10 + 48);
//         } else {
//             // Special characters
//             return String.fromCharCode((code + shift) % 128); // Shift by same amount
//         }
//     }).join('');
// }


// function caesarCipherDecrypt(str, shift) {
//     return str.split('').map(char => {
//         const code = char.charCodeAt(0);
//         if (code >= 65 && code <= 90) {
//             // Uppercase letters
//             return String.fromCharCode(((code - 65 - shift) % 26 + 26) % 26 + 65);
//         } else if (code >= 97 && code <= 122) {
//             // Lowercase letters
//             return String.fromCharCode(((code - 97 - shift) % 26 + 26) % 26 + 97);
//         } else if (code >= 48 && code <= 57) {
//             // Numbers
//             return String.fromCharCode(((code - 48 - shift) % 10 + 10) % 10 + 48);
//         } else {
//             // Special characters
//             return char; // Leave special characters unchanged
//         }
//     }).join('');
// }

// // API endpoint for encryption
// app.post('/caesar/encrypt', (req, res) => {
//     const { text, shift } = req.body;
//     if (!text || typeof shift !== 'number') {
//         return res.status(400).json({ error: 'Text and shift value are required' });
//     }
//     const encrypted = caesarCipherEncrypt(text, shift);
//     res.json({ encryptedText: encrypted });
// });

// // API endpoint for decryption
// app.post('/caesar/decrypt', (req, res) => {
//     const { text, shift } = req.body;
//     if (!text || typeof shift !== 'number') {
//         return res.status(400).json({ error: 'Text and shift value are required' });
//     }
//     const decrypted = caesarCipherDecrypt(text, shift);
//     res.json({ decryptedText: decrypted });
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 4000;

// Middleware to parse JSON bodies and handle CORS
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

// API endpoint for encryption
app.post('/caesar/encrypt', (req, res) => {
    const { text, shift } = req.body;
    if (!text || typeof shift !== 'number') {
        return res.status(400).json({ error: 'Text and shift value are required' });
    }
    const encrypted = caesarCipherEncrypt(text, shift);
    res.json({ encryptedText: encrypted });
});

// API endpoint for decryption
app.post('/caesar/decrypt', (req, res) => {
    const { text, shift } = req.body;
    if (!text || typeof shift !== 'number') {
        return res.status(400).json({ error: 'Text and shift value are required' });
    }
    const decrypted = caesarCipherDecrypt(text, shift);
    res.json({ decryptedText: decrypted });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
