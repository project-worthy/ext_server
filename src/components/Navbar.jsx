import { ReactComponent as WorthyLogo } from "../icons/logo.svg";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";

function Navbar() {
  const navigate = useNavigate();
  function handleLogin() {
    navigate("/login");
  }
  return (
    <nav className="flex justify-between items-center">
      <WorthyLogo className="h-10 w-auto my-3 mx-10 fill-primary" />
      <div className="w-auto my-3 mx-10">
        <Button
          variant="contained"
          onClick={handleLogin}
          className="bg-highlight"
        >
          로그인
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
