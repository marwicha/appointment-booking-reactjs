import React from "react";
import FirstSection from "./coach/FirstSection";
import FiveSection from "./coach/FiveSection";
import FourSection from "./coach/FourSection";
import SecondSection from "./coach/SecondSection";
import ThirdSection from "./coach/ThirdSection";

const IndexRouteCoaching = () => {
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

export default IndexRouteCoaching;
