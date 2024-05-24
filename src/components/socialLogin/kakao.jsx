import { ReactComponent as KakaoLogo } from "../../icons/kakao.svg";
function KakaoLogin() {
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`;
  function redirect() {
    window.location.assign(link);
  }
  return (
    <div className="rounded-[12px] bg-[#FEE500] p-[14px]" onClick={redirect}>
      <KakaoLogo width={24} />
    </div>
  );
}

export default KakaoLogin;
