import { useEffect, useRef, useState } from "react";
import LoginForm from "../components/registerForms/loginForm";
import PasswordForm from "../components/registerForms/passwordForm";
import EmailCheckForm from "../components/registerForms/emailCheckForm";

function Register() {
  const [width, setWidth] = useState(0);
  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(0);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userName, setUserName] = useState("");

  const userInfo = {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    userName,
    setUserName,
  };
  const sliderContainer = useRef();
  function getWidth() {
    setWidth(sliderContainer.current.children[index].offsetWidth);
  }
  useEffect(() => {
    getWidth();
  });

  function prevPage() {
    const beforeWidth = sliderContainer.current.children[index - 1].offsetWidth;
    if (index > 0) {
      setOffset(offset + beforeWidth);
      setIndex(index - 1);
      getWidth();
      console.log(offset);
    }
  }

  function nextPage() {
    if (sliderContainer.current.children.length - 1 > index) {
      console.log("next");
      setIndex(index + 1);
      setOffset(offset - width);
      getWidth();
      console.log(offset);
    }
  }
  return (
    <div className="w-full h-full grid justify-center">
      <div
        className="relative h-full grid items-center overflow-hidden "
        style={{ width: `${width}px` }}
      >
        <div
          className="flex absolute h-fit transition-transform"
          ref={sliderContainer}
          style={{ transform: `translateX(${offset}px)` }}
        >
          <LoginForm next={nextPage} userInfo={userInfo} />
          <PasswordForm next={nextPage} prev={prevPage} userInfo={userInfo} />
          <EmailCheckForm next={nextPage} prev={prevPage} userInfo={userInfo} />
        </div>
      </div>
    </div>
  );
}

export default Register;
