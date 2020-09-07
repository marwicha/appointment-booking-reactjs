import React, { useEffect } from "react";
import { scrollTo } from "utils";
import TopBar from "../home/sections/TopBar";
import FirstSection from "./sections/formation/FirstSection";
import SecondSection from "./sections/formation/SecondSection";
import ThirdSection from './sections/formation/ThirdSection';
import Footer1 from "./sections/Footer1";
import FourthSection from './sections/formation/FourthSection'

const Formation = () => {
  useEffect(() => {
    scrollTo("root");
  });

  return (
    <div className="landing">
      <TopBar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Footer1 />
    </div>
  );
};

export default Formation;
