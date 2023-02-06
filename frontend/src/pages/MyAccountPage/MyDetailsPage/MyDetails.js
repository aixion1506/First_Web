import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "../../../routes/route";
import {
  MyDetailsWrapper,
  DetailFormWrapper,
  TitleWrapper,
  GotoSignout,
  CancelButton,
} from "./mydetails-styled";
import {
  LayoutWrapper,
  InputWrapper,
  Button,
} from "../../../components/common-styled";

const MyDetails = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");

  /** 사용자 정보 불러오기 */
  useEffect(() => {
    const userInfo = {
      name: "김ㅇㅇ",
      email: "user1@user.com",
    };

    setEmail(userInfo.email);
    setName(userInfo.name);
    setAddress1(userInfo.address1 ? userInfo.address1 : "");
    setAddress2(userInfo.address2 ? userInfo.address2 : "");
    setZipcode(userInfo.zipcode ? userInfo.zipcode : "");
    setCity(userInfo.city ? userInfo.city : "");
    setPhone(userInfo.phone ? userInfo.phone : "");
  }, []);

  /** 비밀번호 확인 */
  const checkPassword = useCallback(() => {
    const userPW = {
      currentPassword: "12341234",
    };

    if (String(currentPassword) === String(userPW.currentPassword)) {
      return true;
    } else {
      return false;
    }
  }, [password, currentPassword]);

  /** 사용자 정보 제출 */
  const userDetailSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const userDetail = {
        name,
        email,
        password,
        currentPassword,
        address1,
        address2,
        zipcode,
        city,
        phone,
      };

      if (checkPassword()) {
        return console.log("디테일 제출", userDetail);
      } else {
        return alert("비밀번호를 확인해주세요");
      }
    },
    [address1, address2, zipcode, city, phone]
  );

  return (
    <LayoutWrapper>
      <MyDetailsWrapper>
        <TitleWrapper>
          <h1>MY DETAILS</h1>
        </TitleWrapper>
        <DetailFormWrapper onSubmit={userDetailSubmit}>
          <InputWrapper>
            <label>이메일</label>
            <input type="email" required value={email} readOnly />
          </InputWrapper>
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
            <label>비밀번호 변경</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="변경할 비밀번호를 입력하세요(8글자 이상)"
              minLength="8"
            />
          </InputWrapper>
          <InputWrapper>
            <label>현재 비밀번호</label>
            <input
              type="password"
              required
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="현재 비밀번호를 입력하세요"
              minLength="8"
            />
          </InputWrapper>
          <InputWrapper>
            <label>주소</label>
            <input
              type="text"
              required
              value={address1}
              onChange={(e) => setAddress1(e.target.value)}
              placeholder="주소를 입력하세요"
            />
          </InputWrapper>
          <InputWrapper>
            <label>상세주소</label>
            <input
              type="text"
              required
              value={address2}
              onChange={(e) => setAddress2(e.target.value)}
              placeholder="상세 주소를 입력하세요"
            />
          </InputWrapper>
          <InputWrapper>
            <label>우편번호</label>
            <input
              type="text"
              required
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
              placeholder="우편번호를 입력하세요"
            />
          </InputWrapper>
          <InputWrapper>
            <label>도시</label>
            <input
              type="text"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="도시를 입력하세요"
            />
          </InputWrapper>
          <InputWrapper>
            <label>전화번호</label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="전화번호를 입력하세요"
            />
          </InputWrapper>
          <Button>APPLY</Button>
          <CancelButton>
            <Link to="../">CANCEL</Link>
          </CancelButton>
          <GotoSignout>
            <Link to={ROUTE.DELETEACCOUNT.link}>DELETE ACCOUNT</Link>
          </GotoSignout>
        </DetailFormWrapper>
      </MyDetailsWrapper>
    </LayoutWrapper>
  );
};

export default MyDetails;
