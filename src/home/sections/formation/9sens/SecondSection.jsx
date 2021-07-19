import React from "react";
import { Grid, Button } from "@material-ui/core";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  wrapperAll: {
    flexWrap: "wrap",
    marginRight: "-1rem",
    marginLeft: "-1rem",
    paddingRight: "0",
    paddingLeft: "0",
    paddingTop: "7rem",
  },

  containerTextWrapper: {
    position: "relative",
    maxWidth: "97%",
    marginRight: "3%",
    justifyContent: "center",
  },

  textWrapper: {
    maxWidth: "60%",
    marginRight: "0",
    marginLeft: "auto",
    marginTop: "-6rem",
    padding: "0 2rem 2rem 2rem",

    [theme.breakpoints.down("xs")]: {
      maxWidth: "90%",
      marginRight: "0",
      marginLeft: "auto",
      padding: "2rem 2rem 2rem 2rem",
    },
  },

  h1: {
    fontFamily: "LEMON MILK Light",
    fontStyle: "normal",
    fontWeight: "400",
    color: "#182731",
    fontSize: "14px",
    lineHeight: "30px",
    marginTop: "1rem",
  },

  h2: {
    fontFamily: "LEMON MILK Light",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "30px",
    color: "#182731",
  },

  img: {
    minHeight: "36rem",
    position: "relative",
    maxWidth: "67%",
    borderRadius: 16,

    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
    },
  },

  p: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "1em",
    lineHeight: "30px",
    textAlign: "justify",
    maxWidth: 600,
  },

  pInfo: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "1em",
    textAlign: "left",
    maxWidth: 600,
    color: "#b72e02",
  },

  h4: {
    fontFamily: "LEMON MILK",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "30px",
    textAlign: "center",
    margin: "2rem 0 0 0",
  },

  button2: {
    marginTop: "1rem !important",
    padding: "1rem 1rem 1rem 1rem",
    fontSize: 12,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    borderRadius: "50px",
    alignItems: "center",
    textAlign: "center",
    background: "#FAFBFF !important",
    border: "3px solid #384C5A",
    boxSizing: "border-box",
    color: "#384C5A",
  },
}));

const SecondSection = () => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.container, "container")}>
      <h3 className="font-bold text-28 text-center text-second mt-10">IKDO®</h3>
      <h3 className={clsx(classes.h2, "text-center text-26 text-second")}>
        Formation
      </h3>

      <div className={classes.wrapperAll}>
        <Grid container spacing={0} alignItems="center">
          <Grid item md={6} xs={12}>
            <div className={classes.containerTextWrapper}>
              <div className={classes.textWrapper}>
                <h1 className={classes.h1}>
                  IKDO® EST AUSSI UN CENTRE DE FORMATIONS ET D'ATELIERS
                  D'INITIATIONS:
                </h1>

                <h3 className={classes.p}>
                  IKDO® est doté d’un centre de formation qui a pour but de vous
                  faire acquérir les notions de bases en toucher-massage®, et
                  sur les autres techniques associées aux autres sens tels que
                  la vue, l'utilisation des huiles essentielles et la
                  respiration (odorat), utilisation des bols chantants (ouïe) et
                  la méditation.
                </h3>

                <h2 className={classes.h1}>
                  Déplacement possible chez vous avec les équipements
                  nécessaires: Tables ou chaise de massage, musique relaxante,
                  huiles essentielles.
                </h2>

                <h3 className={classes.p}>
                  "Massages" non thérapeutiques, ne s'apparentant à aucune
                  pratique médicale ni paramédicale occidentale.
                </h3>

                <div className={classes.pInfo}>
                  La prise de rendez-vous des prestations de massages ce fait
                  sur le site, en créant un compte.
                  <br></br>
                  Pour s'inscrire à une formation professionnelle appelez le
                  numéro 07 86 99 59 40.
                </div>

                <h4 className={clsx(classes.h4, "text-center")}>
                  Prendre un rendez vous
                </h4>

                <div className="text-center">
                  <NavLink to="/inscription">
                    <Button
                      className={clsx(classes.button2, "text-center text-13")}
                    >
                      Réserver maintenant
                    </Button>
                  </NavLink>
                </div>
              </div>
            </div>
          </Grid>

          <Grid item md={5} xs={12}>
            <div className="mb-6 ml-1 relative">
              <img
                src="/assets/images/formations/9sens.png"
                className={clsx("w-full block", classes.img)}
                alt=""
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SecondSection;
