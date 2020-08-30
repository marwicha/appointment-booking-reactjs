import React, { useEffect } from "react";
import { scrollTo } from "utils";
import Intro4 from "./sections/Intro4";
import Features4 from "./sections/Features4";
import ProductAnalytics from "./sections/ProductAnalytics";
import Feature5 from "./sections/Features5";
import Pricing2 from "./sections/Pricing2";
import Testimonial4 from "./sections/Testimonial4";
import CallToAction3 from "./sections/CallToAction3";

const Landing4 = () => {
  useEffect(() => {
    scrollTo("root");
  });

  return (
    <div className="landing">
      <Intro4 />
      <Features4 />
      <ProductAnalytics />
      <Feature5 />
      <Pricing2 />
      <Testimonial4 />
      <CallToAction3 />
    </div>
  );
};

export default Landing4;
