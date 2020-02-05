import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history }) => (
  <div className="cart-dropdown">
    <div className="cartitems">
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
    </div>
    <CustomButton onClick={() => history.push('/checkout')}>Go To Checkout</CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItemsCount
})

export default withRouter(connect(mapStateToProps)(CartDropdown));