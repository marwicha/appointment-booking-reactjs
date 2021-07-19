import React, { useState } from "react";
import TopBar from "./sections/TopBar";

import IndexRouteCoaching from "./sections/coaching/IndexRouteCoaching";
import IndexRouteSomato from "./sections/coaching/IndexRouteSomato";
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

const CoachingSomatho = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const classes = useStyles();
  const serviceList = [
    {
      title: "Séance individuelle de somatothérapie.",
    },
    {
      title: "Séance collective de coaching.",
    },
  ];

  return (
    <div className="landing">
      <TopBar />

      <div className="section-intro-formations">
        <div className="container-formation text-center">
          <h1 className={classes.h1}>Séance de Coaching</h1>

          <p className="pb-8"> Choisir votre type d'accompagnement </p>

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

      {tabIndex === 0 && <IndexRouteSomato />}

      {tabIndex === 1 && <IndexRouteCoaching />}

      <Footer />
    </div>
  );
};

export default CoachingSomatho;
