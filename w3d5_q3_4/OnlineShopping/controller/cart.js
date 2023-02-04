const cart = require('../models/cart');
const {Product, products} = require('../models/product');

let getCart = (req, res) => {
  res.render('shoppingcart', {cart: cart.getCart()});
};

let addToCart = (req, res) => {
  let message;
  let product = Product.getProduct(req.body.pid);
  if (!product) {
    message = "Sorry, there is no product with id " + req.body.pid;
  } else {
    product.quantity = req.body.quantity;
    cart.addToCart(product);
    message = "Product id " + req.body.pid + " with quantity " + req.body.quantity + " added to cart successfully.";
  }
  res.render('product', {products: products, message: message});
}

module.exports = {
  getCart: getCart,
  addToCart: addToCart
}