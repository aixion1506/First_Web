import React, { useRef, useState } from "react";

import { Link } from "react-router-dom";
import { useCallback } from "react";
import { LoginWrapper, LoginForm, GotoSingup } from "./styled";
import { InputWrapper, Button } from "../../components/common-styled";
import { LayoutWrapper } from "../../components/common-styled";

/** 로그인 할 때도 유효성 검사가 필요한가????... */

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const passwordRef = useRef();

  const loginSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const loginUser = {
        email,
        password,
      };

      console.log("로그인", loginUser);
    },
    [email, password]
  );

  return (
    <LayoutWrapper>
      <LoginWrapper>
        <h1>LOG IN</h1>
        <LoginForm onSubmit={loginSubmit}>
          <InputWrapper>
            <label>EMAIL</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <label>PASSWORD</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              ref={passwordRef}
            />
          </InputWrapper>
          <Button>LOG IN</Button>
          <GotoSingup>
            <Link to="/signup">Create an account</Link>
          </GotoSingup>
        </LoginForm>
      </LoginWrapper>
    </LayoutWrapper>
  );
};

export default Login;
