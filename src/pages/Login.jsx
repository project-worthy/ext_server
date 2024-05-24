import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import KakaoLogin from "../components/socialLogin/kakao";
import { useState } from "react";
import { TextFieldSx, ButtonSx } from "../theme";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [passwordStyle, setPasswordStyle] = useState({
    maxHeight: 0,
    opacity: 0,
  });
  const [loginState, setLoginState] = useState(0);
  function loginHandler() {
    //TODO: 여기서 로그인 이메일 정보 가져오기
    const result = { status: true };
    if (result.status && loginState === 0) {
      setPasswordStyle({ maxHeight: "550px", opacity: 1 });
      setLoginState(loginState + 1);
    } else if (result.status && loginState === 1) {
      navigate("/20194043");
    }
  }
  return (
    <div className="w-full h-full grid items-center">
      <section className="flex flex-col items-center">
        <span className="text-4xl my-10">로그인</span>

        <TextField
          label="ID"
          variant="outlined"
          className="w-1/5 min-w-72 my-4 transition-all duration-1000"
          sx={TextFieldSx}
        />
        <TextField
          label="password"
          variant="outlined"
          type="password"
          className="w-1/5 min-w-72 my-4 transition-all duration-1000"
          style={passwordStyle}
          sx={TextFieldSx}
        />
        <Button
          variant="contained"
          className="my-5"
          onClick={loginHandler}
          sx={ButtonSx}
        >
          로그인
        </Button>

        <span>다른 방식으로 로그인</span>
        <KakaoLogin />
      </section>
    </div>
  );
}

export default Login;
