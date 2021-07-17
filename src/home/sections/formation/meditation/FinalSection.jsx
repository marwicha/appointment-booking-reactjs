import React from "react";
import {
  Grid,
  Icon,
  Container,
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
    maxWidth: "100%",
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
    maxWidth: "100%",
    padding: "1rem",
  },

  h1: {
    fontFamily: "LEMON MILK",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
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
    <section className="section">
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center" justify="center">
          <Grid item md={5} xs={12}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardContent>
                  <Box align="left">
                    <h1 className={classes.h1}>
                      <Icon className={classes.icon}> check </Icon> Déroulement
                      de la formation:
                    </h1>

                    <p className={classes.p}>
                      Une séance par semaine, avec des exercices quotidiens à
                      pratiquer chez soi de 20 minutes. 12 personnes maximum
                    </p>

                    <p className={classes.p}>
                      Des supports interactifs pour la pratique
                      <br></br>
                      Une instruction guidée par l’intervenant
                      <br></br>
                      Des exercices simples de méditation relaxinésie® stretch
                      (étirements doux), conscience corporelle, Do in (auto
                      massage).
                      <br></br>
                      Des temps de partages entre les participants
                      <br></br>
                      Des instructions pour la pratique au domicile
                    </p>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item md={5} xs={12}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardContent>
                  <Box align="left">
                    <h1 className={classes.h1}>
                      <Icon className={classes.icon}> map-marker-alt </Icon>{" "}
                      Lieu de la formation:
                    </h1>

                    <p className={classes.p}> Texte à ajouter par Patrick </p>

                    <hr />

                    <h1 className={classes.h1}>
                      <Icon className={classes.icon}> euro-sign </Icon> côut de
                      la formation:
                    </h1>

                    <p className={classes.p}>Pour le prix (hors promotion):</p>

                    <p className={classes.p}> 6 séances de 2h30 : </p>

                    <p className={classes.p2}> 450 € </p>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default FinalSection;
