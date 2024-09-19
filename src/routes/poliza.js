const express = require('express');
const router = express.Router();
const buildPDF = require('../../public/js/poliza.js');

router.get('/poliza', (req, res) => {
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=Prisma_Seguros_Poliza.pdf");

    const stream = res;

    buildPDF(
        (chunk) => stream.write(chunk),
        () => stream.end()
    );
});

module.exports = router;