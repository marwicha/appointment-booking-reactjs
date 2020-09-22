import React from "react";
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

  p: {
  fontFamily: "Lato Medium",
  fontSize: "20px",
  lineHeight: "24px",
  color: "#384C5A",
  width: "50%",
  margin: "auto"
  },

  title: {
    color: "#384C5A",
    width: "50%",
    margin: "auto"
  }
}));

const FithSection = () => {

  const classes = useStyles();
  
  return (

    <div className="section">
    <div className="container-program-formation text-center p-12">
  
      <div container>

      <h4 className={classes.title}> Bon Moyen </h4>

      <p className={clsx(classes.p, "mt-6")}>
      Vous apprendrez les bases de différentes techniques de massage telles que le shiatsu, le massage californien, suédois et le massage aux pierres chaudes. 

      </p> 

      <p className={clsx(classes.p, "mt-6")}>
      De découvrir cette méthode avant de vous engager dans cette formation est de profiter d'un soin au sein
      de notre institut.</p>

      <img src="./assets/images/formations/Polygon.png" className="mt-10" alt=""/>

      </div>
  
  </div>
  </div>
 

  );
};

export default FithSection;
