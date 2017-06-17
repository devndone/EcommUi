
var React = require('react');
var CartAction = require('../action/CartAction');

var Product = React.createClass({

  addToCart: function(event) {
    var sku = this.props.selected.sku;
    var update = {
      name: this.props.product.name,
      type: this.props.selected.type,
      price: this.props.selected.price
    }
    CartAction.addToCart(sku, update);
    CartAction.updateCartVisible(true);
  },

  selectVariant: function(event) {
    CartAction.selectProduct(event.target.value);
  },

  render: function() {
    var ats = (this.props.selected.sku in this.props.cartitems) ?
      this.props.selected.inventory - this.props.cartitems[this.props.selected.sku].quantity :
      this.props.selected.inventory;
    return (
      <div className="product">
        <img src={'img/' + this.props.product.image}/>
        <div className="product-detail">
          <h1 className="name">{this.props.product.name}</h1>
          <p className="description">{this.props.product.description}</p>
          <p className="price">Price: ${this.props.selected.price}</p>
          <select onChange={this.selectVariant}>
            {this.props.product.variants.map(function(variant, index) {
              return (
                <option key={index} value={index}>{variant.type}</option>
              )
            })}
          </select>
          <button type="button" onClick={this.addToCart} disabled={ats  > 0 ? '' : 'disabled'}>
            {ats > 0 ? 'Add To Cart' : 'Sold Out'}
          </button>
        </div>
      </div>
    );
  },

});

module.exports = Product;
