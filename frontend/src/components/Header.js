import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  HeaderContainer,
  LogoBox,
  HeaderNav,
  LinkStyle,
} from "./header-styled";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const logoutSubmit = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <>
      <HeaderContainer>
        <LogoBox>
          <Link to="/">
            <img
              src="https://global.mardimercredi.com/img/logo-red.png"
              alt="LOGO"
            />
          </Link>
        </LogoBox>
        <HeaderNav>
          <ul>
            {isLoggedIn ? (
              <li onClick={logoutSubmit}>
                <LinkStyle to="/">LOGOUT</LinkStyle>
              </li>
            ) : (
              <li>
                <LinkStyle to="/login">LOGIN</LinkStyle>
              </li>
            )}

            <li>
              <LinkStyle to="/myaccount">
                <FontAwesomeIcon icon={faUser} />
              </LinkStyle>
            </li>
            <li>
              <LinkStyle to="/cart">
                <FontAwesomeIcon icon={faCartShopping} />
              </LinkStyle>
            </li>
          </ul>
        </HeaderNav>
      </HeaderContainer>
    </>
  );
};

export default Header;
