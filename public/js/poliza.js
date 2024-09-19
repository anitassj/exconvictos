const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

function buildPDF(dataCallback, endCallback) {
    const doc = new PDFDocument();

    doc.on('data', dataCallback);
    doc.on('end', endCallback);

    const imagePath = path.join(__dirname, '../img/logo_grande_fondo.png');

    doc.image(imagePath, 0, 15, {width: 300})
   .text('Info póliza...', 10, 180);

    doc.end();
}

module.exports = buildPDF;