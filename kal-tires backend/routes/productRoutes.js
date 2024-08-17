const express = require('express');
const router = express.Router();
const productController = require ("../controllers/productController")


const VerifyFirebaseToken = require("../middleware/firebaseVerifyToken")

// Routes
router.route('/')
  .get(VerifyFirebaseToken, productController.getAllProducts)  // Protect route
  .post(VerifyFirebaseToken, productController.createNewProduct);  // Protect route

router.route('/:id')
  .patch(VerifyFirebaseToken, productController.updateProduct)  // Protect route
  .delete(VerifyFirebaseToken, productController.deleteProduct);  // Protect route

module.exports = router;
