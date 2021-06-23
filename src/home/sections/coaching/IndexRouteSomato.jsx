import React, { useEffect } from "react";

import FirstSection from "./somato/FirstSection";
import SecondSection from "./somato/SecondSection";
import ThirdSection from "./somato/ThirdSection";
import FourSection from "./somato/FourSection";
import FiveSection from "./somato/FiveSection";

const IndexRouteSomato = () => {
  return (
    <div className="landing">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourSection />
      <FiveSection />
    </div>
  );
};

export default IndexRouteSomato;
