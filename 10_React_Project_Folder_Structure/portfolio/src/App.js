import React from "react";
import { useState } from "react";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import AppContent from "./components/AppContent";

function App() {
  const [appBackground, setAppBackground] = useState("smokewhite");
  function backgroundHandler() {
    const newBG = appBackground === "smokewhite" ? "darkgray" : "smokewhite";
    console.log(newBG);
    setAppBackground(newBG);
  }
  return (
    <div style={{ backgroundColor: appBackground }}>
      <AppHeader />
      <AppContent />
      <AppFooter />
    </div>
  );
}

//<button onClick={backgroundHandler}>change BG</button>
export default App;
