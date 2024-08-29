const express = require('express');
const router = express.Router();

router.get('/recover', (req, res) => {
    res.render('recover.ejs');
});

module.exports = router;