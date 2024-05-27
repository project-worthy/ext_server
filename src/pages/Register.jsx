import { useRef, useState } from "react";
import LoginForm from "../components/registerForms/loginForm";
import PasswordForm from "../components/registerForms/passwordForm";
import EmailCheckForm from "../components/registerForms/emailCheckForm";
import EmailValidateSuccessForm from "../components/registerForms/emailValidateSuccessForm";

function Register() {
  const [offset, setOffset] = useState(0);
  const indexRef = useRef(0);

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
    index: indexRef.current,
  };
  const sliderContainer = useRef();

  function refresh() {
    setTransform(indexRef.current);
  }

  function prevPage() {
    if (indexRef.current > 0) {
      indexRef.current -= 1;
      refresh();
    }
  }

  function nextPage() {
    if (sliderContainer.current.children.length - 1 > indexRef.current) {
      indexRef.current += 1;
      refresh();
    }
  }

  function setTransform(page) {
    const totalWidth = [...sliderContainer.current.children]
      .slice(0, page)
      .reduce((acc, cur) => acc + cur.offsetWidth, 0);
    setOffset(totalWidth * -1);
  }

  return (
    <div className="w-full h-full grid justify-center">
      <div className="relative h-full flex items-center overflow-hidden w-[450px]">
        <div
          className="flex absolute h-fit transition-transform left-0"
          ref={sliderContainer}
          style={{ transform: `translateX(${offset}px)` }}
        >
          <LoginForm
            next={nextPage}
            userInfo={userInfo}
            active={indexRef.current == 0}
          />
          <PasswordForm
            next={nextPage}
            prev={prevPage}
            userInfo={userInfo}
            active={indexRef.current == 1}
          />
          <EmailCheckForm
            next={nextPage}
            prev={prevPage}
            userInfo={userInfo}
            active={indexRef.current == 2}
          />
          <EmailValidateSuccessForm userInfo={userInfo} />
        </div>
      </div>
    </div>
  );
}

export default Register;
