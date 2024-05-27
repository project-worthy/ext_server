import { TextFieldSx, ButtonSx } from "../../theme";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
import cs from "../../utils/class";
import { validateEmail } from "../../utils/validations";
import { useState, useRef, useEffect } from "react";

import { sleep } from "../../utils/time";
function LoginForm({ next, userInfo, active }) {
  const navigate = useNavigate();
  const focusRef = useRef();
  const [error, setError] = useState({ state: false, helperText: "" });

  async function focus() {
    if (!active) return;
    await sleep(200);
    focusRef.current.focus();
  }
  useEffect(() => {
    focus();
  }, [active]);

  function customNext() {
    if (userInfo.email === "") return displayError();
    if (userInfo.userName === "") return displayError();
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

  function handleKeyDown(e) {
    if (e.keyCode === 13) customNext();
  }
  return (
    <section className="w-[450px] flex-grow flex-shrink-0">
      <div className="flex w-full flex-col items-center px-4 ">
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
          className="w-full my-4 transition-all duration-1000"
          helperText={error.helperText}
          sx={TextFieldSx}
          onChange={(e) => userInfo.setEmail(e.target.value)}
          inputProps={{ tabIndex: active ? "1" : "-1", focused: active }}
          inputRef={focusRef}
        />
        <TextField
          label="name"
          variant="outlined"
          className="w-full my-4 transition-all duration-1000"
          sx={TextFieldSx}
          onChange={(e) => userInfo.setUserName(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
          inputProps={{ tabIndex: active ? "2" : "-1" }}
        />
        <div className="w-full flex justify-between">
          <div></div>
          <Button
            variant="contained"
            className="my-5 ml-2"
            sx={ButtonSx}
            onClick={customNext}
            tabIndex={-1}
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
      </div>
    </section>
  );
}

export default LoginForm;
