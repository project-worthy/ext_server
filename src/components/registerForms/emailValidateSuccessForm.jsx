import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function EmailValidateSuccessForm({ userInfo }) {
  const navigate = useNavigate();
  const [sec, setSec] = useState(3);
  function goHome() {
    navigate("/");
  }
  useEffect(() => {
    if (sec === 0) {
      goHome();
    }
  }, [sec]);
  useEffect(() => {
    if (userInfo.index !== 3) return;

    const interval = setInterval(() => {
      if (sec > 0) {
        setSec((prev) => (prev > 0 ? prev - 1 : 0));
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [userInfo.index]);
  return (
    <section className="w-[450px] flex-grow flex-shrink-0">
      <div className="flex w-full flex-col items-center px-4 ">
        <div>
          <h1 className="text-4xl" style={{ fontFamily: "UhBee" }}>
            어서오세요!
          </h1>
          <p className="text-4xl" style={{ fontFamily: "UhBee" }}>
            성공적으로 <span className="text-highlight">이메일</span>이
            인증되었습니다.
            <br /> {sec}초 후 자동으로 홈페이지로 이동됩니다.
          </p>
        </div>

        <span className="my-10">
          시간이 시간이 지나도 이동하지 않는다면{" "}
          <a className="text-highlight cursor-pointer" onClick={goHome}>
            여기
          </a>
          를 눌러주세요
        </span>
      </div>
    </section>
  );
}

export default EmailValidateSuccessForm;
