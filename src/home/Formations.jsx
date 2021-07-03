import React, { useState } from "react";
import TopBar from "../home/sections/TopBar";
import IndexRoute9sens from "./sections/formation/9sens/IndexRoute9sens";
import IndexRouteMeditation from "./sections/formation/meditation/IndexRouteMeditation";
import IndexRouteChaiseAssise from "./sections/formation/chaiseAssise/IndexRouteChaiseAssise";
import Footer from "./sections/Footer";

import { Grid, Button } from "@material-ui/core";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  button: {
    marginTop: "1rem !important",
    padding: "1rem 2rem 1rem 2rem",
    background: `${palette.second} !important`,
    color: "white",
    fontFamily: "LEMON MILK",
    fontStyle: "normal",
    fontWeight: "300",
    borderRadius: "50px",
    alignItems: "center",
    textAlign: "center",
    fontSize: 11,
  },

  containerTabs: {
    background: "#EBF0FF",
    paddingTop: "1rem",
    margin: "0 auto",
  },

  h1: {
    fontFamily: "LEMON MILK",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "26px",
    alignItems: "center",
    textAlign: "center",
  },
}));

const Formation = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const classes = useStyles();
  const serviceList = [
    {
      title: "Massage des 9 sens",
    },
    {
      title: "Massage sur chaise assise",
    },
    {
      title: "Méditation pleine consciense",
    },
  ];

  return (
    <div className="landing">
      <TopBar />

      <div className="section-intro-formations">
        <div className="container-formation text-center">
          <h1 className={classes.h1}>Nos Formations</h1>

          <p className="pb-8"> Choisir votre formation </p>

          <div className={clsx(classes.containerTabs)}>
            <Grid container spacing={6} justify="center">
              {serviceList.map((item, index) => (
                <Grid key={index} item sm={3} md={3} xs={12}>
                  <div className="text-center">
                    <Button
                      className={classes.button}
                      onClick={() => setTabIndex(index)}
                    >
                      {item.title}
                    </Button>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </div>

      {tabIndex === 0 && <IndexRoute9sens />}

      {tabIndex === 1 && <IndexRouteChaiseAssise />}

      {tabIndex === 2 && <IndexRouteMeditation />}

      <Footer />
    </div>
  );
};

export default Formation;
