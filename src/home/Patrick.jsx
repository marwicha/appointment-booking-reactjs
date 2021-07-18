import React, { useState, useEffect } from "react";
import TopBar from "./sections/TopBar";
import Footer from "./sections/Footer";

import SectionThree from "./sections/patrick/SectionThree";
import SectionTwo from "./sections/patrick/SectionTwo";
import SectionOne from "./sections/patrick/SectionOne";
import SectionFour from "./sections/patrick/SectionFour";

const Patrick = () => {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);
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
