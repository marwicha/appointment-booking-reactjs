import React, { useEffect } from "react";
import { scrollTo } from "utils";
import Testimonial5 from "./sections/Testimonial5";
import Intro5 from "./sections/Intro5";
import About1 from "./sections/About1";
import Gallery1 from "./sections/Gallery1";
import WorkProcess1 from "./sections/WorkProcess1";
import Blog1 from "./sections/Blog1";
import Contact2 from "./sections/Contact";

const Landing5 = () => {
  useEffect(() => {
    scrollTo("root");
  });

  return (
    <div className="landing">
      <Intro5 />
      <About1 />
      <Gallery1 />
      <WorkProcess1 />
      <Testimonial5 />
      <Blog1 />
      <Contact2 />
    </div>
  );
};

export default Landing5;
