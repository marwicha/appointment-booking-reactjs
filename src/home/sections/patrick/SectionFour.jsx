import React from "react";
import { Grid, Container, Box, Card, CardActionArea, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
    container: {
      padding: "0 0 0 0",
      maxWidth: "1400px",
      margin: "0 auto",
      background: "black"
  },

  p: {
    fontFamily: "LEMON MILK",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "2vh",
    lineHeight: "40px",

  },

  box: {
    color: "white",
    alignItems: "center",
    textAlign: "center"
  }
}));

const SectionFour = () => {

  const classes = useStyles();

  return (
    <section className="section">
    
  <Container maxWidth="lg" className={classes.container} >

    <Box className={classes.box}>
      <p  className={classes.p}>

        A 60 ans je souhaite continuer à partager mes connaissances et transmettre mon savoir.

      </p> 
    </Box>
     
  </Container>

    </section>
  );
};

export default SectionFour;