export const REGISTERFORM = {
  textLength: (start, end) =>
    `비밀번호의 길이는 ${start} 보다 커${end === undefined ? `고 and shorter than ${end}` : "야 합니다."}`,
  ruleViolate: (rule) => `${REGISTERTEXT[rule]}가 포함되어야합니다.`,
  banWord: "해당 단어는 사용할 수 없습니다.",
  noSequential: "연속된 단어는 사용할 수 없습니다.",
  noMatchPassword: "비밀번호가 일치하지 않습니다.",
};

const REGISTERTEXT = {
  lower: "소문자",
  upper: "대문자",
  alpha: "대/소문자",
  numeric: "숫자",
  special: "특수 문자",
};
