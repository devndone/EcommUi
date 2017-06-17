
var React = require('react');
var Render = require('react-dom').render;
var ProductData = require('./ProductData');
var CartAPI = require('./util/CartAPI');
var CartApp = require('./component/CartApp.react');

ProductData.init();

CartAPI.getProductData();

Render(
  <CartApp />,
  document.getElementById('cart')
);
