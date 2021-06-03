import React from "react";
import { Container, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  p: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "2vh",
    lineHeight: "40px",
    textAlign: "left",
  },

  avatar: {
    width: theme.spacing(14),
    height: theme.spacing(14),
    borderRadius: "50px",
  },
}));

const SectionOne = () => {
  const classes = useStyles();

  return (
    <section className="section">
      <Container maxWidth="lg">
        <Box pt={12} pb={10} textAlign="center" className={classes.box}>
          <Box className="container-formations">
            <Box pt={6}>
              <img
                alt=""
                src="/assets/images/patrick.png"
                className={classes.avatar}
                textAlign="center"
              />
            </Box>
            <Typography variant="h4" component="h2" gutterBottom={true}>
              Patrick Caillier
            </Typography>

            <p className={classes.p}>
              En 1997 j’ai vécu de l’intérieur ce qu’on appelle banalement un
              burn-out, Après un épuisement total physique et intellectuel
              j’avais du mal à cette époque à assumer mon corps. Je ressentais
              de l’aversion envers mon physique et ma personne ; j’avais
              parallèlement des soucis d’addictions (tabac alcool) pour
              compenser mon mal être. Pour sortir de ces problèmes j’ai du me
              faire accompagner par de nombreux thérapeutes. Dans ces années là,
              alors que j’étais perdu entre ma carrière dans la restauration
              (manager), et une ambition de changer de métier et l’envie tout
              simplement de vivre ! j’ai découvert le yoga, la méditation et les
              massages bien-être. J’ai commencé petit à petit à faire quelques
              mouvements de yoga, à respirer, à bouger mon corps, à penser
              autrement et à recevoir des massages bien-être...
            </p>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default SectionOne;
