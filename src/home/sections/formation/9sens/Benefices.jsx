import React from "react";
import {
  Grid,
  Container,
  Box,
  CardHeader,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  cardHeader: {
    backgroundColor: "#EBF0FF",
  },

  p: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "1em",
    lineHeight: "30px",
    textAlign: "left",
    maxWidth: 500,
  },
}));

const Benefices = () => {
  const classes = useStyles();

  return (
    <section className="section">
      <Container maxWidth="md">
        <Box pt={8} pb={10} textAlign="center">
          <Box mb={6}>
            <Typography variant="h5" component="h5" gutterBottom={true}>
              LES EFFETS
            </Typography>
          </Box>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardHeader subheader="Effets psychologiques"></CardHeader>
                <CardContent>
                  <Box pt={2} pb={1} px={1} align="left">
                    <p className={classes.p}>
                      1 REDONNE ESTIME ET CONFIANCE EN SOI
                    </p>

                    <p className={classes.p}>
                      2 LA COSCIENCE CORPORELLE La conscience corporelle
                    </p>

                    <p className={classes.p}>3 LE RAPPORT AVEC SOI ET AUTRUI</p>

                    <p className={classes.p}>4 L'ÉPUISEMENT PROFESSIONNEL</p>

                    <p className={classes.p}>5 LE HANDICAP ET LA MALADIE </p>

                    <p className={classes.p}>
                      6 L'ACCOMPAGNEMENT DE LA FIN DE VIE
                    </p>

                    <p className={classes.p}>7 LIBERE LA PEUR DU CONTACT</p>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardHeader
                  subheader="Effets physiologiques"
                  className={classes.cardHeader}
                ></CardHeader>
                <CardContent>
                  <Box pt={2} pb={1} px={1} align="left">
                    <p className={classes.p}>1 LE BON DÉVELOPPEMENT DU BÉBÉ</p>

                    <p className={classes.p}>2 PSYCHO-CORPORELS</p>

                    <p className={classes.p}>
                      3 L'ACCOMPAGNEMENT DE FIN DE VIE
                    </p>

                    <p className={classes.p}>
                      4 LA RELATION AVEC SOI ET LES AUTRES
                    </p>

                    <p className={classes.p}>5 L'ÉPUISEMENT PROFESSIONNEL</p>

                    <p className={classes.p}>6 STRESS QUOTIDIEN</p>

                    <p className={classes.p}>7 LE BON dÉVELOPPEMENT DU BÉBÉ</p>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default Benefices;
