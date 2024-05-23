import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import KakaoLogin from "../components/socialLogin/kakao";

function Login() {
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`;

  function redirect() {
    window.location.assign(link);
  }
  return (
    <div className="w-full h-full grid items-center">
      <section className="flex flex-col items-center">
        <span className="text-4xl my-10">로그인</span>

        <TextField
          label="ID"
          variant="outlined"
          className="w-1/5 min-w-72"
          sx={{
            "& label.Mui-focused": {
              color: "rgba(var(--primary))",
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: "rgba(var(--highlight))",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "rgba(var(--secondary))",
              },
              "&:hover fieldset": {
                borderColor: "rgba(var(--highlight))",
              },
              "&.Mui-focused fieldset": {
                borderColor: "rgba(var(--highlight))",
              },
            },
          }}
        />
        <Button variant="contained" className="my-5">
          로그인
        </Button>

        <span>다른 방식으로 로그인</span>
        <KakaoLogin />
        <a onClick={redirect}>login with kakao</a>
        {/* <a href="/20194043">this is going to redirect to internal server</a> */}
      </section>
    </div>
  );
}

export default Login;
