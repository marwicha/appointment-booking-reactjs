import React from "react";
import { Grid, Box, Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  media: {
    width: "85%",
    height: "385px",
  },

  p: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: "22px",
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

  titleText: {
    fontFamily: "LEMON MILK light",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "1em",
    color: "#384C5A",
  },

  title2: {
    fontFamily: "LEMON MILK",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "1.5em",
    color: "#384C5A",
    marginTop: "3em",
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
            spacing={2}
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
                    {" "}
                    Une séance de coaching avec patrick caillier{" "}
                  </h3>

                  <p className={classes.p}>
                    Vous désirez vous fixer de nouveaux objectifs, ou faire le
                    point dans votre vie. Patrick Caillier spécialisé entre
                    autre dans l’accompagnement est là pour vous aider à
                    retrouver du sens dans vos projets..
                  </p>

                  <h3 className={classes.title2}>
                    {" "}
                    N’attendez plus pour bénéficier de cette séance !
                  </h3>

                  <Button className={classes.btn}> Réserver ici</Button>
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
