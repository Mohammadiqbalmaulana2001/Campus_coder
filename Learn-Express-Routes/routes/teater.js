const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('teater')
})

router.post('/', (req, res) => {
    res.send('teater')
})

router.get('/:id', (req, res) => {
    res.send('teater id')
})

module.exports = router