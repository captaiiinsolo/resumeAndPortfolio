const fs = require('fs');
const path = require('path');

// Attempt to find the path to pdf.worker.js using a broader search
const pdfjsDistPath = path.dirname(require.resolve('pdfjs-dist'));

// Check if the file exists before attempting to copy
const pdfWorkerPath = path.join(pdfjsDistPath, 'build', 'pdf.worker.js');
if (fs.existsSync(pdfWorkerPath)) {
  const publicWorkerPath = path.join(__dirname, 'public', 'pdf.worker.js');
  fs.copyFileSync(pdfWorkerPath, publicWorkerPath);
} else {
  console.error('pdf.worker.js not found in pdfjs-dist');
}
