import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import qs from "qs";
//Navigate
function LoginCallback() {
  const search = useLocation().search;
  const code = new URLSearchParams(search).get("code");
  const getToken = async () => {
    const payload = qs.stringify({
      grant_type: "authorization_code",
      client_id: "9371a506e0c8d46bc3693c393a7bca16",
      redirect_uri: "http://localhost:3000/auth/kakao/callback",
      code: code,
    });
    try {
      const ret = await axios.post(
        "https://kauth.kakao.com/oauth/token",
        payload,
      );
      // window.Kakao.init("9371a506e0c8d46bc3693c393a7bca16"); // Kakao Javascript SDK 초기화
      // window.Kakao.Auth.setAccessToken(res.data.access_token); // access token 설정
      console.log(ret);
      // setIsLoggedIn(true);
      // navigate("/profile");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return <div>hello</div>;
}

export default LoginCallback;
