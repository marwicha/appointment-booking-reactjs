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
    fontSize: "16px",
    width: "100%"
  },

  paragraph: {
    color: "#434343",
    fontFamily: "Lato Medium",
    fontSize: "14px",
    width: "100%",
    //flexDirection: "column",
    //justifyContent: "center"

  },

  Container: {
    display: "flex",
    flexDirection: "row",
    //height: "100px",
    padding: "10px 0"
  },

  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
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
    <div className="container">

    <Grid sm={12} md={12} xs={12} lg={12} container justify="space-around" alignItems="center">
   

    {imgList.map(item => (
      <Grid key lg={3} sm={3} md={3} xs={12}>

      <div className={classes.Container}>
      
      <img src={item.link} alt="" />

      <div className={classes.textContainer}>

        <h6 className={clsx(classes.h5)}> {item.title} </h6>
       
        
        <p className={clsx(classes.paragraph)} > {item.description} </p>
      
        </div>

        </div>
      </Grid>
      
    ))}
   
  
  </Grid>
  </div>
  </div>
 

  );
};

export default FourthSection;
