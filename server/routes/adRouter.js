const router = require('express').Router();
const { Notice, Photo } = require('../db/models')


router.post('/', async(req, res) => {
  // console.log(req.body);
  // console.log('USER SESSION ===>', req.session.user)
  const user_id = req.session.user.id;
  const { address, description, cost, coords } = req.body

  try {
    const newNotice = await Notice.create({ address, description, cost, coords, user_id })
    // console.log('newNotice =====>', newNotice);
    const notice_id = newNotice.id;
    const photo = 'https://designmyhome.ru/sites/default/files/field/image/25/dizain_komnaty.jpg'
    const newNoticePhoto = await Photo.create({ notice_id, photo })
    const notice = await Notice.findOne({ where: { id: notice_id }, include: Photo, raw: true })
    // console.log(notice);
    res.json(notice)
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
})




module.exports = router;
