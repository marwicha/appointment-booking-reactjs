import React from "react";
import { Grid, Container, Box, Card, CardActionArea, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({

    media: {
     height: 300,
     width: 400,
     border: "6px solid #182731",
     boxSizing: "border-box"
  },

     media2: {
       width: "100%",
       border: "6px solid #182731",
       height: "100%",
       boxSizing: "border-box",
       marginLeft: "4em",
       marginTop:"2em"
  },


}));

const SectionTwo = () => {

  const classes = useStyles();

  return (
    <section className="section">

  <Container maxWidth="lg" className="container-formations" >

     <Box mb={8} textAlign="center">
     
          <Typography variant="h4" component="span"> CERTIFICATS </Typography>

      </Box>

    <Grid  container spacing={2} justify="space-between" alignItems= "center" alignContent ="space-evenly">

      <Grid item xs={12} md={3}>
       
       <img className={classes.media} src="/assets/images/patrick/diplomes/bien-etre.png" alt="" />
       
      </Grid>

      <Grid item xs={12} md={3}>
       
            <img className={classes.media} src="/assets/images/patrick/diplomes/soin-visage.png" alt="" />
      
      </Grid>
      <Grid item xs={12} md={3}>
      
            <img className={classes.media} src="/assets/images/patrick/diplomes/shiatsu.png" alt=""/>
      
      </Grid>
 
    </Grid>


      <Grid container spacing={2} justify="space-between" alignItems= "center" alignContent ="space-evenly">

      <Grid item xs={12} md={3}>
       
       <img className={classes.media} src="/assets/images/patrick/diplomes/anti-stress.png" alt="" />
       
      </Grid>

      <Grid item xs={12} md={3}>
       
            <img className={classes.media2}  justify-items="center" src="/assets/images/patrick/diplomes/psycho-travail.png" alt="" />
      
      </Grid>
      <Grid item xs={12} md={3}>
      
            <img className={classes.media} src="/assets/images/patrick/diplomes/reflexologie.png" alt=""/>
      
      </Grid>
 
    </Grid>


       <Grid container spacing={2} justify="space-between" alignItems= "center" alignContent ="space-evenly">

      <Grid item xs={12} md={3}>
       
       <img className={classes.media} src="/assets/images/patrick/diplomes/soins-corps.png" alt="" />
       
      </Grid>

      <Grid item xs={12} md={3}>
      
            <img className={classes.media} src="/assets/images/patrick/diplomes/sono.png" alt=""/>
      
      </Grid>
 
    </Grid>

  </Container>
    </section>
  );
};

export default SectionTwo;