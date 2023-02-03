import { SingupWrapper, InputWrapper } from "./styled";

const Signup = () => {
  return (
    <SingupWrapper>
      <h1>SIGN UP</h1>
      <InputWrapper>
        <label htmlFor="">NAME</label>
        <input type="text" />
      </InputWrapper>
    </SingupWrapper>
  );
};

export default Signup;
