import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  DeleteAccountWrapper,
  DeleteAccountForm,
  CancelButton,
} from "./styled";
import {
  LayoutWrapper,
  InputWrapper,
  Button,
} from "../../components/common-styled";

const DeleteAccount = () => {
  const [password, setPassword] = useState("");

  const deleteAccountSubmit = (e) => {
    e.preventDefault();

    alert("회원탈퇴");
    console.log("비밀번호", password);
  };

  return (
    <LayoutWrapper>
      <DeleteAccountWrapper>
        <h1>DELETE ACCOUNT</h1>
        <DeleteAccountForm onSubmit={deleteAccountSubmit}>
          <InputWrapper>
            <label>PASSWORD</label>
            <input
              type="password"
              required
              placeholder="비밀번호를 입력해주세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputWrapper>
          <Button>DELETE</Button>
        </DeleteAccountForm>
        <CancelButton>
          <Link to="../">CANCEL</Link>
        </CancelButton>
      </DeleteAccountWrapper>
    </LayoutWrapper>
  );
};

export default DeleteAccount;
