import React from "react";
import { Grid, Avatar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({

  center: {
   justifyContent: "center",
   alignItems: "center",
   height: "127px",
   position: "relative",
   top: "0",
   left: "0",
   background: "#FAFBFF",
   margin: "0 auto",
  textAlign: "center"
  },

  avatar: {
    position: "absolute",
    bottom: "60%",
    left: "40%",
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
  
  p :{
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "30px",
    textAlign: "left"
  },

  bg: {
    background: "url('./assets/images/bgPatrick.png')",
    maxWidth: "100%",
    borderRadius: 16,
    //transform: "matrix(-1, 0, 0, 1, 0, 0)"
  },

  button: {
    margin: "1rem 1rem 0 0 !important",
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
                <div className={clsx( classes.center , "text-center" )}>

                  <Avatar
                    src="/assets/images/patrick.png"
                    className={clsx ("h-160 w-160", classes.avatar)}
                  ></Avatar>

                  <h1 className={classes.h1}> PATRICK </h1>
                  
                  <h1 className={classes.h2}> CAILLER </h1>
            
                </div>

                <Grid container spacing={0} justify="space-around" alignItems="flex-start">
                <div className={classes.bg}>
                  <Grid lg={5} md={5} sm={5} xs={12}>
                   
                  <p className={clsx( classes.p)}>

                  En 1997 j’ai vécu de l’intérieur ce qu’on appelle un burn-out, 
                  après un épuisement total physique et intellectuel j’avais du mal à cette époque à assumer mon corps. 
                  Je ressentais de l’aversion envers mon physique et ma personne ;
                  j’avais parallèlement des soucis d’addictions (tabac alcool) pour compenser mon mal être.
                  Pour sortir de ces problèmes j’ai du me faire accompagner par de nombreux thérapeutes.

                  Dans ces années là,  alors que j’étais perdu entre ma carrière dans la restauration (manager),
                  et une ambition de changer de métier et l’envie tout simplement de vivre !
                  j’ai découvert le yoga, la méditation et les massages bien-être.
                  
                  J’ai commencé petit à petit à faire quelques mouvements de yoga, à respirer,
                  
                                         
                  </p>

                  <Button className={classes.button}> En savoir plus</Button>
                      
                  </Grid>

                  </div>


              </Grid>
               
      </div>
    </section>
  );
};

export default IntroPatrick;
