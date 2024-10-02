const express = require('express');
const router = express.Router();

router.get('/solicitante_form', (req, res) => {
    res.render('form'); 
});

module.exports = router;