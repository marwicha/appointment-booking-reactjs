import React, { useEffect } from "react";
import { scrollTo } from "utils";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import FithSection from "./FithSection";
import FinalSection from "./FinalSection";

const IndexRouteMeditation = () => {
  useEffect(() => {
    scrollTo("root");
  });

  return (
    <div>
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FithSection />
      <FinalSection />
    </div>
  );
};

export default IndexRouteMeditation;
