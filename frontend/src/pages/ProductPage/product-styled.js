import styled from "styled-components"; 

export const ProductWrapper = styled.div`
  /* width: calc(100% - 300px); */
  width: 1280px;
  margin: 0 auto;

  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 150px 100px;
    
    li {
      width: 30%;
      margin-bottom: 80px;
    }
    li:not(:nth-child(3n+1)) {
      padding-left: 5%;
    }
    li img {
      display: block;
      width: 100%;
    }
  }

  div {
    text-align: center;
    p {
      margin-bottom: 5px;
      font-size: 22px;
    }
    span {
      font-size: 20px;
    }
  }
`;
