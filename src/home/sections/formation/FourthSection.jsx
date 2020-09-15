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
    width: "50%",
    margin: "auto"
  },

  paragraph: {
    color: "#434343",
    fontFamily: "Lato Medium",
    fontSize: "18px",
    width: "50%",
    margin: "auto"
  },

  boxSahdow: {
    background: "#FFFFFF",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)",
    borderRadius: "30px 0px"
  },

  textContainer: {
    position: "relative",
    overflow: "hidden",
    marginTop: "4rem",
    justifyContent: "center",
    textAlign: "center",
  },

  imgShadow: {
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)",
    borderRadius: "30px 0px",
    width: "150px",
    height: "130px",
    padding: "18px",
    textAlign: "center",
    background: "#FFFFFF"
  }
 
}));

const FourthSection = () => {

  const classes = useStyles();

  const imgList = [ 
    {
     title: "L’ouïe",
     link: "/assets/images/formations/image1.png",
    },

    {
      title: "La vue",
      link: "/assets/images/formations/vue.png",
    },

    {
      title: "Le goût",
      link: "/assets/images/formations/gout.png",
    },

    {
      title: "L’odorat",
      link: "/assets/images/formations/odorat.png",
    },

    {
      title: "Le toucher",
      link: "/assets/images/formations/toucher.png",
    }
  ]

  const imgList2 = [ 
    {
     id:'1',
     link: "/assets/images/formations/proprioception.png",
     title: "La proprioception",
     text: "Qui est le fait de localiser ses différentes parties du corps dans l’espace."
    },

    {
      id:"2",
      link: "/assets/images/formations/equilibrioception.png",
      title: "L'équilibrioception",
      text: "Aide à prévenir toute chute chez les humains et animaux en équilibre"
    },

    {
      id:'3',
      link: "/assets/images/formations/nociception.png",
      title: "La nociception",
      text: "Qui est le fait d’avoir le sens de la douleur."
    },

    {
      id:'4',
      link: "/assets/images/formations/thermo.png",
      title: "La thermoception",
      text: " Qui est le fait d’avoir la perception du chaud / froid."
  
    },
  ]
  
  const getImgSrc = (id,imgSrc) => {
    if (id ==="2")
    return <img src={imgSrc} className="mb--4" alt=""/>
    else if (id=== "3") {
      return <img src={imgSrc} className="mb--4" alt=""/>
    }
    else if (id === "4") {
      return <img src={imgSrc} className="mb--7" alt=""/>
    }
    return <img src={imgSrc} alt=""/>
  }

  return (
  
    <div className="section">
    <div className="container text-center">

    <Grid sm={12} md={12} xs={12} lg={12} container justify="center" alignContent="center">
   

    {imgList.map(item => (
      <Grid key sm={2} md={2} xs={12}>

      <div className={classes.imgShadow}>
        <img src={item.link} alt=""/>

        <h6 className="mt-3"> {item.title} </h6>

        </div>
      </Grid>
    ))}

    {imgList2.map(item => (
      <Grid key sm={3} md={3} xs={12}>
       <div className={classes.textContainer}>
       {getImgSrc(item.id,item.link)}

        <h5 className={clsx(classes.h5, "absolute mt-6")}> {item.title} </h5>

        <div flexWrap="wrap">
        <p className={clsx(classes.paragraph, "absolute mt-6")} > {item.text} </p>

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
