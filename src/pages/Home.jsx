// import { ReactComponent as WorthyLogo } from "../icons/logo.svg";
// import { Input, Button } from "antd";
import { ReactComponent as ArrowDown } from "../icons/arrowDown.svg";

import { useState } from "react";
import Fan from "../components/fan/Fan";
function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  return (
    <div
      className="w-full flex-1 justify-center cursor-none"
      onMouseMove={(e) => setMousePos({ x: e.clientY, y: e.clientX })}
    >
      <div
        className="fixed w-40 h-40 rounded-full -translate-x-1/2 -translate-y-1/2 grid justify-center content-center"
        style={{ top: `${mousePos.x}px`, left: `${mousePos.y}px` }}
      >
        <div className="bg-secondary w-3 h-3 rounded-full"></div>
      </div>

      <div className="h-full w-full overflow-y-auto no-scrollbar relative snap-y">
        <div className="h-full w-full grid justify-center content-center relative snap-start snap-proximity">
          <Fan className="my-3" power={true} />
          <span
            className="text-primary text-5xl"
            style={{ fontFamily: "UhBee" }}
          >
            가치있는 세상을 만들다.
          </span>
          <div className="absolute left-1/2 -translate-x-1/2 bottom-2">
            <ArrowDown width={40} height={50} className="fill-primary" />
          </div>
        </div>
        <div className="h-full w-full grid justify-center content-center snap-start">
          소개
        </div>
      </div>
    </div>
  );
}

export default Home;
