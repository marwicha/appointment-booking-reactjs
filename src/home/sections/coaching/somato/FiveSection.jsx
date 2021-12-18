import React from "react";
import { Grid, Box, Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
const useStyles = makeStyles(({ palette, ...theme }) => ({
  media: {
    width: "85%",
    height: "385px",
  },

  p: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "1em",
    lineHeight: "25px",
    textAlign: "justify",
  },

  title: {
    fontFamily: "LEMON MILK",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "1.5em",
    color: "#384C5A",
    marginBottom: "3em",
  },

  btn: {
    color: "white",
    backgroundColor: "#4b9fbc",
    marginTop: "2em",
  },
}));

const FiveSection = () => {
  const classes = useStyles();

  return (
    <section className="section">
      <Container maxWidth="lg" className="container-formations">
        <Box pt={8} pb={10}>
          <Grid
            container
            spacing={0}
            textAlign="center"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12} md={4}>
              <img
                alt=""
                className={classes.media}
                src="/assets/images/coaching/somato3.png"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" height="100%">
                <Box my="auto">
                  <h3 className={classes.title}>
                    Une séance de somatothérapie avec patrick caillier
                  </h3>

                  <p className={classes.p}>
                    Patrick vous accueille avec attention à chaque séance de
                    somatothérapie afin de lever vos blocages émotionnels.
                    <br></br>
                    Par cette relation d'aide par l'écoute et le toucher, il
                    relit efficacement votre corps et votre esprit..
                  </p>

                  <h3 className={classes.title}>
                    N'attendez plus pour bénéficier de cette séance !
                  </h3>
                  <a href="https://www.resalib.fr/">
                    <Button className={classes.btn}> Réserver ici</Button>
                  </a>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default FiveSection;
