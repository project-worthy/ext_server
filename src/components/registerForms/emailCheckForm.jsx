import { ButtonSx, ButtonOutlinedSx } from "../../theme";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import cs from "../../utils/class";

function EmailCheckForm({ next, prev }) {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col items-center w-fit h-fit px-4">
      <span
        className="text-4xl my-10 text-primary text-nowrap"
        style={{ fontFamily: "UhBee" }}
      >
        인증번호를 해당 <span className="text-highlight">이메일</span>로
        전송했습니다! <br />
        <span className="text-highlight">인증번호</span>를 입력해주세요!
      </span>
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
          onClick={next}
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
    </section>
  );
}

export default EmailCheckForm;
