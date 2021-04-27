import React from "react";
import {
  Card,
  Grid,
  Container,
  Box,
  Typography,
  CardMedia,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  media: {
    height: 300,
    width: 370,
    border: "6px solid #182731",
    boxSizing: "border-box",
  },

  media2: {
    width: 228,
    height: 364,
    border: "6px solid #182731",
    boxSizing: "border-box",
    marginLeft: "6em",
    marginTop: "0",
  },
}));

const SectionTwo = () => {
  const classes = useStyles();

  return (
    <section className="section">
      <Container maxWidth="lg">
        <Box mb={8} textAlign="center">
          <Typography variant="h4" component="span">
            {" "}
            CERTIFICATS{" "}
          </Typography>
        </Box>

        <Box mb={8} textAlign="center">
          <Grid
            container
            spacing={2}
            justify="space-between"
            alignItems="center"
          >
            <Grid item xs={12} md={3}>
              <CardMedia
                className={clsx(classes.media, "zoom")}
                image="/assets/images/patrick/diplomes/bien-etre.png"
                alt=""
              />
            </Grid>

            <Grid item xs={12} md={3}>
              <CardMedia
                className={clsx(classes.media, "zoom")}
                image="/assets/images/patrick/diplomes/soin-visage.png"
                alt=""
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <CardMedia
                className={clsx(classes.media, "zoom")}
                image="/assets/images/patrick/diplomes/shiatsu.png"
                alt=""
              />
            </Grid>
          </Grid>
        </Box>

        <Box mb={8} textAlign="center">
          <Grid
            container
            spacing={2}
            justify="space-between"
            alignItems="center"
          >
            <Grid item xs={12} md={3}>
              <CardMedia
                className={clsx(classes.media, "zoom")}
                image="/assets/images/patrick/diplomes/anti-stress.png"
                alt=""
              />
            </Grid>

            <Grid item xs={12} md={3}>
              <CardMedia
                className={clsx(classes.media2, "zoom")}
                justify-items="center"
                image="/assets/images/patrick/diplomes/psycho-travail.png"
                alt=""
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <CardMedia
                className={clsx(classes.media, "zoom")}
                image="/assets/images/patrick/diplomes/reflexologie.png"
                alt=""
              />
            </Grid>
          </Grid>
        </Box>

        <Box mb={8} textAlign="center">
          <Grid
            container
            spacing={2}
            justify="space-between"
            alignItems="center"
          >
            <Grid item xs={12} md={3}>
              <CardMedia
                className={clsx(classes.media, "zoom")}
                image="/assets/images/patrick/diplomes/soins-corps.png"
                alt=""
              />
            </Grid>

            <Grid item xs={12} md={3}>
              <CardMedia
                className={clsx(classes.media, "zoom")}
                image="/assets/images/patrick/diplomes/sono.png"
                alt=""
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default SectionTwo;
