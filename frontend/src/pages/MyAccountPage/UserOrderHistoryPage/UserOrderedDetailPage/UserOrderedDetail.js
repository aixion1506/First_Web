import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LayoutWrapper } from "../../../../components/common-styled";
import { TitleWrapper } from "../userorderhistory-styled";
import {
  UserOrderedDetailWrapper,
  UserOrderInfo,
  InfoTitle,
  InfoDetail,
} from "./userordereddetail-styled";
import UserOrderedItem from "../UserOrderedItem";

const dummy = [
  {
    id: 1,
    date: new Date().toLocaleDateString(),
    orderId:
      Math.floor(Math.random() * 100000000) +
      "-" +
      Math.floor(Math.random() * 100000000),
    title: "product1",
    price: 12332543,
    qty: 3,
    status: "결제 완료",
    image: "https://global.mardimercredi.com/img/imgmain-intro-1014-2.png",
    name: "김ㅇㅇ",
    address1: "서울시 성동구",
    address2: "오피스텔 101호",
    zipCode: "24512",
    phoneNumber: "123-423-3453",
  },
  {
    id: 2,
    date: new Date().toLocaleDateString(),
    orderId:
      Math.floor(Math.random() * 100000000) +
      "-" +
      Math.floor(Math.random() * 100000000),
    title: "product2",
    price: 234243,
    qty: 1,
    status: "배송중",
    name: "이ㅇㅇ",
    address1: "서울시 성동구",
    address2: "오피스텔 201호",
    zipCode: "21212",
    phoneNumber: "123-423-3453",
  },
  {
    id: 3,
    date: new Date().toLocaleDateString(),
    orderId:
      Math.floor(Math.random() * 100000000) +
      "-" +
      Math.floor(Math.random() * 100000000),
    title: "product3",
    price: 234534,
    qty: 7,
    status: "배송중",
    name: "박ㅇㅇ",
    address1: "서울시 성동구",
    address2: "오피스텔 301호",
    zipCode: "24512",
    phoneNumber: "123-423-3453",
  },
  {
    id: 4,
    date: new Date().toLocaleDateString(),
    orderId:
      Math.floor(Math.random() * 100000000) +
      "-" +
      Math.floor(Math.random() * 100000000),
    title: "product4",
    price: 13000,
    qty: 2,
    status: "배송 완료",
    name: "손ㅇㅇ",
    address1: "서울시 성동구",
    address2: "오피스텔 401호",
    zipCode: "24512",
    phoneNumber: "123-423-3453",
  },
  {
    id: 5,
    date: new Date().toLocaleDateString(),
    orderId:
      Math.floor(Math.random() * 100000000) +
      "-" +
      Math.floor(Math.random() * 100000000),
    title: "product5",
    price: 13000,
    qty: 2,
    status: "배송 완료",
    name: "최ㅇㅇ",
    address1: "서울시 성동구",
    address2: "오피스텔 501호",
    zipCode: "24512",
    phoneNumber: "123-423-3453",
  },
  {
    id: 6,
    date: new Date().toLocaleDateString(),
    orderId:
      Math.floor(Math.random() * 100000000) +
      "-" +
      Math.floor(Math.random() * 100000000),
    title: "product6",
    price: 13000,
    qty: 5,
    status: "배송 완료",
    name: "강ㅇㅇ",
    address1: "서울시 성동구",
    address2: "오피스텔 601호",
    zipCode: "24512",
    phoneNumber: "123-423-3453",
  },
];

const UserOrderedDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    if (id) {
      const matchedItem = dummy.find((item) => item.id == id);
      setItem(matchedItem);
    }
    if (item) {
      console.log(item);
    }
  }, [id, item]);

  return (
    <LayoutWrapper>
      <UserOrderedDetailWrapper>
        <TitleWrapper>
          <h1>ORDER INFORMATION</h1>
        </TitleWrapper>
        {item && (
          <>
            <UserOrderedItem option={"detailPage"} {...item} />
            <UserOrderInfo>
              <InfoTitle>
                <h3>배송지 정보</h3>
                <button>배송지 변경</button>
              </InfoTitle>
              <InfoDetail>
                <ul>
                  <li>
                    <strong>수령인</strong>
                    <span>{item.name}</span>
                  </li>
                  <li>
                    <strong>전화번호</strong>
                    <span>{item.phoneNumber}</span>
                  </li>
                  <li>
                    <strong>주소</strong>
                    <span>
                      ({item.zipCode}) {item.address1} {item.address2}
                    </span>
                  </li>
                </ul>
              </InfoDetail>
            </UserOrderInfo>
          </>
        )}
      </UserOrderedDetailWrapper>
    </LayoutWrapper>
  );
};

export default UserOrderedDetail;
