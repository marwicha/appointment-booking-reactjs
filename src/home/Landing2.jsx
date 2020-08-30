import React, { useEffect } from "react";
import { scrollTo } from "utils";
import Portfolio2 from "./sections/Portfolio2";
import Testimonial2 from "./sections/Testimonial2";
import Services2 from "./sections/Services2";
import CallToAction1 from "./sections/CallToAction1";
import Pricing1 from "./sections/Pricing1";
import Footer1 from "./sections/Footer1";

const Landing2 = () => {
  useEffect(() => {
    scrollTo("root");
  }, [scrollTo]);

  return (
    <div className="landing">
      <Portfolio2 />
      <Testimonial2 />
      <Services2 />
      <CallToAction1 bg="./assets/images/home-bg-black.png" />
      <Pricing1 />
      <Footer1 />
    </div>
  );
};

export default Landing2;
