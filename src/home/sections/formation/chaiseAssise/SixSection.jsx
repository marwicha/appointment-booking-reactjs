import React from "react";
import { Grid, Container } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  h1: {
    fontFamily: "LEMON MILK",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "26px",
    color: "#182731",
  },

  title: {
    fontFamily: "LEMON MILK",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    color: "#182731",
    textAlign: "left",
  },

  title2: {
    fontFamily: "LEMON MILK Light",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    color: "#182731",
    textAlign: "left",
    lineHeight: "22px",
  },

  description: {
    fontFamily: "LEMON MILK Light",
    fontStyle: "normal",
    fontWeight: "500",
    height: "50%",
    fontSize: "10px",
    color: "#182731",
  },

  imgShadow: {
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)",
    borderRadius: "30px 0px",
    background: "#FFFFFF",
    padding: "1rem",
    maxWidth: "73%",
  },
}));

const SixSection = () => {
  const programList = [
    {
      id: "1",
      title: "ACCUEIL EN VU D’UN LACHER PRISE",
    },

    {
      id: "2",
      title: "AMENER LA DETENTE EN PROFONDEUR",
    },

    {
      id: "3",
      title: "FOURNIR UNE NOUVELLE TONICITE, QUITTER LA PERSONNE",
    },
  ];

  const classes = useStyles();

  return (
    <section className="section">
      <Container maxWidth="lg">
        <h1 className={clsx(classes.h1, "text-center mt-5 mb-12")}>
          {" "}
          Programme{" "}
        </h1>

        <Grid
          md={12}
          xs={12}
          container
          justify="space-between"
          alignItems="center"
        >
          {programList.map((item) => (
            <Grid md={3} xs={12} className={clsx(classes.imgShadow, "mt-5")}>
              <h1 className={classes.title}> {item.id}</h1>

              <h4 className={classes.title2}>{item.title}</h4>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default SixSection;
