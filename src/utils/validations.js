import { REGISTERFORM } from "./constant";
import axios from "axios";
var validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export const validateEmail = (email) => {
  return email.match(validRegex);
};

/*
 Password Validator 0.1
 (c) 2007 Steven Levithan 
 MIT License
*/

export function validatePassword(pw, options) {
  // default options (allows any password)
  var o = {
    lower: 0,
    upper: 0,
    alpha: 0 /* lower + upper */,
    numeric: 0,
    special: 0,
    length: [0, Infinity],
    custom: [
      /* regexes and/or functions */
    ],
    badWords: [],
    badSequenceLength: 0,
    noQwertySequences: false,
    noSequential: false,
  };

  for (var property in options) o[property] = options[property];

  var re = {
      lower: /[a-z]/g,
      upper: /[A-Z]/g,
      alpha: /[A-Z]/gi,
      numeric: /[0-9]/g,
      special: /[\W_]/g,
    },
    rule,
    i;

  // enforce min/max length
  if (pw.length < o.length[0] || pw.length > o.length[1])
    return {
      state: false,
      helperText: REGISTERFORM.textLength(o.length[0], o.length[1]),
    };

  // enforce lower/upper/alpha/numeric/special rules
  for (rule in re) {
    if ((pw.match(re[rule]) || []).length < o[rule])
      return { state: false, helperText: REGISTERFORM.ruleViolate(rule) };
  }

  // enforce word ban (case insensitive)
  for (i = 0; i < o.badWords.length; i++) {
    if (pw.toLowerCase().indexOf(o.badWords[i].toLowerCase()) > -1)
      return { state: false, helperText: REGISTERFORM.banWord };
  }

  // enforce the no sequential, identical characters rule
  if (o.noSequential && /([\S\s])\1/.test(pw))
    return { state: false, helperText: REGISTERFORM.banWord };

  // enforce alphanumeric/qwerty sequence ban rules
  if (o.badSequenceLength) {
    var lower = "abcdefghijklmnopqrstuvwxyz",
      upper = lower.toUpperCase(),
      numbers = "0123456789",
      qwerty = "qwertyuiopasdfghjklzxcvbnm",
      start = o.badSequenceLength - 1,
      seq = "_" + pw.slice(0, start);
    for (i = start; i < pw.length; i++) {
      seq = seq.slice(1) + pw.charAt(i);
      if (
        lower.indexOf(seq) > -1 ||
        upper.indexOf(seq) > -1 ||
        numbers.indexOf(seq) > -1 ||
        (o.noQwertySequences && qwerty.indexOf(seq) > -1)
      ) {
        return { state: false, helperText: REGISTERFORM.noSequential };
      }
    }
  }

  // enforce custom regex/function rules
  for (i = 0; i < o.custom.length; i++) {
    rule = o.custom[i];
    if (rule instanceof RegExp) {
      if (!rule.test(pw)) return false;
    } else if (rule instanceof Function) {
      if (!rule(pw)) return false;
    }
  }

  // great success!
  return { state: true };
}

export function validatePasswordWithArg(password) {
  const ops = {
    length: [8, Infinity],
    lower: 1,
    upper: 1,
    numeric: 1,
    special: 1,
    badWords: ["password", "steven", "levithan"],
    badSequenceLength: 4,
  };

  return validatePassword(password, ops);
}

// TODO: this is not going to be in client
export function sendValidateEmail(email, name = "") {
  const subject = "가치있게 이메일 인증 코드 발급";
  const message = "code: 1234";
  const data = JSON.stringify({
    Messages: [
      {
        From: { Email: "noreply@worthy.com", Name: "project-worthy" },
        To: [{ Email: email, Name: name }],
        Subject: subject,
        TextPart: message,
      },
    ],
  });

  const config = {
    method: "post",
    url: "https://api.mailjet.com/v3.1/send",
    data: data,
    headers: { "Content-Type": "application/json" },
    auth: { username: "<API Key>", password: "<Secret Key>" },
  };

  return axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}
