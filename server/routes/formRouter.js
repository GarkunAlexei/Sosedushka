const router = require('express').Router();
const {Form, Gender} = require('../db/models');


router.post('/', async (req, res) => {
  //console.log({...req.body, user_id: req.session.user.id})
  const forms = await Form.create({...req.body, user_id: req.session.user.id});
  res.json({forms})
})

router.get('/', async (req, res) => {
  try {
    const forms = await Form.findOne({where: {user_id: req.session.user.id}, include: Gender, raw: true})
    console.log(forms)
    if(forms){
      return res.json({forms})
    }
    res.sendStatus(404)
    
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
})


module.exports = router



