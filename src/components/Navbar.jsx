import { ReactComponent as WorthyLogo } from "../icons/logo.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { ButtonSx } from "../theme";

import Button from "@mui/material/Button";
import { useEffect, useState } from "react";

function Navbar() {
  const [display, setDisplay] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  function handleLogin() {
    navigate("/login");
  }
  useEffect(() => {
    if (location.pathname === "/") setDisplay(true);
    else setDisplay(false);
  }, [location.pathname]);
  return (
    <nav className="flex justify-between items-center">
      <WorthyLogo
        className="h-10 w-auto my-3 mx-10 fill-primary cursor-pointer"
        onClick={() => navigate("/")}
      />
      <div className="w-auto my-3 mx-10">
        {display && (
          <Button
            variant="contained"
            onClick={handleLogin}
            className="bg-highlight"
            sx={ButtonSx}
          >
            로그인
          </Button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
