import "./App.css";

// import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginCallback from "./api/loginCallback";
function App() {
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`;
  // const link2 = "https://kauth.kakao.com/oauth/authorize";

  function redirect() {
    window.location.assign(link);
  }
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="asdf">
              Home
              <a onClick={redirect}>login with kakao</a>
              <a href="/20194043">
                this is going to redirect to internal server
              </a>
            </div>
          }
        ></Route>
        <Route path="/auth/kakao/callback" element={<LoginCallback />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
