import axios from "axios";
import React, { useEffect, useState } from 'react';
import { ProductWrapper, LinkStyle } from "./styled";

const Product = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("https://vercel-express-pied-kappa.vercel.app/prod?pageNumber=1&pageSize=50");
        const products = response.data.content;
        setProductList(products);
      } catch(err) {
        console.log(`ERROR: ${err}`);
      }
    })();
  }, []);

  return (
    <>
      <ProductWrapper>
        <ul>
          { 
            productList.map(item => {
              return (
                <li key={item.prodId}>
                  <LinkStyle to={`/product/detail?name=${item.prodName}&imgsrc=${item.prodImageUrl}`}>
                    <img
                      src={item.prodImageUrl}
                      alt={`Product ${item.prodName}`}
                    />
                    <div>
                      <p>{item.prodName}</p>
                      <span>₩280,000</span>
                    </div>
                  </LinkStyle>
                </li>
              )
            })
          }
        </ul>
      </ProductWrapper>
    </>
  );
};

export default Product;
