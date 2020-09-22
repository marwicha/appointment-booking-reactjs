import React, { useEffect } from "react";
import { scrollTo } from "utils";
import IntroFinal from "./sections/IntroFinal";
import TopBar from "./sections/TopBar";
import AllServices from "./sections/AllServices";
import Massages from "./sections/Massages";
import Formations from "./sections/Formations";
import Footer1 from "./sections/Footer1";
import Contact from "./sections/Contact";
import IntroPatrick from "./sections/IntroPatrick";

const Accueil = () => {
  useEffect(() => {
    scrollTo("root");
  });

  return (
    <div className="landing">
      <TopBar />
      <IntroFinal />
      <IntroPatrick />
      <AllServices />
      <Massages />
      <Formations />
      <Contact />
      <Footer1 />
    </div>
  );
};

export default Accueil;
