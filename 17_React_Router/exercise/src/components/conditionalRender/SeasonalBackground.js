import React, { useState, useEffect } from "react";
import backgroundSpring from "../../assets/images/spring.jpg";
import backgroundSummer from "../../assets/images/summer.jpg";
import backgroundFall from "../../assets/images/fall.jpg";
import backgroundWinter from "../../assets/images/winter.jpg";

function SeasonalBackground(props) {
  const [backgroundImg, setBackgroundImg] = useState("");

  useEffect(() => {
    const date = new Date();
    const month = date.getMonth() + 1;

    if (month >= 3 && month <= 5) {
      // March, April, May
      setBackgroundImg(backgroundSpring);
    } else if (month >= 6 && month <= 8) {
      // June, July, August
      setBackgroundImg(backgroundSummer);
    } else if (month >= 9 && month <= 11) {
      // September, October, November
      setBackgroundImg(backgroundFall);
    } else {
      // December, January, February
      setBackgroundImg(backgroundWinter);
    }
  }, []);

  return (
    <div
      style={{
        background: `url(${backgroundImg}) center center / cover no-repeat fixed`,
        height: "500px",
      }}
    >
      <h3>{props.content}</h3>
      {backgroundImg}
    </div>
  );
}

export default SeasonalBackground;
