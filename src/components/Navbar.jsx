import { ReactComponent as WorthyLogo } from "../icons/logo.svg";
import { useNavigate, useLocation } from "react-router-dom";

import Button from "@mui/material/Button";
import { useEffect, useState } from "react";

function Navbar() {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  function handleLogin() {
    if (location.pathname === "/") navigate("/login");
    else if (location.pathname === "/login") navigate("/register");
  }
  useEffect(() => {
    if (location.pathname === "/") setText("로그인");
    else if (location.pathname === "/login") setText("회언가입");
  }, [location.pathname]);
  return (
    <nav className="flex justify-between items-center">
      <WorthyLogo
        className="h-10 w-auto my-3 mx-10 fill-primary cursor-pointer"
        onClick={() => navigate("/")}
      />
      <div className="w-auto my-3 mx-10">
        <Button
          variant="contained"
          onClick={handleLogin}
          className="bg-highlight"
        >
          {text}
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
