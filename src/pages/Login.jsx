import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import KakaoLogin from "../components/socialLogin/kakao";
import { ReactComponent as ArrowBack } from "../icons/arrowBack.svg";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import cs from "../utils/class";
import { TextFieldSx, ButtonSx, ButtonOutlinedSx } from "../theme";

function Login() {
  const navigate = useNavigate();
  const [passwordStyle, setPasswordStyle] = useState({
    maxHeight: 0,
    opacity: 0,
  });
  const [loginState, setLoginState] = useState(0);
  const [loginBtnText, setLoginBtnText] = useState("다음");

  function backhandler() {
    navigate("/");
  }

  function loginHandler() {
    //TODO: 여기서 로그인 이메일 정보 가져오기
    const result = { status: true };
    if (result.status && loginState === 0) {
      setPasswordStyle({ maxHeight: "550px", opacity: 1 });
      setLoginState(loginState + 1);
      setLoginBtnText("로그인");
    } else if (result.status && loginState === 1) {
      navigate("/20194043");
    }
  }

  function registerHandler() {
    navigate("/register");
  }
  return (
    <div className="w-full h-full grid items-center justify-center">
      <section className="flex flex-col items-center w-fit">
        <div className="w-full">
          <ArrowBack
            className="fill-primary hover:fill-highlight transition-colors cursor-pointer"
            onClick={backhandler}
          />
        </div>
        <span
          className="text-4xl my-10 text-primary"
          style={{ fontFamily: "UhBee" }}
        >
          어서오세요! <br />
          진행하시려면 <span className="text-highlight">로그인</span>해 해주세요
        </span>

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
        <div className="w-full flex justify-end">
          <Button
            variant="outlined"
            className="my-5 mx-2"
            onClick={registerHandler}
            sx={ButtonOutlinedSx}
          >
            계정 만들기
          </Button>
          <Button
            variant="contained"
            className="my-5 ml-2"
            onClick={loginHandler}
            sx={ButtonSx}
          >
            {loginBtnText}
          </Button>
        </div>

        <span
          className={cs.join(
            "text-primary my-4 w-full border-t-[1px] border-primary relative",
          )}
          style={{ fontFamily: "UhBee" }}
        >
          <span className="absolute -translate-y-1/2 -translate-x-1/2 left-1/2 bg-background px-2 text-lg">
            or
          </span>
        </span>
        <KakaoLogin />
      </section>
    </div>
  );
}

export default Login;
