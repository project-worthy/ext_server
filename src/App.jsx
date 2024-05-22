import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginCallback from "./api/loginCallback";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import cs from "./utils/class";

function App({ className }) {
  return (
    <div
      className={cs.join(
        className,
        "bg-background h-100vh w-screen h-screen flex flex-col",
      )}
    >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/auth/kakao/callback"
            element={<LoginCallback />}
          ></Route>
        </Routes>
        <div>{}</div>
      </Router>
    </div>
  );
}

export default App;
