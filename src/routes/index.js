const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Acá va la pág. informativa"); 
});

module.exports = router;

