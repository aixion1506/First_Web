import React from "react";
import { ProductDetailWrapper, ProductInfo, ProductImg } from "./styled";
import SelectBox from "./SelectBox";
import queryString from "query-string";
const Product = () => {
  const qs = queryString.parse(window.location.search);
  const OPTIONS = ["small", "medium", "large", "xlarge", "xxlarge"];
  console.log(qs);
  return (
    <>
      <ProductDetailWrapper>
        <div>
          <ProductImg>
            <img
              src={qs.imgsrc}
              alt="Product"
            />
          </ProductImg>
          <ProductInfo>
            <div>
              <p>{qs.name}</p>
              <span>₩280,000</span>
            </div>
            <div>
              <SelectBox options={OPTIONS} />
              <button>쇼핑백 담기</button>
              <button>구매하기</button>
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
