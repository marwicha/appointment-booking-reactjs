import React from "react";
import { Grid, Box, Container } from "@material-ui/core";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  media: {
    width: "86%",
    height: "34em",
    marginBottom: "4em",
  },

  p: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "19px",
    textAlign: "justify",
  },

  title: {
    fontFamily: "LEMON MILK",
    fontStyle: "normal",
    fontWeight: "500",
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

const SecondSection = () => {
  const classes = useStyles();

  return (
    <section className="section">
      <Container maxWidth="lg">
        <Box textAlign="left">
          <h3 className={classes.title}>La Somatothérapie:</h3>
          <h4 className={classes.titleText}>est pour vous, si :</h4>
        </Box>
      </Container>

      <Container maxWidth="lg" className="container-formations">
        <Box pt={8} pb={10}>
          <Grid container spacing={5} justify="center" alignItems="center">
            <Grid item xs={12} md={8}>
              <Box display="flex" height="100%">
                <Box my="auto">
                  <p className={classes.p}>
                    vous êtes débordé(e), dépassé(e) par les évènements , vous
                    vous sentez à cran <br></br>
                    vous vous sentez inquiet(te) angoissé(e), exemple du COVID
                    19 <br></br>
                    vous avez souvent une boule dans la gorge, un creux à
                    l’estomac <br></br>
                    vous vous sentez hypersensible, facilement perturbé(e)
                    émotionnellement <br></br>
                    vos réactions vis à vis des autres sont exagérées ou
                    inadéquates <br></br>
                    vous prenez trop à cœur les critiques et les remarques{" "}
                    <br></br>
                    vous êtes souvent déçu(e), exaspéré(e) par les autres{" "}
                    <br></br>
                    vous manquez de confiance en vous ou vous l’avez perdue{" "}
                    <br></br>
                    vous hésitez à exprimer vos opinions, à dire non <br></br>
                    vous avez peur d’être manipulé(e) par les autres, qu’ils
                    profitent de vous <br></br>
                    vous vous sentez régulièrement triste sans raison précise{" "}
                    <br></br>
                    vous vous découragez devant les difficultés, vous vous
                    sentez abattu(e) <br></br>
                    vous n’avez plus de goût à ce que vous aimiez faire{" "}
                    <br></br>
                    vous avez de la retenue à exprimer vos sentiments <br></br>
                    vous doutez de vous, vous avez une image négative de vous
                    même <br></br>
                    vous rencontrez des difficultés dans vos relations sexuelles{" "}
                    <br></br>
                    vous vous sentez seul(e) et engager des relations vous
                    parait compliqué <br></br>
                    vous êtes sujet(te) au trac, à des appréhensions fortes, à
                    des peurs irraisonnées <br></br>
                    vous n’osez pas ou vous ne réussissez pas à exprimer votre
                    créativité <br></br>
                    vous souffrez de douleurs de dos, du cou, des articulations{" "}
                    <br></br>
                    vous souffrez de maux de tête ou de migraines <br></br>
                    vous rencontrez des difficultés de sommeil <br></br>
                    vous digérez mal et/ou avez des problèmes de transit
                    intestinal <br></br>
                    vous avez des difficultés à bien respirer, vous êtes
                    sujet(te) régulièrement à des rhumes / maux de gorge{" "}
                    <br></br>
                    vous vous sentez oppressé(e) <br></br>
                    vous vous sentez mal à l’aise, limité(e) dans votre posture
                    corporelle <br></br>
                    vous vous sentez raide, souvent tendu(e) <br></br>.
                  </p>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <img
                alt=""
                className={classes.media}
                src="/assets/images/coaching/somato2.png"
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default SecondSection;
