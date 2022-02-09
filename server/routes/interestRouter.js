const router = require('express').Router();
const { Interest, Entries, User, Form } = require('../db/models')

router.get('/', async(req, res) => {
  try{
    const profile = await Form.findOne({where: {user_id: req.session.user.id}})
    // console.log('profile----->', profile);
    const tempEntries = await Entries.findAll({where: {form_id: profile.id}})
    const interest = await Interest.findAll();
    const tempTemp = tempEntries.map(e => e.hobby_id)
    // const temp = interest.map(e => e.id)
    const filterInterest = interest.filter(e => !(tempTemp.includes(e.id)))

    // console.log('tempEntries----->', tempEntries);
    // console.log('tempTemp------>', tempTemp);
    // console.log('temp----->', temp.length);
    res.json({filterInterest})
  } catch(err) {
    console.log(err)
    return res.sendStatus(500)
}
})
router.post('/:id', async (req, res) => {
  const {id} = req.params;

  try{
    const form = await Form.findOne({
      where: { user_id: req.session.user.id },
      include: Interest,
    });
    await Entries.create({hobby_id: id, form_id: form.id})
  } catch(err) {
    console.log(err)
    return res.sendStatus(500)
  }


  const formToReact = await Form.findOne({
    where: { user_id: req.session.user.id },
    include: Interest,
  });
  // console.log('FORM------>>>>', formToReact);
  // console.log('ARR WITH INTERESTS------>>>>', formToReact.Interests);
  const interest = formToReact.Interests
  // console.log(interest[0].interest);
  res.json({interest})
});


module.exports = router;
