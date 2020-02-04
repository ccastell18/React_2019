import React from 'react';
import { connect } from 'react-redux';

import CartItem from '../cart-item/cart-item.component';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cartitems">
      {
        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
      }
    </div>
    <CustomButton>Go To Checkout</CustomButton>
  </div>
);

const mapStateToProps = state => ({
  cartItems: selectCartItemsCount(state)
})

export default connect(mapStateToProps)(CartDropdown);