const {products} = require('../models/product');

let getAllProduct = (req, res) => {
  res.render('product', {products: products, message:""});
};

module.exports = {
  getAllProduct: getAllProduct,
}