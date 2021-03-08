import React from "react";
import { Container, Box, Typography, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
const useStyles = makeStyles(({ palette, ...theme }) => ({

  buttonAction: {
    marginRight: theme.spacing(2),
    color: "white",
    backgroundColor: "#4b9fbc",
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(2),
    }
  },

  img: {
    maxWidth: '85%',
    height: '46%'
  }

}));

const Coaching = () => {

  const classes = useStyles();
  
  return (

   <section className="section">

  <Container maxWidth="lg">
    
      <Grid container spacing={6}>

        <Grid item xs={12} md={6}>
        
                <Typography variant="h4" component="h4" color="second" mt={4}> Coaching </Typography>

               <p>
                C’est une pratique qui instaure une relation d’aide par un toucher psycho-corporel.
               <br></br>
               <br></br>
                Le praticien prend en compte vos ressentis corporels et permet de replacer 
                votre corps au centre de votre attention.
                <br></br>
                <br></br>
                Cette approche vous invite à entrer en contact avec ce que vous ressentez, 
                avec votre vécu corporel et intérieur de la situation que vous vivez.
                </p>

                <Box mt={3}>
                  <Button variant="contained" color="primary"
                          className={classes.buttonAction}>
                      <NavLink to="/somatotherapie"> 
                         En savoir plus 
                     </NavLink>
                  </Button>
                </Box>

                </Grid>
        <Grid item xs={12} md={6}>
          <img src="./assets/images/coach.png" alt="" className={classes.img} />
        </Grid>

      </Grid>

  </Container>
      
    </section>
  );
};

export default Coaching;
