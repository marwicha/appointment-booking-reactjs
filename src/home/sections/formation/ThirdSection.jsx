import React from "react";
import { Grid, Button } from "@material-ui/core";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  button: {
    marginTop: "2rem !important",
    padding: "1rem 2rem 1rem 2rem",
    fontSize: 15,
    fontFamily: theme.typography.fontFamily,
    backgroundColor: palette.second,
    color: "white",
    borderRadius: "100px"
  },

  h1: {
    fontFamily: "LEMON MILK",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "28px",
    lineHeight: "30px",
    alignItems: "center",
    textAlign: "justify"
  },

  h2: {
    fontFamily: "LEMON MILK Light",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "26px",
    lineHeight: "30px",
    alignItems: "center",
    textAlign: "justify"
  },

  benefice: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "18px",
    alignItems: "center",
    textAlign: "left",
    color: "#182731"
  },

  verticalLine: {
    borderLeft: "3px solid #182731",
    height: "170px",
    position: "absolute",
    left: "41%"
  },

  p: {
    fontFamily: "LEMON MILK",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "14px",
    lineHeight: "30px",
    alignItems: "center",
    textAlign: "justify",
    color: "#182731"

  }
}));

const ThirdSection = () => {

  const classes = useStyles();
  
  return (

    <div className="section">
    <div className="container-icon-formation text-center">
  
    <Grid container justify="flex-start">
   
      <Grid sm={3} md={3} xs={12}>
        <div className="p-7">

        <h1 className={clsx(classes.h1)}> Formation </h1>
        <h2 className={clsx(classes.h2)}> 9 SENS </h2>
      </div>

      </Grid>

      <Grid sm={2} md={2} xs={12}>

      <div className={clsx(classes.verticalLine, "mt-7")} > </div>

      </Grid>

      <Grid sm={5} md={5} xs={12}>
      <div className="pt-2">

      <p className={classes.benefice}> Les bénéfices </p>

      <p className={classes.p}>
    
      Les Bénefices Ikdo est doté d’un centre de formation qui a pour but de vous faire acquérir les notions de bases en toucher-massage®, 
      et sur les autres techniques associées aux autres sens tels que la vue,
      l'utilisation des huiles essentielles et la respiration (odorat), utilisation des bols chantants (ouïe).
      
      </p> 
      
      </div>
    </Grid>
  
  </Grid>
  </div>
  </div>
 

  );
};

export default ThirdSection;
