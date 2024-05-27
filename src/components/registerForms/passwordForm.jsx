import { TextFieldSx, ButtonSx, ButtonOutlinedSx } from "../../theme";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import cs from "../../utils/class";
import {
  // sendValidateEmail,
  validatePasswordWithArg,
} from "../../utils/validations";
import { REGISTERFORM } from "../../utils/constant";
import { sleep } from "../../utils/time";

function PasswordForm({ next, prev, userInfo, active }) {
  const navigate = useNavigate();
  const focusRef = useRef();
  const [error, setError] = useState({ state: false, helperText: "" });

  function customNext() {
    if (userInfo.password !== userInfo.confirmPassword) {
      displayError(REGISTERFORM.noMatchPassword);
      return;
    }
    const { state, helperText } = validatePasswordWithArg(userInfo.password);
    if (state) {
      // sendValidateEmail(userInfo.email, userInfo.userName);
      next();
    } else {
      displayError(helperText);
    }
  }

  async function focus() {
    if (!active) return;
    await sleep(200);
    focusRef.current.focus();
  }
  useEffect(() => {
    focus();
  }, [active]);

  function displayError(text) {
    setError({ state: true, helperText: text });
    setTimeout(() => setError({ state: false, helperText: "" }), 3000);
  }
  function handleKeyDown(e) {
    if (e.keyCode === 13) customNext();
  }
  return (
    <section className="w-[450px] flex-grow flex-shrink-0">
      <div className="flex w-full flex-col items-center px-4 ">
        <span
          className="text-4xl my-10 text-primary w-fit"
          style={{ fontFamily: "UhBee" }}
        >
          사용하고자 하는 <span className="text-highlight">비밀번호</span>를
          입력해주세요!
        </span>
        <TextField
          label="Email"
          variant="outlined"
          className="w-full min-w-72 my-4 transition-all duration-1000"
          value={userInfo.email}
          focused={false}
          inputProps={{
            readOnly: true,
            tabIndex: -1,
          }}
          sx={TextFieldSx}
        />
        <div className="grid grid-cols-2 w-full">
          <TextField
            error={error.state}
            label="Password"
            variant="outlined"
            className="w-full my-4 transition-all duration-1000 pr-1"
            type="password"
            helperText={error.helperText}
            sx={TextFieldSx}
            onChange={(e) => userInfo.setPassword(e.target.value)}
            inputProps={{
              tabIndex: active ? "1" : "-1",
            }}
            inputRef={focusRef}
          />
          <TextField
            error={error.state}
            label="Confirm Password"
            variant="outlined"
            className="w-full my-4 transition-all duration-1000 pl-1"
            type="password"
            helperText={error.helperText}
            sx={TextFieldSx}
            onChange={(e) => userInfo.setConfirmPassword(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e)}
            inputProps={{
              tabIndex: active ? "2" : "-1",
            }}
          />
        </div>

        <div className="w-full flex justify-between">
          <Button
            variant="outlined"
            className="my-5 mx-2"
            sx={ButtonOutlinedSx}
            onClick={prev}
            tabIndex={-1}
          >
            이전
          </Button>
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

export default PasswordForm;
