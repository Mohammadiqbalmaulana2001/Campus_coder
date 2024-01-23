const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const {admin , token} = req.cookies
    res.send(`Hello ${admin} sekarang kamu ada di halaman mouvies and ${token}`)
})

router.post('/', (req, res) => {
    res.send('mouvies post')
})

router.get('/:id', (req, res) => {
    res.send('mouvies id')
})

module.exports = router