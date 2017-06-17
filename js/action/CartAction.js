
var AppDispatcher = require('../dispatcher/AppDispatcher');
var CartConstant = require('../constant/CartConstant');

var CartAction = {

  receiveProduct: function(data) {
    AppDispatcher.handleAction({
      actionType: CartConstant.RECEIVE_DATA,
      data: data
    })
  },

  selectProduct: function(index) {
    AppDispatcher.handleAction({
      actionType: CartConstant.SELECT_PRODUCT,
      data: index
    })
  },

  addToCart: function(sku, update) {
    AppDispatcher.handleAction({
      actionType: CartConstant.CART_ADD,
      sku: sku,
      update: update
    })
  },

  removeFromCart: function(sku) {
    AppDispatcher.handleAction({
      actionType: CartConstant.CART_REMOVE,
      sku: sku
    })
  },

  updateCartVisible: function(cartVisible) {
    AppDispatcher.handleAction({
      actionType: CartConstant.CART_VISIBLE,
      cartVisible: cartVisible
    })
  }

};

module.exports = CartAction;
