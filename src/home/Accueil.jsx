import React from "react";
import IntroFinal from "./sections/IntroFinal";
import TopBar from "./sections/TopBar";
import AllServices from "./sections/AllServices";
import Massages from "./sections/Massages";
import Formations from "./sections/Formations";
import Somathoterapie from "./sections/Somathoterapie";
import Footer from "./sections/Footer";
import IntroPatrick from "./sections/IntroPatrick";

const Accueil = () => {
  return (
    <div className="landing">
      <TopBar />
      <IntroFinal />
      <IntroPatrick />
      <AllServices />
      <Somathoterapie />
      <Massages />
      <Formations />
      <Footer />
    </div>
  );
};

export default Accueil;
