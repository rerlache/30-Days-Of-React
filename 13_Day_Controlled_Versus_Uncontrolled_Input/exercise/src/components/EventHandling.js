import { useState } from "react";
import CustomButton from "./customs/Button";

function EventHandling() {
  const [divXPos, setDivXPos] = useState("50px");
  const [divYPos, setDivYPos] = useState("50px");
  const [isJumpingBoxActive, setIsJumpingBoxActive] = useState(false);
  const [activateButtonText, setActivateButtonText] = useState("Show bigbox");

  function handleMouseEnter() {
    setDivXPos(randomNumberInRange(0, 500) + "px");
    setDivYPos(randomNumberInRange(0, 500) + "px");
  }

  function handleActivateJumpingBox() {
    setIsJumpingBoxActive(!isJumpingBoxActive);
    setActivateButtonText(isJumpingBoxActive ? "Show bigbox" : "Hide bigbox");
  }

  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  console.log("box active? " + isJumpingBoxActive);
  console.log(activateButtonText);
  return (
    <div>
      <CustomButton
        doThis={handleActivateJumpingBox}
        text={activateButtonText}
      />
      <div className={isJumpingBoxActive ? "bigbox" : "hidden"}>
        <div
          className="jumpingbox"
          onMouseEnter={handleMouseEnter}
          style={{ position: "relative", left: divXPos, top: divYPos }}
        >
          You just can't get me!
        </div>
      </div>
    </div>
  );
}

export default EventHandling;
