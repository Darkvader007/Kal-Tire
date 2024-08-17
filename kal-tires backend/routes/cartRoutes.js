const express = require('express');
const router = express.Router();
const cartController = require ("../controllers/cartController")

const VerifyFirebaseToken = require("../middleware/firebaseVerifyToken")

// Routes
router.route('/')
  .post(VerifyFirebaseToken, cartController.addToCart)  // Protect route
  .get(VerifyFirebaseToken, cartController.viewCart);  // Protect route

router.route('/:id')
  .delete(VerifyFirebaseToken, cartController.removeFromCart);  // Protect route

module.exports = router;
