const {Router} = require('express');
const { login, register, renewToken } = require('../controllers/auth.controller');
const { authUser } = require('../middlewares/auth.jwt');

const router = Router();

router.post('/auth/login', login)
router.post('/auth/register', register)
router.get('/auth/renew-token', authUser, renewToken)


module.exports = router