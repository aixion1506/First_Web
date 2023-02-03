// import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <LogoBox>
          <img
            src="https://global.mardimercredi.com/img/logo-red.png"
            alt="LOGO"
          />
        </LogoBox>
        <HeaderNav>
          <ul>
            <li>로그인</li>
            <li>
              <FontAwesomeIcon icon={faUser} />
            </li>
            <li>
              <FontAwesomeIcon icon={faCartShopping} />
            </li>
          </ul>
        </HeaderNav>
      </HeaderContainer>
    </>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 1;
  width: 100%;
  padding: 30px 40px;
  box-sizing: border-box;
`;
const LogoBox = styled.div`
  img {
    width: 200px;
  }
`;

const HeaderNav = styled.div`
  ul {
    display: flex;
    align-items: center;
    height: 100%;

    li:not(:first-of-type) {
      margin-left: 25px;
      font-size: 20px;
    }
  }
`;

export default Header;
