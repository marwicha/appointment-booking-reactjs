import React from "react";

import Intro12 from "./sections/Intro12";
import Features12 from "./sections/Features12";
import IntroFinal from "./sections/IntroFinal"
import Services12 from "./sections/Services12";
import Services13 from "./sections/Services13";

const Landing12 = () => {
  return (
    <div className="landing">
      <Intro12 />
      <Services12 />
      <Features12 />
      <Services13 />
      <IntroFinal />
    </div>
  );
};

export default Landing12;
