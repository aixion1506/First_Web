import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { ProductDetailWrapper, ProductImg, ProductInfo, Button } from "./productDetail-styled";
import RadioBox from "./RadioBox";
import Counter from './Counter';

const Product = () => {
  const [productDetail, setProductDetail] = useState({});
  const { title } = useParams();

  const size = {
    type: "size",
    option: ["small", "medium", "large", "xlarge", "xxlarge"]
  };

  const imgError = (e) => e.target.src="https://kuku-keke.com/wp-content/uploads/2020/04/2491_6.png";
  

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:8001/api/products");
        const products = response.data;
        const detail = products.filter(product => product.title === title)[0];
        setProductDetail(detail);
        console.log(detail)
      } catch(err) {
        console.log(`ERROR: ${err}`);
      }
    })();
  }, []);

  return (
    <>
      <ProductDetailWrapper>
        <div>
          <ProductImg>
            <img
              src={productDetail.imageUrl}
              alt={`Product ${productDetail.title}`}
              onError={imgError}
            />
          </ProductImg>
          <ProductInfo>
            <div>
              <p>{productDetail.title}</p>
              <span>₩ {Number(productDetail.price).toLocaleString("ko-KR")}</span>
            </div>
            <div>
              <Counter />
              <RadioBox options={size} />
              <Button black>쇼핑백 담기</Button>
              <Button>구매하기</Button>
            </div>
            <div>
              <p>
                오후 2시 이전 주문 시 오늘출발 / 오늘도착
                <br />
                공식 홈페이지 전용 서비스입니다.
                <br />
                추가 배송비는 발생하지 않습니다.
              </p>
            </div>
          </ProductInfo>
        </div>
      </ProductDetailWrapper>
    </>
  );
};

export default Product;
