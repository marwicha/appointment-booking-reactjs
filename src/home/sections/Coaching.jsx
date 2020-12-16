import React from "react";
import clsx from "clsx";
import { Container, Box, Typography, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, ...theme }) => ({

  containerImg: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(30),
      paddingBottom: theme.spacing(30),
  },
  },

  btn: {
    color: "white",
    backgroundColor: "#4b9fbc"
  }
}));

const Coaching = () => {

  const classes = useStyles();
  
  return (

    <section  className="section">

     <Container maxWidth="lg" className={classes.containerImg} 
     style={{ backgroundImage: 'url("./assets/images/coach.png")' }}>

     <Box px={6}>

      <Grid container spacing={6} display="flex" justifyContent="flex-start" alignItems="flex-start">

        <Grid item xs={12} md={6}>
   
       <Typography color="second" variant="h3" component="span"> Coaching </Typography>

        <Typography variant="subtitle1" color="textSecondary" paragraph={true}>

         C’est une pratique qui instaure une relation d’aide par un toucher psycho-corporel.

          Le praticien prend en compte vos ressentis corporels et permet de replacer votre corps au centre de votre attention.
          Cette approche vous invite à entrer en contact avec ce que vous ressentez, 
          avec votre vécu corporel et intérieur de la situation que vous vivez..</Typography>
  
      <Box mt={3}>
        <Button variant="contained" color="primary" className={classes.btn}> En savoir plus </Button>
        
      </Box>
      </Grid>

      <Grid item xs={12} md={6}>
      
      </Grid>


      </Grid>

      </Box>
        
     </Container>

    </section>
 
  );
};

export default Coaching;
