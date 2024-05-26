import { TextFieldSx, ButtonSx, ButtonOutlinedSx } from "../../theme";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
import cs from "../../utils/class";
import { validateEmail } from "../../utils/validations";
import { useState } from "react";

function LoginForm({ next, prev, userInfo }) {
  const navigate = useNavigate();
  const [error, setError] = useState({ state: false, helperText: "" });
  function customNext() {
    if (validateEmail(userInfo.email)) {
      next();
    } else {
      displayError();
    }
  }

  function displayError() {
    setError({ state: true, helperText: "이메일 형식이 맞지 않습니다." });
    setTimeout(() => setError({ state: false, helperText: "" }), 1000);
  }
  return (
    <section className="flex flex-col items-center w-fit h-fit px-4">
      <span
        className="text-4xl my-10 text-primary"
        style={{ fontFamily: "UhBee" }}
      >
        환영합니다! <br />
        사용하고자 하는 <span className="text-highlight">이메일</span>을
        입력해주세요!
      </span>
      <TextField
        error={error.state}
        label="Email"
        variant="outlined"
        className="w-full min-w-72 my-4 transition-all duration-1000"
        helperText={error.helperText}
        sx={TextFieldSx}
        onChange={(e) => userInfo.setEmail(e.target.value)}
      />
      <TextField
        label="name"
        variant="outlined"
        className="w-full min-w-72 my-4 transition-all duration-1000"
        sx={TextFieldSx}
        onChange={(e) => userInfo.setUserName(e.target.value)}
      />
      <div className="w-full flex justify-between">
        <Button
          variant="outlined"
          className="my-5 mx-2"
          sx={ButtonOutlinedSx}
          onClick={prev}
          tabIndex={1}
        >
          이전
        </Button>
        <Button
          variant="contained"
          className="my-5 ml-2"
          sx={ButtonSx}
          onClick={customNext}
          tabIndex={2}
        >
          다음
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
      <span
        className="my-4 text-primary cursor-pointer"
        onClick={() => navigate(-1)}
      >
        돌아가기
      </span>
    </section>
  );
}

export default LoginForm;
