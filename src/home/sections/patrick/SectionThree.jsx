import React from "react";
import { Grid, Container, Box, Card, CardActionArea, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
    media: {
     height: '320px'
  },
}));
const SectionThree = () => {

  const classes = useStyles();

  return (
    <section className="section">
    
  <Container maxWidth="lg">

    <Grid container spacing={4}  alignItems= "center" alignContent ="space-evenly">

      <Grid item xs={12} md={3}>
        <Card>
          <CardActionArea href="#">
            <CardMedia className={classes.media} image="/assets/images/patrick/1.png" />
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} md={3}>
        <Card>
          <CardActionArea href="#">
            <CardMedia className={classes.media} image="/assets/images/patrick/2.png" />
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} md={3}>
        <Card>
          <CardActionArea href="#">
            <CardMedia className={classes.media} image="/assets/images/patrick/3.png" />
          </CardActionArea>
        </Card>
      </Grid>
       <Grid item xs={12} md={3}>
        <Card>
          <CardActionArea href="#">
            <CardMedia className={classes.media} image="/assets/images/patrick/7.png" />
          </CardActionArea>
        </Card>
      </Grid>

       </Grid>


        <Grid container spacing={4}  alignItems= "center" alignContent ="space-evenly">
      <Grid item xs={12} md={3}>
        <Card>
          <CardActionArea href="#">
            <CardMedia className={classes.media} image="/assets/images/patrick/6.png" />
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} md={3}>
        <Card>
          <CardActionArea href="#">
            <CardMedia className={classes.media} image="/assets/images/patrick/9.jpg" />
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardActionArea href="#">
            <CardMedia className={classes.media} image="/assets/images/patrick/5.png" />
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  </Container>

    </section>
  );
};

export default SectionThree;