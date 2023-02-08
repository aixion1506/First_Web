import React, { useEffect, useState } from 'react';
import { CartWrapper, CartList, PayInfo } from "./styled";
import CartItem from "./CartItem"
const Cart = ({ cart, setCart }) => {
  const [carts, setCarts] = useState("");
  // const [count, setCount] = useState(0);

  // const increase = (e) => {
  //   e.preventDefault();
  //   setCount((current) => current += 1)
  // }
  // const decrease = (e) => {
  //   e.preventDefault();
  //   setCount((current) => current -= 1);
  // }

  useEffect(() => {
    setCarts(JSON.parse(localStorage.getItem("cart")));
    console.log(cart)
  }, [])



  // 장바구니 전체 삭제
  // const removeAll = () => {
  //   localStorage.clear();
  // }

  // 총 합계
  // function getTotal() {
  //   let temp = localCart.map(function (item) {
  //     return parseInt(item.price);
  //   })

  //   let sum = temp.reduce(function (prev, next) {
  //     return prev + next;
  //   }, 0);
  //   console.log(sum);
  // }

  return (
    <>
      <CartWrapper>


        <div>
          <p>
            <span>장바구니</span> &#62; 주문결제 &#62; 주문완료{" "}
          </p>
        </div>
        <div>
          <CartList>
            <form>
              <input type="checkbox" id="allcheck" />
              <label htmlFor="allcheck">ALL</label>
              <ul>
                {carts && carts.map((item) =>
                  (<CartItem key={item._id} {...item} />)
                )}
              </ul>
            </form>
          </CartList>
          <PayInfo>
            <div>
              <p>결제정보</p>
              <ul>
                <li>상품수</li>
                <li>상품금액</li>
                <li>배송비</li>
              </ul>
              <p>총 결제금액</p>
            </div>
            {/* <button onClick={removeAll}>쇼핑백 비우기</button> */}
            <button>주문 하기</button>
          </PayInfo>
        </div>
      </CartWrapper>
    </>
  );
};

export default Cart;
