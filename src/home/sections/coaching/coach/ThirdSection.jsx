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

  verticalLine: {
    borderLeft: "3px solid",
    paddingLeft: "20px",
  },

  p: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "1.1em",
    lineHeight: "30px",
    textAlign: "justify",
  },
}));

const ThirdSection = () => {
  const classes = useStyles();

  return (
    <section className="section">
      <Container maxWidth="lg" className="container-icon-formation text-center">
        <Grid container spacing={4}>
          <Grid item md={5} xs={12}>
            <div className="pt-5">
              <h4 className={clsx(classes.h2)}>
                Comment se passent les séances?
              </h4>
            </div>
          </Grid>

          <Grid item md={7} xs={12}>
            <div className={classes.verticalLine}>
              <p className={classes.p}>
                6 jours, 6 étapes pour transformer votre vie, rallumer votre
                étincelle, pour enfin oser être vous-même, oser votre vibration
                unique.
                <br></br>
                Stage de 4 à 6 personnes maximum.
                <br></br>
                Programme du dimanche 17h à samedi 17h.
                <br></br>
                Tarif unique et exceptionnel de 700 € au lieu de 1100 €.
                <br></br>
                Participation à l'hébergement chez moi à Cormont: 20 à 25 euros
                par nuit et par personne en fonction de la taille du groupe.
                <br></br>
                Chacun peut amener sa nourriture, c'est plus simple, possibilité
                de cuisiner ensemble selon ses envies.
              </p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default ThirdSection;
