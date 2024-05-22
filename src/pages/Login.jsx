function Login() {
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`;

  function redirect() {
    window.location.assign(link);
  }
  return (
    <div className="w-full h-full grid items-center">
      <section className="flex flex-col items-center">
        로그인
        <input placeholder="ID" className="py-1 px-2 placeholder-gray-200" />
        <a onClick={redirect}>login with kakao</a>
        <a href="/20194043">this is going to redirect to internal server</a>
      </section>
    </div>
  );
}

export default Login;
