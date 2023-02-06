import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  MyDetailsWrapper,
  DetailFormWrapper,
  TitleWrapper,
  GotoSignout,
} from "./mydetails-styled";
import {
  LayoutWrapper,
  InputWrapper,
  Button,
} from "../../../components/common-styled";

/** 이름 변경 가능하게 해야하나? 아님 readOnly로 해야하나???
 * 변경 가능하면 유효성체크 해야하나,,,?
 * 전화번호 숫자로 유효성체크 해야하나...???
 */

const MyDetails = () => {
  const [name, setName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");

  const userDetailSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const userDetail = {
        name,
        address1,
        address2,
        zipcode,
        city,
        phone,
      };

      console.log("디테일 제출", userDetail);
    },
    [address1, address2, zipcode, city, phone]
  );

  useEffect(() => {
    const userName = "유저1";
    setName(userName);
  }, []);

  return (
    <LayoutWrapper>
      <MyDetailsWrapper>
        <TitleWrapper>
          <h1>MY DETAILS</h1>
        </TitleWrapper>
        <DetailFormWrapper onSubmit={userDetailSubmit}>
          <InputWrapper>
            <label>이름</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <label>주소</label>
            <input
              type="text"
              required
              value={address1}
              onChange={(e) => setAddress1(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <label>상세주소</label>
            <input
              type="text"
              required
              value={address2}
              onChange={(e) => setAddress2(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <label>우편번호</label>
            <input
              type="text"
              required
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <label>도시</label>
            <input
              type="text"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <label>전화번호</label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </InputWrapper>
          <Button>APPLY</Button>
          <GotoSignout>
            <Link to="/">DELETE ACCOUNT</Link>
          </GotoSignout>
        </DetailFormWrapper>
      </MyDetailsWrapper>
    </LayoutWrapper>
  );
};

export default MyDetails;
