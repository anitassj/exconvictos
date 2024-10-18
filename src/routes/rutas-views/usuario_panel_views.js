const express = require('express');
const path = require('path'); 
const router = express.Router();

router.get('/usuario', (req, res) => {
    res.redirect('/inicio-usuario');
});

module.exports = router;