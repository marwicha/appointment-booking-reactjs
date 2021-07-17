import React from "react";
import { Grid, Container } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  h1: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "26px",
    color: "#182731",
  },

  title: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    color: "#182731",
    textAlign: "left",
  },

  title2: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    color: "#182731",
    textAlign: "left",
    lineHeight: "22px",
  },

  imgShadow: {
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)",
    background: "#FFFFFF",
    padding: "2rem",
    maxWidth: 326,
    height: "7em",
    borderRadius: "0px 50px",
    margin: "auto",
  },
}));

const SixSection = () => {
  const programList = [
    {
      id: "1",
      title: "ACCUEIL EN VU D'UN LACHER PRISE",
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
          Programme
        </h1>

        <Grid container spacing={2} justify="space-between" alignItems="center">
          {programList.map((item) => (
            <Grid
              item
              md={3}
              xs={12}
              className={clsx(classes.imgShadow, "mt-5")}
            >
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
