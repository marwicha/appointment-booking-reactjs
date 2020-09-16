import React from "react";
import { Grid, Card } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({

  h1: {
    fontFamily: "LEMON MILK",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "26px",
    color: "#182731"
  },

  title: {
    fontFamily: "LEMON MILK",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "18px",
    color: "#182731"
  },

  description: {
    fontFamily: "LEMON MILK Light",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "10px",
    alignItems: "center",
    textAlign: "center",
    color: "#182731"
  },

  imgShadow: {
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)",
    borderRadius: "30px 0px",
    width: "100%",
    height: "100%",
    padding: "18px",
    background: "#FFFFFF",
    justifyContent: "center",
    textAlign: "center",
  }
}));

const SixSection = () => {


  const programList = [ 
    {
     title: "CALIFORNIEN",
     title2: "Méthode des 9 Sens Manoeuvres de base dos - Aromathérapie:",
     description:
      "Dans le module 1 vous découvrirez l’utilité de la méthode des 9 SENS  Nous commencerons par des manœuvre de base du dos avec dos (mouvement lent et ample) ainsi que l’utilisation de l’aromathérapie  et des autres sens.",
    },

    {
      title: "CALIFORNIEN",
      title2: "Méthode des 9 Sens Manoeuvres de base dos - Aromathérapie:",
      description: "Dans le module 1 vous découvrirez l’utilité de la méthode des 9 SENS  Nous commencerons par des manœuvre de base du dos avec dos (mouvement lent et ample) ainsi que l’utilisation de l’aromathérapie  et des autres sens.",
    },

    {
      title: "CALIFORNIEN",
      title2: "Méthode des 9 Sens Manoeuvres de base dos - Aromathérapie:",
      description: "Dans le module 1 vous découvrirez l’utilité de la méthode des 9 SENS  Nous commencerons par des manœuvre de base du dos avec dos (mouvement lent et ample) ainsi que l’utilisation de l’aromathérapie  et des autres sens.",
    }
  ]

  const classes = useStyles();

  return (
  
    <div className="section-programme-formation">
    <div className="container">

    <h1 className={clsx(classes.h1, "text-center")}> Programme </h1>

    <Grid sm={12} md={12} xs={12} lg={12} container justify="space-around" alignItems="center">
   

    {programList.map(item => (
    <Grid sm={3} md={3} xs={12}>

    <div className={clsx(classes.imgShadow, "mt-5")} >

   1

   <h1 className={classes.h1}> {item.title} </h1>

   <h4>
   
   {item.title2}
   
   </h4>

<p className={classes.description}>
{item.description}
</p> 

</div>
     
   </Grid>
    ))}

    </Grid>
  </div>
  </div>
 

  );
};

export default SixSection;
