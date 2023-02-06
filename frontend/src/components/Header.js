import React from 'react';
import {HeaderContainer, LogoBox, HeaderNav, LinkStyle} from "./header-styled";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <LogoBox>
          <Link to="/"><img src="https://global.mardimercredi.com/img/logo-red.png" alt="LOGO" /></Link>
        </LogoBox>
        <HeaderNav>
          <ul>
            <li><LinkStyle to="/login">LOGIN</LinkStyle></li>
            <li><LinkStyle to="/"><FontAwesomeIcon icon={faUser} /></LinkStyle></li>
            <li><LinkStyle to="/cart"><FontAwesomeIcon icon={faCartShopping} /></LinkStyle></li>
          </ul>
        </HeaderNav>
      </HeaderContainer>
    </>
  );
};

export default Header;
