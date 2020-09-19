import React from "react";
import { Grid } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  button: {
    marginTop: "2rem !important",
    padding: "1rem 2rem 1rem 2rem",
    fontSize: 15,
    fontFamily: theme.typography.fontFamily,
    backgroundColor: "white",
    borderRadius: "100px"
  },

  h5: {
    fontFamily: "LEMON MILK",
    width: "70%",
    margin: "auto"
  },

  paragraph: {
    color: "#434343",
    fontFamily: "Lato Medium",
    fontSize: "18px",
    width: "70%",
    margin: "auto"
  },

  textContainer: {
    position: "relative",
    overflow: "hidden",
    marginTop: "4rem",
    justifyContent: "center",
    textAlign: "center",
  }
}));

const FourthSection = () => {

  const classes = useStyles();

  const imgList = [ 
    {
     title: "La pleine consciense",
     link: "/assets/images/formations/1.png",
     description:"La pleine conscience est une approche méditative qui consiste à vivre pleinement l’instant présent"
    },

    {
      title: "L'intelligence émotionnelle",
      link: "/assets/images/formations/2.png",
      description:"Une meilleure intelligence émotionnelle (L’impulsivité, les accès de colère)"
    },

    {
      title: "Les troubles psychologiques",
      link: "/assets/images/formations/3.png",
      description:"Réduit le stress, l'anxiété chronique, la dépression, et l’insomnie"
    },

    {
      title: "les douleurs chroniques",
      link: "/assets/images/formations/4.png",
      description:"Les troubles de l'alimentation (La boulimie, l’anorexie) et Prévention santé au travail (éviter le surmenage et burnout)"
    }
  ]

  return (
  
    <div className="section">
    <div className="container text-center">

    <Grid sm={12} md={12} xs={12} lg={12} container justify="center" alignItems="center">
   

    {imgList.map(item => (
      <Grid key lg ={3} sm={2} md={2} xs={12}>

      <div> <img src={item.link} alt="" /></div>
        
<div> 

<h6 className={clsx(classes.h5, "absolute mt-6")}> {item.title} </h6></div>
       

        <div><p className={clsx(classes.paragraph, "absolute mt-6")} > {item.description} </p></div>

      </Grid>
    ))}
   
  
  </Grid>
  </div>
  </div>
 

  );
};

export default FourthSection;
