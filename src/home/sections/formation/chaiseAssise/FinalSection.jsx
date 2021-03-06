import React from "react";
import { Grid, Icon, Container } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  p: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "19px",
    color: "#384C5A",
    margin: "auto",
    textAlign: "left",
    maxWidth: "70%",
    padding: "1rem",
  },

  p2: {
    fontFamily: "Roboto",
    fontStyle: "bold",
    fontWeight: "500",
    fontSize: "22px",
    lineHeight: "19px",
    color: "#384C5A",
    margin: "auto",
    textAlign: "left",
    maxWidth: "70%",
    padding: "1.1rem",
  },

  aaaa: {
    fontFamily: "Lato",
    fontStyle: "bold",
    fontWeight: "700",
    fontSize: "16px",
    lineHeight: "19px",
    textAlign: "left",
    maxWidth: "100%",
    marginBottom: "2em",
    color: "#FFFFFF",
  },

  h1: {
    fontFamily: "LEMON MILK",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "20px",
    textAlign: "left",
  },

  firstGrid: {
    background: "#EBF0FF",
    padding: "2rem",
    paddingTop: "34px",
  },

  icon: {
    fontSize: "35px",
    marginBottom: "-8px",
  },
}));

const FinalSection = () => {
  const classes = useStyles();

  return (
    <section className="section">
      <Container maxWidth="lg" className={classes.firstGrid}>
        <Grid container spacing={2} alignItems="center" justify="center">
          <Grid item md={5} xs={12}>
            <h1 className={classes.h1}>
              <Icon className={classes.icon}> check </Icon>
              Déroulement de la formation:
            </h1>
            <p> Format 2 jours: 4 séances de 3h30min de 9h á 17h </p>
            <p className={classes.p}>
              Possibilité de déjeuner ensemble sur place mise á disposition des
              locaux en toute convivialité
            </p>
          </Grid>

          <Grid item md={5} xs={12}>
            <h1 className={classes.h1}>
              <Icon className={classes.icon}> map-marker-alt </Icon>
              Lieu de la formation:
            </h1>

            <p className={classes.p}>...</p>

            <hr />

            <h1 className={classes.h1}>
              <Icon className={classes.icon}> euro-sign </Icon> côut de la
              formation:
            </h1>

            <p className={classes.p}> Pour le prix (hors promotion): </p>

            <p className={classes.p2}> 450€ </p>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default FinalSection;
