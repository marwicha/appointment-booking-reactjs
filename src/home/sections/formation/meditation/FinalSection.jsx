import React from "react";
import { Grid, Icon, Container } from "@material-ui/core";

import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  p: {
    fontFamily: "Lato",
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
    fontFamily: "Lato",
    fontStyle: "bold",
    fontWeight: "700",
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
          <Grid md={4} xs={12}>
            <h1 className={classes.h1}>
              <Icon className={classes.icon}> check </Icon> Déroulement de la
              formation:
            </h1>

            <p className={classes.p}>
              Une séance par semaine, avec des exercices quotidiens à pratiquer
              chez soi de 20 minutes. 12 personnes maximum
            </p>

            <p className={classes.p}>
              Des supports interactifs pour la pratique
              <br></br>
              Une instruction guidée par l’intervenant
              <br></br>
              Des exercices simples de méditation relaxinésie® stretch
              (étirements doux), conscience corporelle, Do in (auto massage).
              <br></br>
              Des temps de partages entre les participants
              <br></br>
              Des instructions pour la pratique au domicile
            </p>
          </Grid>

          <Grid md={4} xs={12}>
            <h1 className={classes.h1}>
              <Icon className={classes.icon}> map-marker-alt </Icon> Lieu de la
              formation:
            </h1>

            <p className={classes.p}> Texte à ajouter par Patrick </p>

            <hr />

            <h1 className={classes.h1}>
              <Icon className={classes.icon}> euro-sign </Icon> côut de la
              formation:
            </h1>

            <p className={classes.p}> Pour le prix (hors promotion): </p>

            <p className={classes.p}> 6 séances de 2h30 : </p>

            <p className={classes.p2}> 450 € </p>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default FinalSection;
