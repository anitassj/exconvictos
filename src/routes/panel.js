const express = require('express');
const path = require('path'); 
const router = express.Router();

router.get('/panel', (req, res) => {
    res.render(path.join(__dirname, '..', 'views', 'panel.ejs'));
});

module.exports = router;