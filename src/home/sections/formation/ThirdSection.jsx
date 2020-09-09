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

    <div className="section">
    <div className="container-icon-formation text-center">
  
    <Grid container justify="flex-start">
   
      <Grid sm={3} md={3} xs={12}>
        <div className="pt-2">

        <h1 className="font-bold text-28 text-second p-2 mr-20" > Formation </h1>
        <h2 className={clsx(classes.h2, "font-normal text-24 text-second")}> Massage des 9 sens </h2>
        </div>
      </Grid>

      <Grid sm={3} md={3} xs={12}>
      </Grid>

      <Grid sm={4} md={4} xs={12}>
      <div className="pt-2">

      <h1 className="font-bold text-28 text-second"> Objectif </h1>


      <p className="font-normal text-16 text-second">
      Reconnecter les personnes à leurs 9 sens
      
      </p> 
      
      <p className="font-normal text-16 text-second"> par le biais de différentes techniques de toucher. </p>
      
      <p className="font-normal text-16 text-second"> Reconnexion entre le corps et l’esprit </p>
      
      </div>
    </Grid>
  
  </Grid>
  </div>
  </div>
 

  );
};

export default ThirdSection;
