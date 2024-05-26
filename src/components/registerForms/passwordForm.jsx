import { TextFieldSx, ButtonSx, ButtonOutlinedSx } from "../../theme";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import cs from "../../utils/class";
import {
  sendValidateEmail,
  validatePasswordWithArg,
} from "../../utils/validations";
import { REGISTERFORM } from "../../utils/constant";

function PasswordForm({ next, prev, userInfo }) {
  const navigate = useNavigate();
  const [error, setError] = useState({ state: false, helperText: "" });
  function customNext() {
    if (userInfo.password !== userInfo.confirmPassword) {
      displayError(REGISTERFORM.noMatchPassword);
      return;
    }
    const { state, helperText } = validatePasswordWithArg(userInfo.password);
    if (state) {
      sendValidateEmail(userInfo.email, userInfo.userName);
      next();
    } else {
      displayError(helperText);
    }
  }

  function displayError(text) {
    setError({ state: true, helperText: text });
    setTimeout(() => setError({ state: false, helperText: "" }), 3000);
  }
  return (
    <section className="flex flex-col items-center w-fit h-fit px-4">
      <span
        className="text-4xl my-10 text-primary text-nowrap w-fit"
        style={{ fontFamily: "UhBee" }}
      >
        환영합니다! <br />
        사용하고자 하는 <span className="text-highlight">비밀번호</span>를
        입력해주세요!
      </span>
      <TextField
        label="Email"
        variant="outlined"
        className="w-full min-w-72 my-4 transition-all duration-1000"
        value={userInfo.email}
        defaultValue={userInfo.email}
        InputProps={{
          readOnly: true,
        }}
        sx={TextFieldSx}
      />
      <div className="grid grid-cols-2">
        <TextField
          error={error.state}
          label="Password"
          variant="outlined"
          className="w-full my-4 transition-all duration-1000 pr-1"
          type="password"
          helperText={error.helperText}
          sx={TextFieldSx}
          onChange={(e) => userInfo.setPassword(e.target.value)}
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
        />
      </div>

      <div className="w-full flex justify-between">
        <Button
          variant="outlined"
          className="my-5 mx-2"
          sx={ButtonOutlinedSx}
          onClick={prev}
        >
          이전
        </Button>
        <Button
          variant="contained"
          className="my-5 ml-2"
          sx={ButtonSx}
          onClick={customNext}
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

export default PasswordForm;
