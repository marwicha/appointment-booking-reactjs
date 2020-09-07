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
    backgroundColor: "white",
    borderRadius: "100px"
  },
  h2: {
    fontFamily: "LEMON MILK Light"
  },
  sizeICone: {
    paddingBottom: "10px"
  }
}));

const FourthSection = () => {

  const classes = useStyles();

  const imgList = [ 
    {
     link: "/assets/images/formations/ouie.png",
    },

    {
      link: "/assets/images/formations/vue.png",
    },

    {
      link: "/assets/images/formations/gout.png",
    },

    {
      link: "/assets/images/formations/odorat.png",
    },

    {
      link: "/assets/images/formations/toucher.png",
    }
  ]

  const imgList2 = [ 
    {
     link: "/assets/images/formations/proprioception.png",
     title: "La proprioception",
     text: "qui est le fait de localiser ses différentes parties du corps dans l’espace.",
     size: null
    },

    {
      link: "/assets/images/formations/equilibrioception.png",
      title: "L'équilibrioception",
      text: "",
      size: classes.sizeICone
    },

    {
      link: "/assets/images/formations/nociception.png",
      title: "La nociception",
      text: "",
      size: null
    },

    {
      link: "/assets/images/formations/thermo.png",
      title: "La thermoception",
      text: "",
      size: null
    },
  ]
  
  return (
  
    <div className="section">
    <div className="container text-center">

    <Grid sm={12} md={12} xs={12} container justify="space-around">
   

    {imgList.map(item => (
      <Grid key sm={2} md={2} xs={12}>
        <img className="w-50" src={item.link} alt="" />


      </Grid>
    ))}

    {imgList2.map(item => (
      <Grid key
       sm={3} md={3} xs={12}>
        <img className="w-50" src={item.link} alt="" />

        <h6>{item.title}</h6>
      </Grid>
    ))}
  
  </Grid>
  </div>
  </div>
 

  );
};

export default FourthSection;
