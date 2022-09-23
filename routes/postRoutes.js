const express = require('express');
const postController = require('../controllers/postController')
const checkAuth = require('../middleware/checkAuth');
const router = express.Router();

router.post('/',checkAuth.checkAuth ,postController.save);
router.get('/:id',checkAuth.checkAuth,postController.show);
router.get('/',checkAuth.checkAuth,postController.index);
router.patch('/:id',checkAuth.checkAuth,postController.update);
router.delete('/:id',checkAuth.checkAuth,postController.destroy);






module.exports = router;

