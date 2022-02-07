const router = require('express').Router();
const { Interest, Entries, User } = require('../db/models')

router.get('/', async(req, res) => {
  const interest = await Interest.findAll();
  res.json({interest})
})
router.post('/:id', async (req, res) => {
  console.log(req.session.user.id, 'id!!!!!!!!!');
  const user = await User.findOne({
    where: { id: req.session.user.id },
    // include: { model: Interest },
  });
  console.log(user, 'useruseruseruser!!!!!!!!!');
  const {id} = req.params;
  const chek = await Interest.findOne({
    where: { id },
  });

  // await Entries.create({hobby_id: id, form_id: })

  // await Interest.update(req.body, { where:{id}})

  // const book = await Book.findOne({
  //   where: { id },
  // });
  // console.log('--->',chek)
  res.json({chek})
});


module.exports = router;
