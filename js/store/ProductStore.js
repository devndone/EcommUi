
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var CartConstant = require('../constant/CartConstant');

var _ = require('underscore');

var _product = {}, _selected = null;

function loadProductData(data) {
  _product = data[0];
  _selected = data[0].variants[0];
}

function setSelected(index) {
  _selected = _product.variants[index];
}

var ProductStore = _.extend({}, EventEmitter.prototype, {

  getProduct: function() {
    return _product;
  },

  getSelected: function(){
    return _selected;
  },

  emitChange: function() {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

});

AppDispatcher.register(function(payload) {
  var action = payload.action;
  var text;

  switch(action.actionType) {

    case CartConstant.RECEIVE_DATA:
      loadProductData(action.data);
      break;

    case CartConstant.SELECT_PRODUCT:
      setSelected(action.data);
      break;

    default:
      return true;
  }

  ProductStore.emitChange();

  return true;

});

module.exports = ProductStore;
