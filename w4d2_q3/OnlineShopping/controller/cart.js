const {Product, products} = require('../models/product');

let getCart = (req, res) => {
  const cart = req.session['cart'] ? req.session['cart']: [];
  res.render('shoppingcart', {cart: cart});
};

let addToCart = (req, res) => {

  let product = Product.getProduct(req.body.pid);
  if (product) {
    product.quantity = req.body.quantity;

    let cart = req.session['cart'];
    if(cart) {
      const existingProduct = cart.filter(p => p.id == req.body.pid)[0];
      if (existingProduct) {
        existingProduct.quantity = parseInt(existingProduct.quantity) + parseInt(req.body.quantity);
      } else {
        cart.push(product);
      }
    } else {
      req.session['cart'] = [product];
    }
    let numItem = "" + req.session['cart'].length;
    res.send(numItem);
  } else {
    res.status(404).end();
  }
}

module.exports = {
  getCart: getCart,
  addToCart: addToCart
}