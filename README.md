# Cryptography Web Application

A full-stack web application that provides various cryptographic operations including Caesar Cipher, AES Encryption/Decryption, and MD5 Hashing.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Open Source](https://img.shields.io/badge/Open%20Source-%E2%9D%A4-red)

## Version Information

- **Current Version**: 1.0.0 (Initial Release)
- **Release Date**: 2024
- **Status**: Open Source

### Version History
- 1.0.0
  - Initial release with core cryptographic features
  - Basic frontend interface
  - RESTful API implementation
  - Caesar Cipher, AES, and MD5 implementations

### Roadmap
- 1.1.0 (Planned)
  - Additional encryption algorithms (RSA, Blowfish)
  - Enhanced UI/UX features
  - File encryption support
- 1.2.0 (Planned)
  - User authentication system
  - Secure key management
  - Browser extension support

## Open Source

This project is open source and welcomes contributions from the community. We believe in the power of collaborative development and encourage:

- Bug reports and feature requests through issues
- Code contributions via pull requests
- Documentation improvements
- Security enhancement suggestions
- Testing and feedback

See the [Contributing](#contributing) section for more details on how to get involved.

## Features

- **Caesar Cipher**
  - Text encryption with custom shift values
  - Text decryption with matching shift values
  
- **AES Encryption/Decryption**
  - Supports multiple modes of operation
  - Configurable key sizes
  - Secure salt and IV handling
  
- **MD5 Hashing**
  - One-way text hashing functionality

## Tech Stack

### Frontend
- React 18.3.1
- React Router DOM for navigation
- Axios for API communication

### Backend
- Node.js with Express
- Body-parser for request parsing
- CORS enabled
- Crypto library for encryption operations

## Setup Instructions

### Prerequisites
- Node.js (Latest LTS version recommended)
- npm (comes with Node.js)

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node server.js
   ```
   The server will run on http://localhost:4000

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
   The application will open in your default browser at http://localhost:3000

## API Endpoints

### Caesar Cipher
- POST `/caesar/encrypt`
  - Body: `{ "text": "string", "shift": number }`
- POST `/caesar/decrypt`
  - Body: `{ "text": "string", "shift": number }`

### AES
- POST `/aes/encrypt`
  - Body: `{ "text": "string", "key": "string", "salt": "string", "mode": "string", "keySize": number, "iv": "string" }`
- POST `/aes/decrypt`
  - Body: `{ "text": "string", "key": "string", "salt": "string", "mode": "string", "keySize": number, "iv": "string" }`

### MD5
- POST `/md5/hash`
  - Body: `{ "text": "string" }`

## Usage Examples

### Caesar Cipher
```javascript
// Encryption
fetch('http://localhost:4000/caesar/encrypt', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ text: 'Hello', shift: 3 })
});

// Decryption
fetch('http://localhost:4000/caesar/decrypt', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ text: 'Khoor', shift: 3 })
});
```

### AES
```javascript
// Encryption
fetch('http://localhost:4000/aes/encrypt', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    text: 'Secret message',
    key: 'your-secret-key',
    salt: 'random-salt',
    mode: 'cbc',
    keySize: 256,
    iv: '00112233445566778899aabbccddeeff'
  })
});
```

### MD5
```javascript
fetch('http://localhost:4000/md5/hash', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ text: 'Hash this text' })
});
```

## Security Considerations

1. This application is for educational purposes only
2. AES keys should be properly managed in a production environment
3. MD5 is not considered cryptographically secure for password hashing
4. Use HTTPS in production
5. Implement rate limiting for production use

## Extensibility

This project is designed to be highly extensible, allowing for easy integration of new features and algorithms:

### Backend Extensibility
- **New Cryptographic Algorithms**: The modular backend structure allows for easy addition of new encryption algorithms such as:
  - RSA encryption
  - Blowfish
  - DES/3DES
  - SHA family of hash functions
  - Bcrypt/Scrypt for password hashing

- **Additional APIs**:
  - Authentication and authorization endpoints
  - File encryption/decryption capabilities
  - Batch processing endpoints
  - Key management system
  - Digital signatures and verification

### Frontend Extensibility
- **New Components**:
  - File upload/download interface
  - Drag-and-drop encryption zones
  - Real-time encryption preview
  - Password strength meter
  - Key generation wizard

- **Additional Features**:
  - Dark/Light theme support
  - Multiple language support
  - Offline mode capabilities
  - File format conversions
  - Encryption history and favorites

### Integration Possibilities
- WebSocket support for real-time encryption
- Mobile app integration
- Browser extension capabilities
- CLI tool integration
- Cloud storage service integration

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details 