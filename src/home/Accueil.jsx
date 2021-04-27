import React, { useEffect } from "react";
import { scrollTo } from "utils";
import IntroFinal from "./sections/IntroFinal";
import TopBar from "./sections/TopBar";
import AllServices from "./sections/AllServices";
import Massages from "./sections/Massages";
import Formations from "./sections/Formations";
import Somathoterapie from "./sections/Somathoterapie";
import Coaching from "./sections/Coaching";
import Footer from "./sections/Footer";
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
      <Somathoterapie />
      <Massages />
      <Coaching />
      <Formations />
      <Footer />
    </div>
  );
};

export default Accueil;
