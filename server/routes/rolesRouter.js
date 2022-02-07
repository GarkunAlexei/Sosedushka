const router = require('express').Router();
const { Role } = require('../db/models')

router.route('/')
.get(async(req, res) => {
  try{
    const roles = await Role.findAll();
    res.json({roles})
  }catch(err){
    console.log(err)
    return res.sendStatus(500)
  }
})

module.exports = router;
