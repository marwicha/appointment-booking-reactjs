import React, { useEffect } from "react";
import { scrollTo } from "utils";
import SecondSection from "./SecondSection";
import ThirdSection from './ThirdSection';
import FourthSection from './FourthSection';

const IndexRouteMassage9sens = () => {

  useEffect(() => {
    scrollTo("root");
    });

  return (
    <div>
      <SecondSection />
     
    </div>
  );
};

export default IndexRouteMassage9sens;
