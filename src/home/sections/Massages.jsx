import React from "react";
import { Grid, Button, Box, Container, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles(({ palette, ...theme }) => ({
 
   img: {
    maxWidth: 230,
    marginBottom: theme.spacing(2)
  },

   title: {
    color: "#4b9fbc"
  },

  btn: {
    color: "white",
    backgroundColor: "#4b9fbc"
  }

}));

const Massages = () => {

  const classes = useStyles();

  const massagesList = [

    {
      name: "Massage chaise assise",
      imgUrl: "/assets/images/massage-assis.png",
      text: "Profitez de 15 minutes d'un massage sur chaise assise Amma,",
      text1: "le massage le plus adapté en entreprise.",
      buttonTitle: "En savoir plus"
    },

    {
      name: "Massage des 9 sens",
      imgUrl: "/assets/images/massage-9sens.png",
      text: "Profitez d'une heure d'un massage de 9 sens,",
      text1: "un ressourcement garantis qui recentre votre énergie.",
      buttonTitle: "En savoir plus"
    },

  ];

  return (
    <section className= "section">

      <Container maxWidth="lg">

       <Box py={5} textAlign="center">

        <Box mb={8}>
        <Container maxWidth="sm">
         
          <Typography variant="h4" component="span" color="primary" className="text-fourth"> IKDO </Typography>
          <Typography variant="subtitle1" color="textSecondary" paragraph={true}> prestations de massages </Typography>
        </Container>
       </Box>

        <Grid container spacing={6}>

          {massagesList.map((item, ind) => (
            
            <Grid key={ind} item xs={12} md={6}>

             <Box p={3} pb={4}>

                <img  src={item.imgUrl} alt="" className={classes.img} />


               <Typography variant="subtitle1" component="h6" gutterBottom={true} className={classes.title}>{item.name}</Typography>

               <Typography variant="body2" component="p" gutterBottom={true}> {item.text}</Typography>
               <Typography variant="body2" component="p" gutterBottom={true}> {item.text1}</Typography>

          <Box mt={3} >
            <Button variant="contained" color="primary" className={classes.btn} >
              <NavLink to="/Formations"> 
                 En savoir plus 
              </NavLink>
            </Button> 
          </Box>

                </Box>
            </Grid>
          ))}
        </Grid>
        </Box>
        </Container>
    </section>
  );
};

export default Massages;
