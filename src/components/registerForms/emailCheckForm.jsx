import { ButtonSx, ButtonOutlinedSx } from "../../theme";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Button from "@mui/material/Button";
import cs from "../../utils/class";
import DigitComponent from "./digitComponent";

function EmailCheckForm({ next, prev, userInfo, active }) {
  const MIN = 60;
  const navigate = useNavigate();
  // this need to be on server
  const [timer, setTime] = useState(0);
  const [full, setFull] = useState(false);

  useEffect(() => {
    if (userInfo.index !== 2) return;

    const interval = setInterval(() => {
      if (timer > 0) {
        setTime((prev) => (prev > 0 ? prev - 1 : 0));
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [userInfo.index]);

  useEffect(() => {
    if (timer > 0) return;
    setTime(3 * MIN);
  }, []);

  // function resend() {}

  function CustomNext() {
    if (timer === 0) return;
    next();
  }

  return (
    <section className="w-[450px] flex-grow flex-shrink-0">
      <div className="flex w-full flex-col items-center px-4 ">
        <div className="flex flex-col items-center w-full h-fit">
          <span
            className="text-4xl my-10 text-primary text-nowrap"
            style={{ fontFamily: "UhBee" }}
          >
            인증번호를 해당 <span className="text-highlight">이메일</span>로
            전송했습니다! <br />
            <span className="text-highlight">인증번호</span>를 입력해주세요!
          </span>
          <DigitComponent active={active} setFull={setFull} />
          <div className="w-full flex justify-between">
            <span></span>
            <span className="m-3">
              {Math.floor(timer / MIN)}:{("0" + (timer % MIN)).slice(-2)}
            </span>
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
              onClick={CustomNext}
              tabIndex={-1}
              disabled={!full}
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
      </div>
    </section>
  );
}

export default EmailCheckForm;
