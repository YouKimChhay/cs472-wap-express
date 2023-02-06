// const cart = require('../models/cart');
const {Product, products} = require('../models/product');

let getCart = (req, res) => {
  const cart = req.session['cart'] ? req.session['cart']: [];
  // res.render('shoppingcart', {cart: cart.getCart()});
  res.render('shoppingcart', {cart: cart});
};

let addToCart = (req, res) => {
  let message;
  let product = Product.getProduct(req.body.pid);
  if (!product) {
    message = "Sorry, there is no product with id " + req.body.pid;
  } else {
    product.quantity = req.body.quantity;

    if(req.session['cart']) {
      const existingProduct = req.session['cart'].filter(p => p.id == req.body.pid)[0];
      if (existingProduct) {
        existingProduct.quantity = parseInt(existingProduct.quantity) + parseInt(req.body.quantity);
      } else {
        req.session['cart'].push(product);
      }
    } else {
      req.session['cart'] = [product];
    }
    
    message = "Product id " + req.body.pid + " with quantity " + req.body.quantity + " added to cart successfully.";
  }
  res.render('product', {products: products, message: message});
}

module.exports = {
  getCart: getCart,
  addToCart: addToCart
}