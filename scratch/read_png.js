const fs = require('fs');

const file = 'c:/HOME LOCAL/PROYECTOS/Antigravity/proyectos/assets/img/logo/logo_oscuro.png';
const buffer = fs.readFileSync(file);

// PNG format: 8 byte signature, then chunks. IHDR chunk contains dimensions.
// IHDR is typically at byte 8, length 13. Width is at byte 16, height at 20.
const width = buffer.readUInt32BE(16);
const height = buffer.readUInt32BE(20);

console.log(`Width: ${width}, Height: ${height}`);
