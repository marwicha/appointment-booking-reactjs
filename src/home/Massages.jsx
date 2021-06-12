import React, { useEffect } from "react";
import { scrollTo } from "utils";
import TopBar from "./sections/TopBar";

import IndexRouteMassage9sens from "./sections/massages/9sens/IndexRouteMassage9sens";

import IndexRouteMassageChaise from "./sections/massages/chaiseAssise/IndexRouteMassageChaise";

import Footer from "./sections/Footer";

import { useState } from "react";
import { Grid, Button } from "@material-ui/core";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  button: {
    marginTop: "1rem !important",
    padding: "1rem 2rem 1rem 2rem",
    background: palette.second,
    color: "white",
    fontFamily: "LEMON MILK",
    fontStyle: "normal",
    fontWeight: "300",
    borderRadius: "50px",
    alignItems: "center",
    textAlign: "center",
    fontSize: "14px",
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

  useEffect(() => {
    scrollTo("root");
  });

  const classes = useStyles();
  const serviceList = [
    {
      title: "Massage des 9 sens",
    },
    {
      title: "Massage sur chaise assise",
    },
  ];

  return (
    <div className="landing">
      <TopBar />

      <div className="section-intro-formations">
        <div className="container-formation text-center">
          <h1 className={classes.h1}> Nos prestations de massages</h1>

          <p className="pb-8"> Choisir votre Massage </p>

          <div className={clsx(classes.containerTabs)}>
            <Grid container spacing={6} justify="center">
              {serviceList.map((item, index) => (
                <Grid key={index} item sm={4} md={4} xs={12}>
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

      {tabIndex === 0 && <IndexRouteMassage9sens />}

      {tabIndex === 1 && <IndexRouteMassageChaise />}

      <Footer />
    </div>
  );
};

export default Formation;
