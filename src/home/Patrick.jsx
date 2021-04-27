import React, { useEffect } from "react";
import { scrollTo } from "utils";
import TopBar from "./sections/TopBar";
import Footer from "./sections/Footer";

import SectionThree from "./sections/patrick/SectionThree";
import SectionTwo from "./sections/patrick/SectionTwo";
import SectionOne from "./sections/patrick/SectionOne";
import SectionFour from "./sections/patrick/SectionFour";

const Patrick = () => {
  useEffect(() => {
    scrollTo("root");
  });

  return (
    <div className="landing">
      <TopBar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />

      <Footer />
    </div>
  );
};

export default Patrick;
