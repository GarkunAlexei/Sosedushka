const router = require('express').Router();
const {Form} = require('../db/models');


router.post('/', async (req, res) => {
  //console.log({...req.body, user_id: req.session.user.id})
  const forms = await Form.create({...req.body, user_id: req.session.user.id});
  res.json({forms})
})



module.exports = router



