import styled from "styled-components";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <NavContainer>
          {/* <ul>
            <li>SHOP</li>
            <li>COLLECTION</li>
            <li>ABOUT</li>
            <li>BOARD</li>
          </ul> */}
          <LinkStyle to="/">SHOP</LinkStyle>
          <LinkStyle to="/">COLLECTION</LinkStyle>
          <LinkStyle to="/">ABOUT</LinkStyle>
          <LinkStyle to="/">BOARD</LinkStyle>
      </NavContainer>
    </>
  );
};

const NavContainer = styled.div`
  position: fixed;
  width: 300px;
  height: 100%;
  padding: 110px 40px;
  box-sizing: border-box;

  ul li:not(:last-of-type) {
    margin-bottom: 20px;
  }
`

const LinkStyle = styled(Link)`
  display: block;
  margin-bottom: 20px;
  color: #000;
  text-decoration: none;
`

export default Nav;
