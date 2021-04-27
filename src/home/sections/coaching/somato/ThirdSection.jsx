import React from "react";
import { Grid, Container } from "@material-ui/core";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  h2: {
    fontFamily: "LEMON MILK Light",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "20px",
    alignItems: "center",
    textAlign: "justify",
  },

  benefice: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "18px",
    alignItems: "center",
    textAlign: "left",
    color: "#182731",
  },

  verticalLine: {
    borderLeft: "3px solid",
    paddingLeft: "20px",
  },

  p: {
    fontFamily: "LEMON MILK",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "12px",
    lineHeight: "30px",
    alignItems: "center",
    textAlign: "justify",
    color: "#182731",
  },
}));

const ThirdSection = () => {
  const classes = useStyles();

  return (
    <section className="section">
      <Container maxWidth="lg" className="container-icon-formation text-center">
        <Grid container spacing={4}>
          <Grid md={5} xs={12}>
            <div className="pt-8">
              <h4 className={clsx(classes.h2)}>
                {" "}
                Comment se passent les séances?{" "}
              </h4>
            </div>
          </Grid>

          <Grid md={7} xs={12}>
            <div className={classes.verticalLine}>
              <p className={classes.p}>
                Les séances de somatothérapie se déroulent en moyenne entre{" "}
                <strong>4 à 6 séances</strong>.<br></br>
                Dès la première séance le cadre est fixé avec le praticien. Vous
                vous engagez sur un double objectif (un mieux-être dans votre
                corps et dans votre vie).
                <br></br>A partir de vos symptômes physiques et votre situation
                de vie, le praticien vous apporte une aide individualisée.
                <br></br>
                Celle-ci associant les techniques de{" "}
                <strong>toucher-massage</strong> et les outils d’aide au
                changement de vie.
              </p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default ThirdSection;
