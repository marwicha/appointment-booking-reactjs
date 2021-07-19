import React from "react";
import { Grid } from "@material-ui/core";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  h1: {
    fontFamily: "LEMON MILK",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "24px",
    marginBottom: "20px",
    alignItems: "center",
    textAlign: "justify",
  },

  h2: {
    fontFamily: "LEMON MILK Light",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "22px",
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
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "1em",
    lineHeight: "30px",
    color: "white",
    textAlign: "left",
  },
}));

const ThirdSection = () => {
  const classes = useStyles();

  return (
    <div className="section">
      <div className="container-icon-formation text-center">
        <Grid container>
          <Grid item md={1} xs={12}></Grid>

          <Grid item md={5} xs={12}>
            <div className="pt-8">
              <h1 className={clsx(classes.h1)}> Formation </h1>
              <h2 className={clsx(classes.h2)}> Massage Des 9 SENS </h2>
            </div>
          </Grid>

          <Grid item md={5} xs={12}>
            <div className={classes.verticalLine}>
              <p className={classes.benefice}> Les bénéfices </p>

              <p className={classes.p}>
                À travers un programme riche, IKDO vous offre un apprentissage
                complet sur les notions de base en massage des 9 sens® ainsi que
                diverses techniques associées au sens et leur stimulation. Vous
                apprendrez à exploiter différents outils et supports tels que
                l'utilisation des bols chantants et des huiles essentielles ou
                encore l'importance de la respiration.
                <br></br> Pour plus d'informations vous trouverez ci-dessous les
                modules traités lors de chaque session ainsi que le déroulement
                de la formation massages 9 sens.
                <br></br>
              </p>
            </div>
          </Grid>

          <Grid item md={1} xs={12}></Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ThirdSection;
