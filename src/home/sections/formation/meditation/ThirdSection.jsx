import React from "react";
import { Grid } from "@material-ui/core";
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
    fontWeight: "500",
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
              <h2 className={clsx(classes.h2)}>Méditation Pleine Consciense</h2>
            </div>
          </Grid>

          <Grid item md={5} xs={12}>
            <div className={classes.verticalLine}>
              <p className={classes.benefice}> Les bénéfices </p>

              <p className={classes.p}>
                La pleine conscience a le pouvoir de diminuer le stress, de nous
                recentrer sur l’essentiel, d’augmenter notre créativité et notre
                enthousiasme à entreprendre, d’améliorer nos relations avec les
                autres et surtout, de nous permettre de vivre un quotidien plus
                serein.
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
