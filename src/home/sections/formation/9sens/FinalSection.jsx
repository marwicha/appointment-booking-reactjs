import React from "react";
import { Grid, Icon } from "@material-ui/core";

import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  button: {
    marginTop: "2rem !important",
    padding: "1rem 2rem 1rem 2rem",
    fontSize: 15,
    fontFamily: theme.typography.fontFamily,
    backgroundColor: palette.second,
    color: "white",
    borderRadius: "100px",
  },

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

  h1RQ: {
    fontFamily: "LEMON MILK",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "20px",
    textAlign: "left",
    color: "#FFFFFF",
  },

  firstGrid: {
    background: "#EBF0FF",
    padding: "3rem",
    paddingTop: "34px",
  },

  thirdGrid: {
    background: "#FF6150",
    padding: "4rem",
    height: "35em",
  },

  icon: {
    fontSize: "35px",
    marginBottom: "-8px",
  },
}));

const FinalSection = () => {
  const classes = useStyles();

  return (
    <div className="section">
      <div className="container-final-formation text-center p-12">
        <Grid
          lg={12}
          xl={12}
          sm={12}
          md={12}
          xs={12}
          container
          spacing={0}
          alignItems="center"
          justify="center"
        >
          <Grid lg={4} xl={4} sm={4} md={4} xs={12}>
            <div className={classes.firstGrid}>
              <h1 className={classes.h1}>
                {" "}
                <Icon className={classes.icon}> check </Icon> Déroulement de la
                formation:{" "}
              </h1>
              <p className={classes.p}>
                Formation par petits groupes de 8 personnes. Plusieurs
                formations sont accessibles :
              </p>
              <p> En Initiale (3 mois) : </p>
              <p className={classes.p}>
                {" "}
                Attestation après 10 modules de 2h30 heures + 40 heures de
                pratique en tant que Praticien en Relaxation "Relation et
                Communication par les 9 sens ®"
              </p>
              Courte :
              <p className={classes.p}>
                Possibilité de choisir les modules qui vous intéressent. Une
                attestation vous sera fournie après chaque module effectué.
                Entretien préalable pour les inscriptions et le démarrage de la
                formation
              </p>
            </div>
          </Grid>

          <Grid lg={4} xl={4} sm={4} md={4} xs={12}>
            <div className={classes.firstGrid}>
              <h1 className={classes.h1}>
                {" "}
                <Icon className={classes.icon}> map-marker-alt </Icon> Lieu de
                la formation:{" "}
              </h1>

              <p className={classes.p}>
                Vous disposerez d'une salle aménagée à la relaxation avec
                chromothérapie, musique apaisante, et également de quatre tables
                de massage et matelas chauffants.
              </p>

              <hr />

              <h1 className={classes.h1}>
                {" "}
                <Icon className={classes.icon}> euro-sign </Icon> côut de la
                formation:{" "}
              </h1>

              <p className={classes.p}>
                {" "}
                Pour les 30 heures (hors promotion):{" "}
              </p>

              <p className={classes.p2}> 1 200€ </p>

              <p className={classes.p}> Pour 1 module : </p>

              <p className={classes.p2}> 160 € </p>
            </div>
          </Grid>

          <Grid lg={4} xl={4} sm={4} md={4} xs={12}>
            <div className={classes.thirdGrid}>
              <h1 className={classes.h1RQ}>
                {" "}
                <Icon className={classes.icon}> exclamation-circle </Icon>{" "}
                Remarques{" "}
              </h1>

              <span className={classes.aaaa}>
                <br></br>
                Les techniques prodiguées sont dans une éthique de bon sens,
                loin de tout endoctrinement.
                <br></br>
                <br></br>
                Il s’agit d’un savoir être avec beaucoup de tact, et de
                communication par un toucher juste et progressif.
                <br></br>
                <br></br>
                <br></br>
                Aucun lien avec la pratique de la kinésithérapie ni de soins
                médicaux occidentaux et ne remplace aucunement la visite chez le
                médecin.
              </span>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default FinalSection;
