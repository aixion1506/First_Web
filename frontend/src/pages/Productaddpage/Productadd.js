import { ProductaddWrapper, ProductaddNav } from "./Productadd-styled";

const Main = () => {
  return (
    <>
      <ProductaddWrapper>
        <div>
          <p>상품등록</p>
        </div>
        <border></border>
        <ProductaddNav>
          <p>제품 이름</p>
          <p>
            <input type="text" placeholder="아이보리 티셔츠"></input>
          </p>
        </ProductaddNav>
        <ProductaddNav>
          <p>카테고리</p>
          <p>
            <input type="text" placeholder="카테고리를 선택해주세요"></input>
          </p>
        </ProductaddNav>
        <ProductaddNav>
          <p>제조사</p>
          <p>
            <input type="text" placeholder="00의류제조(주)"></input>
          </p>
        </ProductaddNav>
        <ProductaddNav>
          <p>요약 설명</p>
          <p>
            <input
              type="text"
              placeholder="제품에 대한 1~2문장의 설명을 적어주세요."
            ></input>
          </p>
        </ProductaddNav>
        <ProductaddNav>
          <p>상세설명</p>
          <p>
            <input
              type="text"
              placeholder="제품에 대한 상세 설명을 적어주세요"
            ></input>
          </p>
        </ProductaddNav>
        <ProductaddNav></ProductaddNav>
        <ProductaddNav></ProductaddNav>
        <ProductaddNav></ProductaddNav>
      </ProductaddWrapper>
    </>
  );
};

export default Main;
