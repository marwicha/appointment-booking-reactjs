import React, { useEffect } from "react";
import { scrollTo } from "utils";
import SecondSection from "./sections/formation/Massages-9sens/SecondSection";
import ThirdSection from './sections/formation/Massages-9sens/ThirdSection';
import FourthSection from './sections/formation/Massages-9sens/FourthSection';
import FiveSection from './sections/formation/Massages-9sens/FiveSection';
import SixSection from './sections/formation/Massages-9sens/SixSection';

const IndexRoute = () => {

  useEffect(() => {
    scrollTo("root");
  });


  return (
    <div>
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FiveSection />
      <SixSection />
    </div>
  );
};

export default IndexRoute;
