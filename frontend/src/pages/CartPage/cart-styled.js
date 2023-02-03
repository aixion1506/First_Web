import styled from "styled-components"; 

export const CartWrapper = styled.div`
  /* width: calc(100% - 300px); */
  width: 1280px;
  margin: 0 auto;
  padding: 100px 150px;

  & > div {
    display: flex;
    position: relative;
  }

  > div:first-child {
    padding-bottom: 10px;
    margin-bottom: 50px;
    border-bottom: 1px solid #000;

    p {
      color: #a0a0a0;
      font-size: 26px;
      span {
        color: #000;
        font-size: 40px;
      }
    }
  }
`;

export const CartList = styled.div `
  width: 60%;
  margin: 0 2.5% 0 0;

  ul {
    li {
      display: flex;
      margin-bottom: 40px;

      img {
        width: 150px;
        margin: 0 20px;
      }

      > div {
        display: flex;
        flex-direction: column;
        padding: 10px 20px;
        box-sizing: border-box;
        p {
          margin-bottom: 20px;
          font-size: 17px;
        }

        > div {
          margin: auto auto 0 0;
          padding: 10px 0;

          button {
            padding: 5px 15px;
            background-color: white;
            font-weight: 500;
            cursor: pointer;
            font-size: 22px;
          }

          button:nth-child(2) {
            background-color: black;
            color: white;
            border-left: none;
            border-right: none;
          }
        }
      }

      > p {
        padding-top: 10px;
        text-decoration: underline;
      }
    }
  }
`

export const PayInfo = styled.div `
  position: sticky;
  top: 0px;
  padding-top: 100px;
  width: 37.5%;
  height: 500px;
  
  p, li {
    padding: 0 0 10px 20px;
  }

  p:first-child {    
    font-size: 26px;
  }

  p:last-child {
    margin: 30px 0;
  }

  ul {
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    padding: 30px 0;
    
    li:not(:last-child) {
      margin-bottom: 30px;
    }
  }

  button {
    display: block;
    width: 100%;
    height: 70px;
    font-size: 20px;
    background-color: #fff;
    cursor: pointer;
  }
  button:last-child {
    margin-top: 10px;
    background-color: #000;
    color: #fff;
  }
`