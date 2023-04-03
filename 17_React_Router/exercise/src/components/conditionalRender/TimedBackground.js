import React, { useState, useEffect } from "react";
import morningBG from "../../assets/images/morning.jpg";
import afternoonBG from "../../assets/images/afternoon.jpg";
import eveningBG from "../../assets/images/evening.jpg";
import nightBG from "../../assets/images/night.jpg";


const TimedBackground = (props) => {
  const [backgroundImg, setBackgroundImg] = useState("");

  useEffect(() => {
    const date = new Date();
    const hour = date.getHours();

    if (hour >= 5 && hour < 12) {
      // morning (5am to 12pm)
      setBackgroundImg(morningBG);
    } else if (hour >= 12 && hour < 18) {
      // afternoon (12pm to 6pm)
      setBackgroundImg(afternoonBG);
    } else if (hour >= 18 && hour < 22) {
      // evening (6pm to 10pm)
      setBackgroundImg(eveningBG);
    } else {
      // night (10pm to 5am)
      setBackgroundImg(nightBG);
    }
  }, []);

  return (
    <div
      style={{
        background: `url(${backgroundImg}) center center / cover no-repeat fixed`,
        height: "500px",
        color: "whitesmoke",
      }}
    >
      <h3>{props.content}</h3>
      {backgroundImg}
    </div>
  );
};

export default TimedBackground;
