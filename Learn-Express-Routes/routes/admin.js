const express = require('express');
const router = express.Router();

router.use((req, res , next) => {
    if(req.query.isAdmin) {
        next()
    } else {
        res.send("you are not admin")
    }
})

router.get("/" , (req, res) => {
    res.cookie('admin', 'admin')
    res.cookie('token', 'admin1234567890')
    res.send("admin home")
})

module.exports = router