// Compiles assets/css/tailwind.src.css -> assets/css/tailwind.css
// Usage: npm install && npm run build:css
const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const tailwind = require('@tailwindcss/postcss');

const src = path.join(__dirname, 'assets/css/tailwind.src.css');
const out = path.join(__dirname, 'assets/css/tailwind.css');

postcss([tailwind()])
    .process(fs.readFileSync(src, 'utf8'), { from: src, to: out })
    .then((result) => {
        fs.writeFileSync(out, result.css);
        console.log(`built ${path.relative(__dirname, out)} — ${Math.round(result.css.length / 1024)} KB`);
    })
    .catch((err) => {
        console.error(err.message);
        process.exit(1);
    });
