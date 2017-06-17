
var React = require('react');
var CartAction = require('../action/CartAction');

var Cart = React.createClass({

  closeCart: function() {
    CartAction.updateCartVisible(false);
  },

  openCart: function(){
    CartAction.updateCartVisible(true);
  },

  removeFromCart: function(sku) {
    CartAction.removeFromCart(sku);
    CartAction.updateCartVisible(false);
  },

  render: function() {
    var self = this, products = this.props.products;
    return (
      <div className={"cart " + (this.props.visible ? 'active' : '')}>
        <div className="mini-cart">
          <button type="button" className="close-cart" onClick={this.closeCart}>×</button>
          <ul>
            {Object.keys(products).map(function(product) {
              return (
                <li key={product}>
                  <h1 className="name">{products[product].name}</h1>
                  <p className="type">{products[product].type} x {products[product].quantity}</p>
                  <p className="price">${(products[product].price * products[product].quantity).toFixed(2)}</p>
                  <button type="button" className="remove-item" onClick={self.removeFromCart.bind(self, product)}>Remove</button>
                </li>
              )
            })}
          </ul>
          <span className="total">Total: ${this.props.total}</span>
        </div>
        <button type="button" className="view-cart" onClick={this.openCart} disabled={Object.keys(this.props.products).length > 0 ? "" : "disabled"}>View Cart ({this.props.count})</button>
      </div>
    );
  },

});

module.exports = Cart;
