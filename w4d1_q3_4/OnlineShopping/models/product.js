// const products = [];
const products = require('../data/products.json');

let nextId = 100;

class Product {
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.id = nextId;
    nextId++;
  }
  save() {
    products.push(this);
  }
  static getAll() {
    return products;
  }
  static getProduct(id) {
    return products.products.filter(p => p.id == id)[0];
  }
}

module.exports = {
  Product: Product,
  products: products.products
};