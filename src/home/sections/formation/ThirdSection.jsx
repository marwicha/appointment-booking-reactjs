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
  h2: {
    fontFamily: "LEMON MILK Light"
  }
}));

const ThirdSection = () => {

  const classes = useStyles();
  
  return (
  
    <div className="section-intro-formations">
    <div className="container-AllServices text-center">

    <Grid container spacing={2} justify="space-around" >
   
      <Grid sm={5} md={5} xs={12}>
        <div className="pt-10">

        <h1 className="font-bold text-24 text-second" > Formation </h1>
        <h2 className={clsx(classes.h2, "font-normal text-20 text-second")}> Massage des 9 sens </h2>
        </div>
      </Grid>

      <Grid sm={5} md={5} xs={12}>
      <div className="pt-10">

      <h1 className="font-bold text-24 text-second"> Objectif </h1>


      <p className="font-normal text-14 text-second">
      Reconnecter les personnes à leurs 9 sens
      
      </p> 
      
      <p className="font-normal text-14 text-second"> par le biais de différentes techniques de toucher. </p>
      
      <p className="font-normal text-14 text-second"> Reconnexion entre le corps et l’esprit </p>
      
      </div>
    </Grid>
  
  </Grid>
  </div>
  </div>
 

  );
};

export default ThirdSection;
