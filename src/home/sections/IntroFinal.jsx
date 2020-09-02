import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Carousel from "../common/Carousel";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  introWrapper: {
    position: "relative",
    height: "100%",
    overflow: "hidden",
  },
text: {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
  },

p: {
  letterSpacing: "0.72px",
  lineHeight: "40px",
  textAlign: "center",
  fontSize: "22px",
  fontFamily: "LEMON MILK Light",
  maxWidth:"387px"
  },

  h1: {
    color: "#182731",
    fontSize: "40px",
    lineHeight: "64px",
    textAlign: "center"
  },

  h2: {
    color: "#182731",
    fontFamily: "LEMON MILK Light",
    fontSize: "30px",
    lineHeight: "40px",
    textAlign: "center"
  },

  button: {
  width: "200px",
  height: "60px",
  borderRadius: "100px",
  backgroundColor: "#182731",
  color: "white",
  fontSize: "1rem",
  fontFamily: "LEMON MILK Light",
  },

  center: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "1rem",
   }
}));

const IntroFinal = () => {
  const classes = useStyles();

  const ikdoList = [
    {
      img: "./assets/images/1.png",
      h1: "IKDO",
      h2: " By Zen Workshop",
      text: "Détentez vous et prenez votre temps",
      buttonText:"Massages"
    },
    {
      img: "./assets/images/2.png",
      h1: "IKDO",
      h2: " By Zen Workshop",
      text: "Plusieurs formations sont accessibles",
      buttonText:"Formations"
    },
    {
      img: "./assets/images/3.jpg",
      h1: "IKDO",
      h2: " By Zen Workshop",
      text: "Détentez vous et prenez votre temps",
      buttonText: "Somathotérapie"
    }
  ];

  return (
    <div className="section-intro">
    <div className={classes.introWrapper}>
      <div className="container">
        <Carousel
          carouselId="swiper-11"
          paginationClass="mt-16"
          slidesPerView={1}
        >
          {ikdoList.map((item, index) => (
          <div key={index}>
            
          <img className="h-full w-full" src={item.img} alt="" />
        
           <div className={clsx(classes.text)}>
                <h1 className={classes.h1}>
                {item.h1}
              </h1>
              <h2 className={classes.h2}>
              {item.h2}
              </h2>

              <p className={classes.p}>
              {item.text}
              </p>
              <div className={classes.center}>
              <button className={clsx(classes.button)}>
              {item.buttonText}
              </button>
              </div>

            </div>
            </div>
          ))}
        </Carousel>
      </div>
      </div>
    </div>
  );
};

export default IntroFinal;
