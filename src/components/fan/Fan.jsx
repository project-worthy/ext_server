import { useEffect, useState, useRef } from "react";
import { Winds, Fans } from "./loadSvg";
import cs from "../../utils/class";

function Fan({ className, power }) {
  const [count, setCount] = useState(0);
  const [fanSize, setFanSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
      if (count > 4) setCount(0);
    }, 300);
  }, [count]);

  const fans = useRef();
  useEffect(() => {
    const width = fans.current.children[0].scrollWidth;
    const height = fans.current.children[0].scrollHeight;
    setFanSize({ width, height });
  }, []);
  function indexHandler(index) {
    return (index + 6) % 6;
  }
  return (
    <div className={cs.join("flex", "justify-center", className)}>
      <div className="h-[100px] w-[100px] grid grid-rows-3">
        {power &&
          [0, 1, 2].map((val) => (
            <div key={`wind-${val}`} className="relative">
              {Winds.map((Element, index) => (
                <div
                  key={"wind-animate-" + index}
                  className={` absolute wind-${indexHandler(index - val)}`}
                  style={{
                    opacity: indexHandler(index - val) == count ? 1 : 0,
                  }}
                >
                  <Element className="stroke-primary" />
                </div>
              ))}
            </div>
          ))}
      </div>
      <div
        className={"relative"}
        ref={fans}
        style={{ height: fanSize.height, width: fanSize.width }}
      >
        {Fans.map((Element, index) => {
          return (
            <Element
              key={index}
              className={`absolute fan-${index} stroke-primary`}
              style={{
                opacity: indexHandler(index) == count % 2 ? 1 : 0,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Fan;
