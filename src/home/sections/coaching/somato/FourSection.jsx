import React from "react";
import { Grid, Container, Box, Card, Typography, Stepper, Step, StepLabel, CardActionArea, CardMedia, Button } from "@material-ui/core";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, ...theme }) => ({
 
   stepper: {
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(4),
      paddingBottom: 0,
      flexDirection: 'column',
      alignItems: 'start'
    }
  },
  step: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2)
    }
  },
  container: {
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(2)
    }
  },
  media: {
    height: '256px',
  }

}));

const FourSection = () => {

  const classes = useStyles();
  
  return (

    <section className="section">

    <Box pt={8} pb={10}>
    <Container maxWidth="lg">
      
       <Box textAlign="center" >

    <h3 className="font-bold text-28 text-center text-second mt-5 mb-10">
      Programme
    </h3>
    </Box>
      <Box bgcolor="background.paper" className={classes.container}>
        <Stepper activeStep={0} className={classes.stepper}>
          <Step key="Move Data" className={classes.step}>
            <StepLabel></StepLabel>
          </Step>
          <Step key="Ongoing qsjdjh" className={classes.step}>
            <StepLabel></StepLabel>
          </Step>
          <Step key="Ongoing Support">
            <StepLabel></StepLabel>
          </Step>
        </Stepper>
        <Box p={4}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box display="flex" height="100%">
                <Box my="auto">
                 
                  <Typography variant="body1" color="textSecondary" paragraph={true}>
                La première phase est verbale,  
                en début de séance vous faites le point sur le vécu et les tensions corporelles depuis la séance précédente..
                </Typography>
                  <Button variant="contained" color="primary" className={classes.primaryAction}> Suivant!</Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardActionArea href="#">
                  <CardMedia className={classes.media} image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80" />
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  </Box>

    </section>
 

  );
};

export default FourSection;
