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
    fontSize: 16,
    fontFamily: theme.typography.fontFamily,
    borderRadius: "100px",
    background: `${palette.second} !important`,
    color: "white !important",
    width: "200px",
   height: "60px",
  },
  center: {
   display: "flex",
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
    textAlign: "center",
    margin: "0 auto"
  }

}));

const Massages = () => {

  const classes = useStyles();

  const massagesList = [

    {
      name: "Massage assis",
      imgUrl: "/assets/images/massage-assis.png",
      text: "Profitez de 15 minutes d'un massage sur chaise assise Amma, le massage le plus adapté en entreprise.",
      buttonTitle: "En savoir plus"
    },
    {
      name: "Massage des 9 sens",
      imgUrl: "/assets/images/massage-9sens.png",
      text: "Profitez d'une heure d'un massage de 9 sens, un ressourcement garantis qui recentre votre énergie.",
      buttonTitle: "En savoir plus"
    },

  ];

  return (
    <section className= "section">

      <div className="container text-center">
      
      <h1 className="font-bold text-32 text-second">
        IKDO
      </h1>

      <p className="mx-auto text-18 pb-6">
        Massages
      </p>

      <div className="container">

        <Grid container spacing={0} justify="center">
          {massagesList.map((item, ind) => (
            <Grid key={ind} item sm={4} xs={12}>
              <div
                className={clsx(
                  "text-center max-w-600",
                  classes.card
                )}
              >
                <div className="mb-6 ml-1 relative">
                  <Avatar
                    src={item.imgUrl}
                    className="h-260 w-260 inline-block"
                  ></Avatar>
                  
                </div>
                <h5 className="m-0 font-medium text-20">{item.name}</h5>

                <p className={clsx(classes.p, "max-w-220 mt-5")}>
                    {item.text}
                </p>
                <div className={classes.center}>
                
                 <Button className={clsx(classes.button,"p-4")} size="large"> 
                 
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
