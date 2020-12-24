import React from "react";
import { Grid, Avatar, Button, Container, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({

  container: {
  position: "relative",
  textAlign: "center"
  },

  containerImg: {
    width: "100%",
    backgroundRepeat: 'no-repeat'
  },

  contentCenter: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  },

   contentLeft: {
    position: "absolute",
    top: "50%",
    left: "50%",
  },

  h1: {
    fontFamily: "LEMON MILK",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "26px",
    lineHeight: "21px",
    alignItems: "center",
    textAlign: "center",
    position: "absolute",
    bottom: "18%",
    left: "38%",
    color: "#384C5A"

  },

  h2: {
    fontFamily: "LEMON MILK Light",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "26px",
    lineHeight: "21px",
    alignItems: "center",
    textAlign: "center",
    position: "absolute",
    bottom: "18%",
    left: "49%",
    color: "#384C5A"
  },
  
  p: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "30px",
    textAlign: "left",
    padding: "1rem 1rem 1rem 1rem"
  }

}));

const IntroPatrick = () => {
  const classes = useStyles();

  return (
    <section className="section">

                <Container maxWidth="lg" className={classes.container}>

                 <img src="./assets/images/bgPatrick.png" alt="" className={classes.containerImg } />

               <Box className={classes.contentCenter}>
                <Avatar src="/assets/images/patrick.png"></Avatar>

                <span>
                <h1 className={classes.h1}> PATRICK </h1>
                
                <h1 className={classes.h2}> CAILLER </h1>

                </span>
                </Box>
                   <Box className={classes.contentLeft}>
                  <p className={classes.p}>

                  En 1997 j’ai vécu de l’intérieur ce qu’on appelle un burn-out, 
                  après un épuisement total physique et intellectuel j’avais du mal à cette époque à assumer mon corps. 
                  Je ressentais de l’aversion envers mon physique et ma personne ;
                  j’avais parallèlement des soucis d’addictions (tabac alcool) pour compenser mon mal être.
                  Pour sortir de ces problèmes j’ai du me faire accompagner par de nombreux thérapeutes..
                                   
                  </p>

                  <Button> En savoir plus</Button>
                  </Box>
                      
              
                  </Container>
    </section>
  );
};

export default IntroPatrick;
