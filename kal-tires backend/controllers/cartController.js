const Cart = require('../models/cart.model');
const Product = require('../models/product.model');
const asyncHandler = require('express-async-handler');

// Add product to cart
// route POST /cart
// @access private
const addToCart = asyncHandler(async (req, res) => {
    const { productId, quantity } = req.body;
    const userId = req.user._id;  // assuming req.user is set after authentication

    // Validate product exists
    const product = await Product.findById(productId);
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }

    // Find the user's cart
    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
        // If no cart exists for the user, create a new one
        cart = new Cart({ user: userId, products: [] });
    }

    // Check if the product is already in the cart
    const productIndex = cart.products.findIndex(p => p.product.toString() === productId);

    if (productIndex > -1) {
        // Product exists in the cart, update the quantity
        cart.products[productIndex].quantity += quantity;
    } else {
        // Product does not exist in the cart, add it
        cart.products.push({ product: productId, quantity });
    }

    await cart.save();
    res.status(200).json({ message: 'Product added to cart' });
});


// View cart
// route GET /cart
// @access private
const viewCart = asyncHandler(async (req, res) => {
    const userId = req.user._id;

    const cart = await Cart.findOne({ user: userId }).populate('products.product').lean();

    if (!cart) {
        return res.status(404).json({ message: 'Cart is empty' });
    }

    res.json(cart);
});


// Remove product from cart
// route DELETE /cart
// @access private
const removeFromCart = asyncHandler(async (req, res) => {
    const { productId } = req.body;
    const userId = req.user._id;

    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
        return res.status(404).json({ message: 'Cart not found' });
    }

    const productIndex = cart.products.findIndex(p => p.product.toString() === productId);

    if (productIndex > -1) {
        cart.products.splice(productIndex, 1); // remove product from cart
        await cart.save();
        res.status(200).json({ message: 'Product removed from cart' });
    } else {
        res.status(404).json({ message: 'Product not found in cart' });
    }
});


module.exports = {
    addToCart,
    viewCart,
    removeFromCart,
}