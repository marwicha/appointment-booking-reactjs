import React, { useEffect } from "react";
import { scrollTo } from "utils";
import SecondSection from "./SecondSection";
import ThirdSection from './ThirdSection';
import FourthSection from './FourthSection';
import FithSection from './FithSection';
import SixSection from './SixSection';

const IndexRoute = () => {

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
    </div>
  );
};

export default IndexRoute;
