const express = require('express');
const router = express.Router();

router.get('/add', (req, res) => {
    res.send('Response from video router');

})
module.exports = router;