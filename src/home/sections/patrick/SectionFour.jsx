import React from "react";
import { Container, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  container: {
    padding: "0 0 0 0",
    maxWidth: "1400px",
    margin: "0 auto",
    background: "#182731",
  },

  p: {
    fontFamily: "LEMON MILK",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "2vh",
    lineHeight: "40px",
    color: "white",
    paddingRight: "15em",
    paddingLeft: "15em",
  },
}));

const SectionFour = () => {
  const classes = useStyles();

  return (
    <section className="section">
      <Container maxWidth="md" className={classes.container}>
        <Box py={8} textAlign="center">
          <Typography variant="h5" component="h5" className={classes.p}>
            N´hésitez pas á me contacter pour toute information, je vous
            répondrais avec plaisir.
          </Typography>
        </Box>
      </Container>
    </section>
  );
};

export default SectionFour;
