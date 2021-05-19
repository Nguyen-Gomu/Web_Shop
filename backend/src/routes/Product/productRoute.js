const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/create', productController.CreateProduct);
router.get('/selectall', productController.SelectAllProduct);
router.get('/select/:id', productController.SelectProduct);
router.put('/update/:id', productController.UpdateProduct);
router.delete('/delete/:id', productController.DeleteProduct);

module.exports = router;