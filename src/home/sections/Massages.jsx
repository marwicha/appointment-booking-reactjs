import React from "react";
import { Grid, Avatar, Box, Button } from "@material-ui/core";
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
    background: `${palette.first} !important`,
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

}));

const Massages = () => {
  const classes = useStyles();
  const massagesList = [
    {
      name: "Massage sur chaise assise",
      imgUrl: "/assets/images/massage-assis.png",
      buttonTitle: "SAVOIR PLUS"
    },
    {
      name: "Massage des 9 sens",
      imgUrl: "/assets/images/massage-9sens.png",
      buttonTitle: "SAVOIR PLUS"
    },
  ];

  return (
    <section className= "section">

      <div className="container text-center">
      
      <h1 className="font-normal font-bold text-32 text-third">
        IKDO
      </h1>
      <p className="max-w-500 mx-auto text-18 mt-4">
        Massages et Somatothérapie
      </p>

      <div className="container">

        <Grid container spacing={0} justify="center">
          {massagesList.map((item, ind) => (
            <Grid key={ind} item sm={4} xs={12}>
              <div
                className={clsx(
                  "text-center max-w-500",
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
                <p className="font-light text-12 max-w-150 mx-auto">
                    text text text text text text text text
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
