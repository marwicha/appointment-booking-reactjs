import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Carousel from "../common/Carousel";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  introWrapper: {
    position: "relative",
    height: "100%",
    overflow: "hidden",
  },

  text: {
    paddingBottom: "2rem",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    "@media screen and (max-width: 767px)": {
      top: "66%",
    },
  },

  p: {
    textAlign: "center",
    fontSize: "15px",
    fontFamily: "LEMON MILK Light",
    maxWidth: "400px",
    "@media screen and (max-width: 767px)": {
      fontSize: "10px",
    },
  },

  h1: {
    color: palette.second,
    fontSize: "30px",
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
    marginTop: "1rem",
    width: "200px",
    height: "60px",
    borderRadius: "100px",
    //backgroundColor: "#182731",
    background: palette.second,
    color: "white",
    fontSize: "1rem",
    fontFamily: "LEMON MILK Light",
    "@media screen and (max-width: 767px)": {
      width: "120px",
      height: "30px",
      fontSize: "10px",
      marginTop: "0rem",
    },
  },

  center: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "1rem",
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
        <div className="container">
          <Carousel
            carouselId="swiper-11"
            paginationClass="mt-16"
            slidesPerView={1}
          >
            {ikdoList.map((item, index) => (
              <div key={index}>
                <img
                  className="h-full w-full"
                  src={item.img}
                  alt=""
                />

                <div className={clsx(classes.text)}>
                  <h1 className={classes.h1}>{item.h1}</h1>

                  <h2 className={classes.h2}>{item.h2}</h2>
                  <br></br>
                  <p className={classes.p}>{item.text}</p>
                  <br></br>
                  <div className={classes.center}>
                    <NavLink to={item.navLink}>
                      <button className={clsx(classes.button)}>
                        {item.buttonText}
                      </button>
                    </NavLink>
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
