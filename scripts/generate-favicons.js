'use strict';
const sharp = require('sharp');
const toIco = require('to-ico');
const path  = require('path');
const fs    = require('fs');

const root = path.join(__dirname, '..');
const src  = path.join(root, 'assets', 'img', 'logo-mark.svg');
const navy = { r: 15, g: 26, b: 46, alpha: 1 }; // #0F1A2E

async function run() {
  // 32x32
  const buf32 = await sharp(src).resize(32, 32).png().toBuffer();
  fs.writeFileSync(path.join(root, 'favicon-32x32.png'), buf32);
  console.log('favicon-32x32.png');

  // 16x16
  const buf16 = await sharp(src).resize(16, 16).png().toBuffer();
  fs.writeFileSync(path.join(root, 'favicon-16x16.png'), buf16);
  console.log('favicon-16x16.png');

  // apple-touch-icon 180x180 (mark centered with navy padding)
  const buf180 = await sharp(src)
    .resize(120, 120)
    .extend({ top: 30, bottom: 30, left: 30, right: 30, background: navy })
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(root, 'apple-touch-icon.png'), buf180);
  console.log('apple-touch-icon.png');

  // favicon.ico (multi-size: 16 + 32)
  const ico = await toIco([buf16, buf32]);
  fs.writeFileSync(path.join(root, 'favicon.ico'), ico);
  console.log('favicon.ico');

  console.log('Done.');
}

run().catch(err => { console.error(err); process.exit(1); });
