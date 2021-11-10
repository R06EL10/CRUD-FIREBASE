const router = require('express-promise-router')();
//llamamos al método de controller
const {
  index,
  newUser,
  getUser,
  replaceUser,
  deleteUser
}=require('../controllers/user.js')

router.get('/',index);
router.post('/',newUser);
router.get('/:userId',getUser);
router.put('/:userId',replaceUser);
router.delete('/:userId',deleteUser);

module.exports = router;
