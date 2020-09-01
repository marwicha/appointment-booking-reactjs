import React, { useEffect } from "react";
import { scrollTo } from "utils";
import TopBar from "../home/sections/TopBar";
import FirstSection from "./sections/formation/FirstSection";
import SecondSection from "./sections/formation/SecondSection";
import Footer1 from "./sections/Footer1";

const Formation = () => {
  useEffect(() => {
    scrollTo("root");
  });

  return (
    <div className="landing">
      <TopBar />
      <FirstSection />
      <SecondSection />
      <Footer1 />
    </div>
  );
};

export default Formation;
