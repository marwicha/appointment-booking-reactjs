import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Carousel from "../common/Carousel";
import { NavLink } from "react-router-dom";
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
    transform: "translate(-50%, -50%)",
    "@media screen and (min-width: 767px)": {
      top: "53%",
    },
  },

  p: {
    textAlign: "center",
    fontSize: "18px",
    fontFamily: "LEMON MILK Light",
    maxWidth: "400px",
    "@media screen and (max-width: 767px)": {
      fontSize: "10px",
    },
  },

  h1: {
    color: palette.second,
    fontSize: "32px",
    textAlign: "center",
    "@media screen and (max-width: 767px)": {
      fontSize: "12px",
    },
  },

  h2: {
    color: palette.second,
    fontFamily: "LEMON MILK Light",
    fontSize: "20px",
    textAlign: "center",
    "@media screen and (max-width: 767px)": {
      fontSize: "12px",
    },
  },

  button: {
    marginTop: "1em",
    width: "200px",
    height: "60px",
    borderRadius: "100px",
    background: palette.second,
    color: "white",
    fontSize: "1rem",
    fontFamily: "LEMON MILK Light",
    "@media screen and (max-width: 767px)": {
      width: "120px",
      height: "20px",
      fontSize: "9px"
    },
  },

  center: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
  },
}));

const IntroFinal = () => {
  const classes = useStyles();

  const ikdoList = [
    {
      img: "./assets/images/1.png",
      h1: "IKDO®",
      h2: " par Zen Workshop depuis 2006",
      text: "Il est grand temps de renouer le contact humain ",
      buttonText: "Praticien",
      navLink: "/praticien",
    },
    {
      img: "./assets/images/2.png",
      h1: "IKDO®",
      h2: " par Zen Workshop depuis 2006",
      text: "Atelier à Cormont adapté à la situation Covid",
      buttonText: "Formations",
      navLink: "/formations",
    },
    {
      img: "./assets/images/3.jpg",
      h1: "IKDO®",
      h2: " par Zen Workshop depuis 2006",
      text: "Un plaisir de partager savoir-faire et savoir être ",
      buttonText: "Somatothérapie",
      navLink: "/somatotherapie",
    },
  ];

  return (
    <div className="section-intro">
      <div className={classes.introWrapper}>
        <Carousel
          carouselId="swiper-11"
          paginationClass="mt-10"
          slidesPerView={1}
        >
          {ikdoList.map((item, index) => (
            <div key={index}>
              <img className="h-full w-full" src={item.img} alt="" />

              <div className={clsx(classes.text)}>
                <h1 className={classes.h1}>{item.h1}</h1>

                <h2 className={classes.h2}>{item.h2}</h2>

                <p className={classes.p}>{item.text}</p>

                <NavLink to={item.navLink} className={classes.center}>
                  <button className={clsx(classes.button)}>
                    {item.buttonText}
                  </button>
                </NavLink>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default IntroFinal;
