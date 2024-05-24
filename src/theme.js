export const TextFieldSx = {
  "& input": {
    color: "rgba(var(--secondary))",
  },
  "& label": {
    color: "rgba(var(--secondary))",
  },
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
};

export const ButtonSx = {
  backgroundColor: "rgba(var(--highlight))",
  boxShadow: "none",
  "&:hover": {
    backgroundColor: "rgba(var(--highlight))",
  },
};
