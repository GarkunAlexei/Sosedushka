const router = require('express').Router();
const { Op } = require("sequelize")
const { Notice, Interest, Photo, User, Form } = require('../db/models')



router.post('/', async(req, res) => {
  console.log(req.body);
  console.log('USER SESSION ===>', req.session.user)
  const user_id = req.session.user.id;
  const { address, description, cost, coords, img } = req.body

  try {
    const newNotice = await Notice.create({ address, description, cost, coords, user_id })
    console.log('newNotice =====>', newNotice);
    const notice_id = newNotice.id;
    const photo = img;
    const newNoticePhoto = await Photo.create({ notice_id, photo })
    const notice = await Notice.findOne({ where: { id: notice_id }, include: Photo})
    console.log(notice);
    res.json(notice)
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
})

router.get('/', async (req, res) => {
  try {
    const allNotes = await Notice.findAll({include: Photo, raw: true});
    console.log('----------->', allNotes[0]);
    res.json(allNotes)
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
})

router.get('/:id', async(req, res) => {
  try {
    const notice = await Notice.findOne({ where: { id: req.params.id }, include: Photo})
    // console.log('-------->', notice.user_id);
    const user = await User.findOne({where: {id: notice.user_id},
      include: Form
    })
    const profile = await Form.findOne({where: {user_id: user.id},
      include: Interest,
    });
    // console.log(profile.Interests);

    const dataObj = {
      user: user.Form,
      note: notice,
      interests: profile.Interests,
    }

    // console.log('---------->', dataObj);
    res.json(dataObj);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
  // console.log('-------->', user.Form);
})

router.post('/searcher', async(req, res) => {
  const search = req.body.word;

  // const findNotice = await Notice.findAll({
  //   where: { address: {[Op.iLike]: `%${search}%`}},
  //   include: Photo
  // })

  const findNotice = await Notice.findAll({
    where: { [Op.or]: [
      {
        address: {
          [Op.iLike]: `%${search}%`
        },
      },
      {
        cost: {
          [Op.iLike]: `%${search}%`
        }
      }
    ] 
  },
    include: Photo
  })
  // console.log('---------->', findNotice);

  res.json(findNotice);
})

module.exports = router;
