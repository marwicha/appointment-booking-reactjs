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
}));

const Benefices = () => {
  const classes = useStyles();

  return (
    <section className="section">
      <Container maxWidth="md">
        <Box pt={8} pb={10} textAlign="center">
          <Box mb={6}>
            <Typography variant="h5" component="h5" gutterBottom={true}>
              lES EFFETS
            </Typography>
          </Box>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardHeader
                  subheader="Effets psychologiques"
                  className={classes.cardHeader}
                ></CardHeader>
                <CardContent>
                  <Box pt={2} pb={1} px={1} align="left">
                    <Typography
                      variant="body1"
                      component="p"
                      gutterBottom={true}
                    >
                      1 Redonne estime et confiance en soi
                    </Typography>

                    <br></br>

                    <Typography variant="body1" component="p">
                      2 La conscience corporelle
                    </Typography>
                    <br></br>

                    <Typography variant="body1" component="p" color="primary">
                      3 Le rapport avec soi et autrui
                    </Typography>
                    <br></br>

                    <Typography variant="body1" component="p">
                      4 L'épuisement professionnel
                    </Typography>
                    <br></br>

                    <Typography variant="body1" component="p">
                      5 Le handicap et la maladie
                    </Typography>
                    <br></br>

                    <Typography variant="body1" component="p">
                      6 L'accompagnement de fin de vie
                    </Typography>
                    <br></br>

                    <Typography variant="body1" component="p">
                      7 Libère la peur du contact
                    </Typography>
                    <br></br>
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
                    <Typography
                      variant="body1"
                      component="p"
                      gutterBottom={true}
                    >
                      1 LE BON DÉVELOPPEMENT DU BÉBÉ
                    </Typography>

                    <br></br>

                    <Typography variant="body1" component="p">
                      2 PSYCHO-CORPORELS
                    </Typography>
                    <br></br>

                    <Typography variant="body1" component="p" color="primary">
                      3 L’ACCOMPAGNEMENT DE FIN DE VIE
                    </Typography>
                    <br></br>

                    <Typography variant="body1" component="p">
                      4 LA RELATION AVEC SOI ET LES AUTRES
                    </Typography>
                    <br></br>

                    <Typography variant="body1" component="p">
                      5 L’ÉPUISEMENT PROFESSIONNEL
                    </Typography>
                    <br></br>

                    <Typography variant="body1" component="p">
                      6 STRESS QUOTIDIEN
                    </Typography>
                    <br></br>

                    <Typography variant="body1" component="p">
                      7 LE BON dÉVELOPPEMENT DU BÉBÉ
                    </Typography>
                    <br></br>
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
