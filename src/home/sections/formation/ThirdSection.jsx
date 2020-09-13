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
fontSize: "22px",
lineHeight: "30px",
alignItems: "center",
textAlign: "justify"
  },

  h2: {
    fontFamily: "LEMON MILK Light"
  },

  verticalLine: {
    borderLeft: "3px solid #182731",
    height: "178px",
    position: "absolute",
    left: "43%",
  },

  p: {
    fontFamily: "LEMON MILK",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "22px",
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
        <div className="pt-2">

        <h1 className={clsx(classes.h1, "p-2 mr-20")} > Formation </h1>
        <h2 className={clsx(classes.h2, "font-normal text-24 text-second")}> Massage des 9 sens </h2>
        </div>

      </Grid>

      <Grid sm={3} md={3} xs={12}>

      <div className={classes.verticalLine} > </div>

      </Grid>

      <Grid sm={4} md={4} xs={12}>
      <div className="pt-2">

      <h1 className={classes.h1}> Les bénéfices </h1>

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
