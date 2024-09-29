const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

function buildPDF(dataCallback, endCallback) {
    const doc = new PDFDocument({ margin: 50 });

    doc.on('data', dataCallback);
    doc.on('end', endCallback);

    const logoPath = path.join(__dirname, '../img/logo_grande_fondo.png');
    const firmaPath = path.join(__dirname, '../img/firma.jpg');

    // Definir rowHeight aquí
    const rowHeight = 30; // Puedes ajustar el valor según tus necesidades

    // Agregar el logo
    doc.image(logoPath, 50, 20, { width: 150 });
    doc.moveDown(3);

    // Título estilizado y centrado
    doc
        .font('Times-BoldItalic') 
        .fontSize(22)
        .fillColor('#333') // Color oscuro para el texto
        .text('Información de la Póliza', { align: 'center'})
        .moveDown(3);

    // tabla: información del asegurado
    const aseguradoTableY = 120;
    drawTable(doc, 50, 120, [
        ['Asegurado:', 'ANA LUZ'],
        ['Domicilio:', 'AV CEBALLOS 30, 6620 CHIVILCOY'],
        ['Patente:', 'AAA123'],
        ['Vehículo:', 'GILERA 70 VC - Año: 2017']
    ], doc.page.width - 100); 

    // tabla: plan de cobertura
    const coberturaTablaY = aseguradoTableY + (rowHeight * 4) + 20;
    drawTable(doc, 50, coberturaTablaY, [
        ['Plan de Cobertura:', 'Intermedio'],
        ['Suma Asegurada RC:', '$80,000,000'],
        ['Vigencia:', 'Desde 01/09/2024 hasta 01/12/2024']
    ], doc.page.width - 100);

    doc
        .moveDown(2)
        .font('Helvetica')
        .fontSize(8)
        .fillColor('#000')
        .text(
            `Esta póliza ha sido aprobada por la Superintendencia de Seguros de la Nación por Resolución/Proveído N° 38708 del 06/11/2014.\n` +
            `Cuando el texto de la póliza difiera del contenido de la propuesta, la diferencia se considerará aprobada por el asegurado si no reclama dentro de un mes...\n` +
            `PARA CONSULTAS O RECLAMOS, COMUNICARSE CON SMG SEGUROS – SERVICIO DE ATENCIÓN AL ASEGURADO Tel: 0800-222-7854.`,
            { align: 'justify', width: doc.page.width }
        )
        .moveDown(2);

    // firma al final del documento
    doc.image(firmaPath, doc.page.width - 150, doc.y, { width: 100 }) 
       .fontSize(10)
       .text('Gerente de Prisma Seguros S.A', doc.page.width - 150, doc.y + 50, { align: 'right' });

    doc.end();
}

// dibujar tabla
function drawTable(doc, x, y, rows, tableWidth) {
    const cellPadding = 10; 
    const rowHeight = 30;   

    const columnWidth = tableWidth / 2;

    rows.forEach((row, rowIndex) => {
        const rowY = y + rowHeight * rowIndex;

        doc
            .rect(x, rowY, columnWidth, rowHeight).stroke() 
            .rect(x + columnWidth, rowY, columnWidth, rowHeight).stroke();

        doc
            .font('Helvetica-Bold')
            .fontSize(10)
            .text(row[0], x + cellPadding, rowY + cellPadding, { width: columnWidth - 2 * cellPadding, align: 'left' })
            .font('Helvetica')
            .fontSize(10)
            .text(row[1], x + columnWidth + cellPadding, rowY + cellPadding, { width: columnWidth - 2 * cellPadding, align: 'left' });
    });
}

module.exports = buildPDF;
