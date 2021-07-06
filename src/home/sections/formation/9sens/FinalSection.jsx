import React from "react";
import {
  Grid,
  Icon,
  Box,
  Card,
  CardContent,
  CardActionArea,
} from "@material-ui/core";

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

  h1: {
    fontFamily: "LEMON MILK",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "20px",
    textAlign: "left",
  },

  card: {
    background: "#EBF0FF",
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
        <Grid container spacing={2} alignItems="center" justify="center">
          <Grid md={4} xs={12}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardContent>
                  <Box align="left">
                    <p className={classes.p}>
                      <h1 className={classes.h1}>
                        <Icon className={classes.icon}> check </Icon>
                        Déroulement de la formation:
                      </h1>
                      <p className={classes.p}>
                        Formation par petits groupes de 8 personnes.<br></br>
                        Plusieurs formations sont accessibles :
                      </p>
                      <p> En Initiale (3 mois) : </p>
                      <p className={classes.p}>
                        Attestation après 10 modules de
                        <strong>2h30 heures + 40 heures</strong> de pratique en
                        tant que Praticien en Relaxation "Relation et
                        Communication par les 9 sens"
                      </p>
                      Courte :
                      <p className={classes.p}>
                        Possibilité de choisir les modules qui vous intéressent.
                        <br></br>Une <strong>attestation</strong> vous sera
                        fournie après chaque module effectué.
                      </p>
                    </p>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid md={4} xs={12}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardContent>
                  <Box align="left">
                    <h1 className={classes.h1}>
                      <Icon className={classes.icon}> map-marker-alt </Icon>
                      Lieu de la formation:
                    </h1>

                    <p className={classes.p}>
                      Vous disposerez d'une salle aménagée à la relaxation avec
                      chromothérapie, musique apaisante, et également de quatre
                      tables de massage et matelas chauffants.
                    </p>

                    <hr />

                    <h1 className={classes.h1}>
                      <Icon className={classes.icon}> euro-sign </Icon> côut de
                      la formation:
                    </h1>

                    <p className={classes.p}>
                      Pour les 30 heures (hors promotion):
                    </p>

                    <p className={classes.p2}> 1 200€ </p>

                    <p className={classes.p}> Pour 1 module : </p>

                    <p className={classes.p2}> 160 € </p>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default FinalSection;
