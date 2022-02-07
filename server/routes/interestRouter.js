const router = require('express').Router();
const { Interest } = require('../db/models')

router.route('/')
.get(async(req, res) => {
    const interest = await Interest.findAll();
    res.json({interest})
})

module.exports = router;
