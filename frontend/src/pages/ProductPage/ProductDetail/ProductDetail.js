import React from "react";
import {
  ProductDetailWrapper,
  ProductInfo,
  ProductImg,
} from "./product-styled";
import RadioBox from "./RadioBox";
import queryString from "query-string";

const Product = () => {
  const qs = queryString.parse(window.location.search);
  const size = {
    type: "size",
    option: ["small", "medium", "large", "xlarge", "xxlarge"],
  };
  console.log(qs);
  const products = [];
  for (let i = 0; i < 12; i++) {
    const product = (
      <li>
        <img
          src="https://www.ganni.com/dw/image/v2/AAWT_PRD/on/demandware.static/-/Sites-ganni-master-catalogue/default/dw2194b9cd/images/images/packshots/K1829-554-1.jpg?sh=2000"
          alt="Product"
        />
        <div>
          <p>Graphic V-neck Vest</p>
          <span>₩280,000</span>
        </div>
      </li>
    );
    products.push(product);
  }

  return (
    <>
      <ProductDetailWrapper>
        <div>
          <ProductImg>
            <img src={qs.imgurl} alt={`Product ${qs.title}`} />
          </ProductImg>
          <ProductInfo>
            <div>
              <p>{qs.title}</p>
              <span>₩{qs.price}</span>
            </div>
            <div>
              {/* <RadioBox options={size} /> */}
              <RadioBox options={size} />
              <button>쇼핑백 담기</button>
              <button>구매하기</button>
            </div>
            <div>
              <p>
                오후 2시 이전 주문 시 오늘출발 / 오늘도착
                <br />
                공식 홈페이지 전용 서비스입니다. 블랙업 공식 홈페이지 전용
                서비스입니다.
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
