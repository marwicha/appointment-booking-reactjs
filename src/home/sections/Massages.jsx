import React from "react";
import { Grid, Avatar, Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  card: {
    border: "1px solid transparent",
    transition: "all 250ms ease-in-out"
  },
  button: {
    fontSize: 14,
    fontFamily: theme.typography.fontFamily,
    borderRadius: "0 50px",
    background: `${palette.second} !important`,
    color: "white !important",
    width: "163px",
    height: "50px",
    textAlign: "left"
  },

  center: {
   justifyContent: "center",
   alignItems: "center",
   height: "100px",
   fontSize: "14px"
  },

  p: {
    fontFamily: "LEMON MILK",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "0.90rem",
    lineHeight: "1.66",
    textAlign: "left",
    margin: "0 auto"
  }

}));

const Massages = () => {

  const classes = useStyles();

  const massagesList = [

    {
      name: "Chaise assise",
      imgUrl: "/assets/images/massage-assis.png",
      text: "Profitez de 15 minutes d'un massage sur chaise assise Amma, le massage le plus adapté en entreprise.",
      buttonTitle: "En savoir plus"
    },
    {
      name: "9 sens",
      imgUrl: "/assets/images/massage-9sens.png",
      text: "Profitez d'une heure d'un massage de 9 sens, un ressourcement garantis qui recentre votre énergie.",
      buttonTitle: "En savoir plus"
    },

  ];

  return (
    <section className= "section">

      <div className="container-AllServices text-center">
      
      <h1 className="font-bold text-32 text-second">
        IKDO
      </h1>

      <p className="mx-auto text-18 pb-6">
        Massages
      </p>

      <div className="container">

        <Grid container spacing={0} sm={12} md={12} lg={12} xs={12} justify="center" alignItems="center">
          {massagesList.map((item, ind) => (
            
            <Grid key={ind} item sm={4} md={4} lg={4} xs={12}>
              <div
                className={clsx(
                  "text-center max-w-600",
                  classes.card
                )}
              >
                <div className="mb-6 ml-1 relative">
                  <Avatar
                    src={item.imgUrl}
                    className="h-220 w-220 inline-block"
                  ></Avatar>
                  
                </div>

                <h5 className="m-0 font-medium text-20">Massage</h5>

                <h5 className="m-0 font-medium text-20 pt-3">{item.name}</h5>

                <p className={clsx(classes.p, "max-w-220 mt-5")}>
                    {item.text}
                </p>
                <div className={classes.center}>
                
                 <Button className={clsx(classes.button,"mt-6")} size="medium"> 
                 
                 {item.buttonTitle}

                 </Button>

                 </div>
                
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
      
      </div>
    </section>
  );
};

export default Massages;
