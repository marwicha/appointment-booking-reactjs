import React from "react";
import { Grid, Avatar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({

  center: {
   justifyContent: "center",
   alignItems: "center",
   height: "127px",
   width: "1164px",
   position: "relative",
   top: "0",
   left: "0",
   margin: "0 auto",
  textAlign: "center"
  },

  avatar: {
    position: "absolute",
    bottom: "54%",
    left: "44%",
    border: "2px solid #394d5b"
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
  },

  bg: {
    backgroundImage: "url('./assets/images/bgPatrick.png')",
    borderRadius: 16,
     width: "100%",
    backgroundRepeat: "no-repeat",
    height: "460px",
    backgroundSize: "contain",
    border: `1px solid ${palette.third}`
  },

  button: {
    margin: "0 1rem 1rem 0 !important",
    padding: "1rem 2rem 1rem 2rem",
    fontSize: 10,
    background: `${palette.second} !important`,
    color: "white",
    fontFamily: "LEMON MILK",
    fontStyle: "normal",
    fontWeight: 300,
    borderRadius: "50px",
    alignItems: "center",
    textAlign: "center"
},

}));

const IntroPatrick = () => {
  const classes = useStyles();

  return (
    <section className= "section">

      <div className="container-intro-patrick text-center">

                <div className={classes.bg}>

                <div className={clsx( classes.center , "text-center" )}>

                <Avatar
                  src="/assets/images/patrick.png"
                  className={clsx ("h-140 w-140", classes.avatar)}
                ></Avatar>

                <span>
                <h1 className={classes.h1}> PATRICK </h1>
                
                <h1 className={classes.h2}> CAILLER </h1>

                </span>
          
              </div>

                  <Grid container lg={5} md={5} sm={5} xs={12} justify="center" alignItems="center">
                   
                  <p className={classes.p}>

                  En 1997 j’ai vécu de l’intérieur ce qu’on appelle un burn-out, 
                  après un épuisement total physique et intellectuel j’avais du mal à cette époque à assumer mon corps. 
                  Je ressentais de l’aversion envers mon physique et ma personne ;
                  j’avais parallèlement des soucis d’addictions (tabac alcool) pour compenser mon mal être.
                  Pour sortir de ces problèmes j’ai du me faire accompagner par de nombreux thérapeutes..
                  
                                         
                  </p>

                  <Button className={classes.button}> En savoir plus</Button>
                      
                  </Grid>

                  </div>

      </div>
    </section>
  );
};

export default IntroPatrick;
