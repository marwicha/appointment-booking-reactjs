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
    fontWeight: "400",
    fontSize: "1em",
    lineHeight: "30px",
    textAlign: "justify",
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
                La méditation de pleine conscience permet à être plus conscient
                de ses sensations corporelles, de ses émotions, de ses
                sentiments et de ses pensées, savoir détecter ses pensées
                automatiques et ses ruminations invasives afin de mieux les
                canaliser
                <br></br>
                Accepter et accueillir les évènements de la vie telle qu'ils se
                présentent tout en ayant le meilleur recul possible, apprécier
                chaque instant que l'on vit dans toute son intensité et être en
                contact avec soi-même.
                <br></br>
                Reconnaître ses pensées et croyances limitantes (non souhaitées)
                et voir comment y remédier, savoir prendre du recul et lâcher
                prise par rapport aux stimuli quotidiens de l'environnement.
                Adapter de nouvelles réponses, plus efficaces et en meilleures
                corrélations face aux situations de stress.
                <br></br>
                Participation à l'hébergement chez moi à Cormont: 20 à 25 euros
                par nuit et par personne en fonction de la taille du groupe.
                Chacun peut amener sa nourriture, c'est plus simple, possibilité
                de cuisiner ensemble selon ses envies.
              </p>
              <br></br>
            </div>
          </Grid>

          <Grid item md={1} xs={12}></Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ThirdSection;
