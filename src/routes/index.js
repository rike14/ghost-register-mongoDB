const router = require('express').Router()


const CustomersController = require('../controllers/customers')
const IndexController = require('../controllers/index')


router.get('/', IndexController.index)

router.get('/register', CustomersController.index)
router.post('/register/add', CustomersController.add)

router.get('/list', CustomersController.list)

router.get('/edit', CustomersController.formEdit)
router.post('/edit/:id', CustomersController.edit)

router.get('/remove/:id', CustomersController.remove)


module.exports = router