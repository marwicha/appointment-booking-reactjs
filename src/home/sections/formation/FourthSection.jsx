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
  h2: {
    fontFamily: "LEMON MILK Light"
  },
  sizeICone: {
    paddingBottom: "10px"
  },
  paragraph: {
    color: "#434343",
    fontFamily: "Lato Medium",
    fontSize: "20px",
    lineHeight: "24px"
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
     id:'1',
     link: "/assets/images/formations/proprioception.png",
     title: "La proprioception",
     text: "Qui est le fait de localiser ses différentes parties du corps dans l’espace.",
     size: null
    },

    {
      id:"2",
      link: "/assets/images/formations/equilibrioception.png",
      title: "L'équilibrioception",
      text: "Aide à prévenir toute chute chez les humains et animaux en équilibre",
      size: classes.sizeICone
    },

    {
      id:'3',
      link: "/assets/images/formations/nociception.png",
      title: "La nociception",
      text: "Qui est le fait d’avoir le sens de la douleur.",
      size: null
    },

    {
      id:'4',
      link: "/assets/images/formations/thermo.png",
      title: "La thermoception",
      text: " Qui est le fait d’avoir la perception du chaud / froid.",
      size: null
    },
  ]
  
  const getImgSrc = (id,imgSrc) => {
    if (id ==="2")
    return <img src={imgSrc} className="mt--7" alt=""/>
    else if (id === "4") {
      return <img src={imgSrc} className="mt--6" alt=""/>
    }
    return <img src={imgSrc} alt=""/>
  }

  return (
  
    <div className="section">
    <div className="container text-center">

    <Grid sm={12} md={12} xs={12} container justify="space-around">
   

    {imgList.map(item => (
      <Grid key sm={2} md={2} xs={12}>

        <img src={item.link} alt="" />

      </Grid>
    ))}

    {imgList2.map(item => (
      <Grid className="mt-6" key sm={3} md={3} xs={12}>
     
       {getImgSrc(item.id,item.link)}

        <h6 className="px-24 mt-3 w-240"> {item.title} </h6>

        <p className={clsx(classes.paragraph, "px-25 mt-3 w-240")}> {item.text} </p>

      </Grid>
    ))}
   
  
  </Grid>
  </div>
  </div>
 

  );
};

export default FourthSection;
