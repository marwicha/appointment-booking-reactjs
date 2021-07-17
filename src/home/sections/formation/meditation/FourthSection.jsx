import React from "react";
import {
  Grid,
  Box,
  Container,
  CardContent,
  Card,
  CardActionArea,
  Typography,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  root: { maxWidth: 250, margin: "auto" },
  paragraph: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "1em",
    lineHeight: "30px",
    textAlign: "left",
    maxWidth: 500,
  },

  Container: {
    display: "flex",
    flexDirection: "row",
    //height: "100px",
    padding: "10px 0",
  },
}));

const FourthSection = () => {
  const classes = useStyles();

  const imgList = [
    {
      link: "/assets/images/formations/1.png",
      description:
        "La méditation est une approche méditative qui consiste à vivre pleinement l'instant présent.",
    },

    {
      link: "/assets/images/formations/2.png",
      description:
        "La méditation réduit la fréquence cardiaque et l'hypertension artérielle.",
    },

    {
      link: "/assets/images/formations/3.png",
      description:
        "La méditation réduit les niveaux de stress et la dépression, ce qui se traduit par moins d'anxiété.",
    },
  ];

  return (
    <section className="section">
      <Container maxWidth="lg">
        <Box textAlign="center">
          <Grid container justify="center" alignItems="center">
            {imgList.map((item) => (
              <Grid item md={3} xs={12}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <img src={item.link} alt="" />

                    <CardContent>
                      <Box align="left">
                        <p className={classes.paragraph}>{item.description}</p>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default FourthSection;
