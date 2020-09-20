import React from "react";
import { Grid, Button } from "@material-ui/core";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, ...theme }) => ({

  wrapperAll: {
    flexWrap: "wrap",
    marginRight: "-1rem",
    marginLeft: "-1rem",
    paddingRight: "0",
    paddingLeft: "0",
    paddingTop: "7rem"
  },

  containerTextWrapper: {
    position: "relative",
    flex: "0 0 41.6666666667%",
    maxWidth: "97%",
    marginRight: "3%",
    flexDirection: "column",
    justifyContent: "center",
    //padding: "7.5rem 5.625rem 7.5rem 0"
  },

  textWrapper: {
    maxWidth: "60%",
    marginRight: "0",
    marginLeft: "auto", 
  },

  h1: {
    fontFamily: "LEMON MILK",
    fontStyle: "normal",
    fontWeight: "500",
    color: "#182731",
    fontSize: "22px",
    lineHeight: "30px"
  },

  h2: {
    fontFamily: "LEMON MILK Light",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "30px",
    color: "#182731",
  },


  h22: {
    fontFamily: "LEMON MILK Light",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "30px",
    color: "#182731",
    marginTop: "2rem"
  },

  button: {
      margin: "2rem 1rem 0 0 !important",
      padding: "1rem 2rem 1rem 2rem",
      fontSize: 11,
      backgroundColor: palette.second,
      color: "white",
      fontFamily: "LEMON MILK",
      fontStyle: "normal",
      fontWeight: 300,
      borderRadius: "50px",
      alignItems: "center",
      textAlign: "center",

  },

  button2: {
    marginTop: "2rem !important",
    padding: "1rem 2rem 1rem 2rem",
    fontSize: 11,
    fontFamily: "LEMON MILK",
    fontStyle: "normal",
    fontWeight: 300,
    borderRadius: "50px",
    alignItems: "center",
    textAlign: "center",
    background: "#FAFBFF",
    border: "3px solid #384C5A",
    boxSizing: "border-box",
    color: "#384C5A"
},

 
  icon: {
    marginLeft: "34rem",
    marginTop: "2rem",
    justifyContent: "center", 
    position: "absolute"
  },

  img: {
    minHeight: "36rem",
     position: "relative",
     width: "100%",
     flex: "0 0 50%",
     maxWidth: "81%",
     borderRadius: 16,
  },

  p: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "22px",
    alignItems: "center",
    color: "#182731",
    marginTop: "2rem",
  },

  h4: {
    fontFamily: "LEMON MILK",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "22px",
    lineHeight: "30px",
    alignItems: "center",
    textAlign: "center",
    marginTop: "2rem"
  }
}));

const SecondSection = () => {

  const classes = useStyles();
  
  return (
    <div className={clsx(classes.container, "container")}>
      
    <h3 className="font-bold text-28 text-center text-second mt-5">
      IKDO
    </h3>
    <h3 className={clsx(classes.h2, "text-center text-26 text-second")}>
      Formation
    </h3>

    <div className= {classes.wrapperAll}>

        <Grid container spacing={0} alignItems="center" >

            <Grid lg={6} xl={6} sm={6} md={6} xs={12}>

            <div className={classes.containerTextWrapper} >

            <div className={classes.textWrapper}>
             <h1 className={classes.h1}> IKDO EST AUSSI UN CENTRE DE FORMATIONS ET D'ATELIERS D'INITIATIONS: </h1>

             <h2 className={classes.h2}> Pour acquérir des notions en Toucher-Massage® Ikdo </h2>

              <h3 className={classes.p}>
               Ikdo est doté d’un centre de formation qui a pour but de vous faire acquérir les notions de bases en toucher-massage®,
               et sur les autres techniques associées aux autres sens tels que la vue, 
              l'utilisation des huiles essentielles et la respiration (odorat), utilisation des bols chantants (ouïe).
              
              </h3>
              
              <h2 className={classes.h22}>
              Déplacements possible chez vous avec les équipements nécessaires : Tables ou chaise de massage,
              musique relaxante, huiles essentielles... (*):

              </h2>

              <h3 className={classes.p}> "Massages" non thérapeutiques, ne s'apparentant à aucune pratique médicale ni paramédicale occidentale.
              </h3>

              <h4 className={clsx(classes.h4, "text-center")}> Prendre un rendez vous </h4>


              <div className="text-center">
              <Button className={clsx(classes.button, "text-center") } >
                  Réserver maintenant
              </Button>

              <Button className={ clsx(classes.button2, "text-center") } >
                  Massage 9 sens
              </Button>
              </div>

              </div>

              </div>
            </Grid>

            <Grid  sm={5} md={5} xs={12}>
              <div className="mb-6 ml-1 relative">
               <img src="/assets/images/formations/9sens.png"

               className={clsx("w-full block", classes.img)}
               alt="" />
              </div>
           
            </Grid>

        </Grid>
      </div>
      

      
  </div>
 

  );
};

export default SecondSection;
