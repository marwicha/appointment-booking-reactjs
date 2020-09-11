import React from "react";
import { Grid } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({

}));

const SixSection = () => {

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

  return (
  
    <div className="section">
    <div className="container text-center">

    <Grid sm={12} md={12} xs={12} container>
   

    <Grid sm={6} md={6} xs={12} container justify="space-between">
    
    
    </Grid>


    <Grid sm={6} md={6} xs={12} container justify="space-between">
    
    
    </Grid>


    </Grid>
  </div>
  </div>
 

  );
};

export default SixSection;
