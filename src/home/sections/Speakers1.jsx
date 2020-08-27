import React from "react";
import { Grid, Card, Avatar, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  card: {
    border: "1px solid transparent",
    transition: "all 250ms ease-in-out"
  },
  button: {
    fontSize: 14,
    fontFamily: theme.typography.fontFamily
  },
  center: {
   display: "flex",
   justifyContent: "center",
   alignItems: "center",
   height: "100px",
   fontSize: "14px"
  },
  imgStone: {
  backgroundImage: "assets/images/logos/bgStone.PNG"
  }
}));

const Speakers1 = () => {
  const classes = useStyles();
  const speakerList = [
    {
      name: "Massage assise",
      imgUrl: "/assets/images/massage-assis.png",
      buttonTitle: "SAVOIR PLUS"
    },
    {
      name: "Massage 9 sens",
      imgUrl: "/assets/images/massage-9sens.png",
      buttonTitle: "SAVOIR PLUS"
    },
  ];

  return (
    <section className="section">
      <div className="container text-center imgStone">
      <h1 className="mt-0 font-normal font-bold text-32 text-third">
        IKDO
      </h1>
      <p className="max-w-500 mx-auto text-18 mt-2">
        Massages et Somatothérapie
      </p>
      <div className="container">
        <Grid container spacing={0}  justify="center">
          {speakerList.map((item, ind) => (
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
                 <Box className="p-4 bg-button-savoirplus" size="large"> 
                 {item.buttonTitle}
                 </Box>

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

export default Speakers1;
