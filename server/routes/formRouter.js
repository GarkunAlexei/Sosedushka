const router = require('express').Router();
const {Form, Gender, Interest, Entries} = require('../db/models');


router.post('/', async (req, res) => {
  // console.log("FORM ====>", req.body);
  try {
    const forms = await Form.create({ ...req.body, user_id: req.session.user.id });
    res.json({ forms })
  } catch (error) {
    console.log(error);
    res.sendStatus(500)
  }
})

router.get('/', async (req, res) => {
  try {
    const forms = await Form.findOne({ where: { user_id: req.session.user.id },
      include: [
        { model: Gender }, 
        { model: Interest }
      ],})
      // console.log(forms);
    if(forms){
      return res.json({ forms })
    }
    res.sendStatus(404)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
})
router.post('/:id', async (req, res) => {
  const { id } = req.params;
  // console.log(id);
  try {
    const profile = await Form.findOne({ where: { user_id: req.session.user.id } })
    // console.log(id, profile.id);
    await Entries.destroy({ where: {
      hobby_id: id,
      form_id: profile.id
    }})
    const delInterest = await Interest.findOne({ where: { id }})
    // console.log(delInterest);
    res.json({ delInterest })
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
})

router.post('/edit/:id', async (req, res) => {
  const { id } = req.params;
  console.log(id, req.body);
  try {
    await Form.update(req.body, { where:{id: id}})
    const newForm = await Form.findOne({where:{id}})
    // console.log(newForm);
    res.json({ newForm })
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
})

module.exports = router



