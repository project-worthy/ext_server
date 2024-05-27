import { useRef, useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { TextFieldSx, TextFieldDigitSx } from "../../theme";
import { sleep } from "../../utils/time";
function DigitComponent({ active, setFull }) {
  const [code, setCode] = useState("");
  const [isCtrlDown, setCtrlDown] = useState(false);
  const inputRefs = Array.from({ length: 6 }, () => useRef());

  async function focus() {
    if (!active) return;
    await sleep(200);
    inputRefs[0].current.querySelector("input").focus();
  }
  useEffect(() => {
    focus();
  }, [active]);

  useEffect(() => {
    setFull(code.length === 6);
  }, [code]);

  function handleInput(e, index) {
    const input = e.target;
    const previousInput = inputRefs[index - 1]?.current?.querySelector("input");

    const nextInput = inputRefs[index + 1]?.current?.querySelector("input");

    const newCode = [...code];
    if (/^[a-z]+$/.test(input.value)) {
      const uc = input.value.toUpperCase();
      newCode[index] = uc;
      inputRefs[index].current.querySelector("input").value = uc;
    } else {
      newCode[index] = input.value;
    }
    setCode(newCode.join(""));

    input.select();

    if (input.value === "") {
      if (previousInput) {
        previousInput.focus();
      }
    } else if (nextInput) {
      nextInput.focus();
    }
  }
  const handlePaste = (e) => {
    const pastedCode = e.clipboardData.getData("text");
    if (pastedCode.length === 6) {
      setCode(pastedCode);
      inputRefs.forEach((inputRef, index) => {
        console.log(pastedCode.charAt(index));
        inputRef.current.querySelector("input").value =
          pastedCode.charAt(index);
      });
      inputRefs[5].current.querySelector("input").focus();
    }
  };

  function handleKeyUp(e) {
    if (e.keyCode === 17) setCtrlDown(false);
  }
  function handleKeyDown(e, index) {
    const input = e.target;
    const previousInput = inputRefs[index - 1]?.current?.querySelector("input");
    if (e.keyCode === 17) setCtrlDown(true);
    if (isCtrlDown && (e.keyCode === 8 || e.keyCode === 46)) {
      resetCode();
      return;
    }

    if ((e.keyCode === 8 || e.keyCode === 46) && input.value === "") {
      e.preventDefault();
      setCode(
        (prevCode) => prevCode.slice(0, index) + prevCode.slice(index + 1),
      );
      if (previousInput) {
        previousInput.focus();
      }
    }
  }
  const resetCode = () => {
    inputRefs.forEach((ref) => {
      ref.current.querySelector("input").value = "";
    });
    inputRefs[0].current.querySelector("input").focus();
    setCode("");
  };
  return (
    <div className="flex">
      {[0, 1, 2, 3, 4, 5].map((num) => (
        <TextField
          key={num}
          sx={{ ...TextFieldSx, ...TextFieldDigitSx }}
          className="w-[56px] text-center mx-2"
          onChange={(e) => handleInput(e, num)}
          ref={inputRefs[num]}
          autoFocus={num === 0 && active}
          type="text"
          onPaste={handlePaste}
          inputProps={{ maxLength: 1, tabIndex: "-1" }}
          onKeyDown={(e) => handleKeyDown(e, num)}
          onKeyUp={(e) => handleKeyUp(e)}
        />
      ))}
    </div>
  );
}

export default DigitComponent;
