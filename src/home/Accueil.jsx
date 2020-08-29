import React, { useEffect } from "react";
import { scrollTo } from "utils";
import IntroFinal from "./sections/IntroFinal";
import TopBar from "./sections/TopBar";
import Services8 from "./sections/Services8";
import Massages from "./sections/Massages";
import Formations from "./sections/Formations";
import Footer1 from "./sections/Footer1";
import Contact2 from "./sections/Contact2";

const Accueil = () => {
  useEffect(() => {
    scrollTo("root");
  });

  return (
    <div className="landing">
      <TopBar />
      <IntroFinal />
      <Services8 />
      <Massages />
      <Formations />
      <Contact2 />
      <Footer1 />
    </div>
  );
};

export default Accueil;
