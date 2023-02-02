import styled from "styled-components"; 

export const ProductDetailWrapper = styled.div`
  /* width: calc(100% - 300px); */
  width: 1280px;
  margin: 0 auto;

  & > div {
    display: flex;
    align-items: center;
    height: 100vh;
  }
  
  & > div > div {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  }
`;

export const ProductImg = styled.div `
  width: 60%;
  img {
    display: block;
    width: 500px;
    background-size: cover;
  }
`

export const ProductInfo = styled.div `
  flex-direction: column;
  width: 40%;
  div {
    width: 100%;
  }

  div:first-child {
    p {
      font-size: 30px;
    }
    span {
      display: block;
      margin: 10px 0;
      font-size: 22px;
    }
  }

  div:nth-child(2) {
    select {
      width: 100%;
      height: 50px;
      margin: 50px 0;
      padding: 0 10px;
      font-size: 18px;
      cursor: pointer;
    }
    button {
      display: block;
      width: 100%;
      height: 70px;
      margin: 15px 0;
      font-size: 20px;
      cursor: pointer;
    }
    button:nth-child(2) {
      background-color: #000;
      color: #fff;
    }
    button:nth-child(3) {
      background-color: #fff;
    }
  }

  div:last-child {
    margin-top: 50px;
    p { 
      font-size: 16px;
      line-height: 22px;
    }
  }
`
