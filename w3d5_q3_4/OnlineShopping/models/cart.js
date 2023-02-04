const cart = [];

function addToCart(product) {
  cart.push(product);
}

function getCart() {
  return cart;
}

module.exports = {
  addToCart: addToCart,
  getCart: getCart
}