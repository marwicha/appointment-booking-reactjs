import React, { useEffect } from "react";
import { scrollTo } from "utils";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import FithSection from "./FithSection";
import SixSection from "./SixSection";
import FinalSection from "./FinalSection";

const IndexRouteMassage9sens = () => {
  useEffect(() => {
    scrollTo("root");
  });

  return (
    <div>
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FithSection />
      <SixSection />
      <FinalSection />
    </div>
  );
};

export default IndexRouteMassage9sens;
