import React from "react";
import { Grid, Box, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  media: {
    height: "320px",
    width: "70%",
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
  },

  titleText: {
    fontFamily: "LEMON MILK light",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "1em",
    color: "#384C5A",
  },
}));

const FirstSection = () => {
  const classes = useStyles();

  return (
    <section className="section">
      <Container maxWidth="lg">
        <Box textAlign="center">
          <h3 className="font-bold text-28 text-center text-second mt-5 mb-10">
            SOMATOTHERAPIE
          </h3>
        </Box>
      </Container>

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
                src="/assets/images/coaching/somato.png"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" height="100%">
                <Box my="auto">
                  <h3 className={classes.title}> La somatothérapie: </h3>

                  <h4 className={classes.titleText}> qu’est ce que c’est? </h4>

                  <p className={classes.p}>
                    Le praticien prend en compte vos ressentis corporels et
                    permet de replacer votre corps au centre de votre attention.
                    <br></br>
                    Cette approche vous invite à entrer en contact avec ce que
                    vous ressentez, avec votre vécu corporel et intérieur de la
                    situation que vous vivez.
                    <br></br>
                    Accompagné par le praticien, vous découvrez comment cette
                    situation vous affecte, comment elle vous touche
                    intérieurement.
                    <br></br>
                    La traversée de ce ressenti modifie la perception que vous
                    avez de vous-même, des autres et de la situation et vous
                    découvrez de nouvelles possibilités d’être, de vous
                    positionner et de réagir.
                    <br></br>
                    Cette médiation corporelle n’est pas un traitement mais un
                    accompagnement pour votre mieux être.
                    <br></br>
                    Ces séances permettent de dénouer des blocages émotionnels,
                    sources de souffrances d’ordre psychosomatique.
                  </p>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default FirstSection;
