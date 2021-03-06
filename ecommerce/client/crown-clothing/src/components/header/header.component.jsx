import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentuser } from '../../redux/user/user.selectors';


import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer, OptionDiv } from './header.styles';

import { signOutStart } from '../../redux/user/user.actions';

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>
        SHOP
      </OptionLink>
      <OptionLink to='/contact'>
        CONTACT
      </OptionLink>
      {
        currentUser ? (
          <OptionDiv onClick={signOutStart}>SIGN OUT</OptionDiv>
        )
          :
          (
            <OptionLink to='/signin'>SIGN IN</OptionLink>
          )}
      <CartIcon />
    </OptionsContainer>{
      hidden ? null :
        <CartDropdown />
    }
  </HeaderContainer>
);

const mapStateToProps = state => createStructuredSelector({
  currentUser: selectCurrentuser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);