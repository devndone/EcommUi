
var CartAction = require('../action/CartAction');

module.exports = {
  getProductData: function() {
    var data = JSON.parse(localStorage.getItem('product'));
    CartAction.receiveProduct(data);
  }
};
