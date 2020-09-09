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
    fontFamily: "LEMON MILK Bold"
  },

  p: {
  fontFamily: "Lato Medium",
  fontSize: "20px",
  lineHeight: "24px",
  textAlign: "center"
  }
}));

const FiveSection = () => {

  const classes = useStyles();
  
  return (

    <div className="section">
    <div className="container-program-formation text-center p-18">
  
      <div container>

      <h1 className={clsx(classes.h2," text-white")}> Programme </h1>

      <p className={clsx(classes.p," text-white")}>
      Vous apprendrez les bases de différentes techniques de massage telles que le shiatsu, le massage californien, suédois et le massage aux pierres chaudes. 

      </p> 
      
      <h4 className={clsx(classes.h2,"text-white")}> Bon Moyen </h4>

      <p className={clsx(classes.p,"text-white")}>
       de découvrir cette méthode avant de vous engager dans cette formation est de profiter d'un soin au sein
      de notre institut.</p>
      

      </div>
  
  </div>
  </div>
 

  );
};

export default FiveSection;
