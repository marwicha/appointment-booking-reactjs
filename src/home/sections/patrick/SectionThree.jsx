import React from "react";
import {
  Grid,
  Container,
  Card,
  CardActionArea,
  CardMedia,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  media: {
    height: 400,
  },
}));
const SectionThree = () => {
  const classes = useStyles();

  return (
    <section className="section">
      <Container maxWidth="lg">
        <Grid container spacing={2} justify="space-between" alignItems="center">
          <Grid item xs={12} md={3}>
            <Card>
              <CardActionArea href="#">
                <CardMedia
                  className={classes.media}
                  image="/assets/images/patrick/1.png"
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card>
              <CardActionArea href="#">
                <CardMedia
                  className={classes.media}
                  image="/assets/images/patrick/2.png"
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card>
              <CardActionArea href="#">
                <CardMedia
                  className={classes.media}
                  image="/assets/images/patrick/3.png"
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card>
              <CardActionArea href="#">
                <CardMedia
                  className={classes.media}
                  image="/assets/images/patrick/7.png"
                />
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={2} alignItems="center" justify="space-between">
          <Grid item xs={12} md={3}>
            <Card>
              <CardActionArea href="#">
                <CardMedia
                  className={classes.media}
                  image="/assets/images/patrick/6.png"
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card>
              <CardActionArea href="#">
                <CardMedia
                  className={classes.media}
                  image="/assets/images/patrick/9.jpg"
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardActionArea href="#">
                <CardMedia
                  className={classes.media}
                  image="/assets/images/patrick/5.png"
                />
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default SectionThree;
