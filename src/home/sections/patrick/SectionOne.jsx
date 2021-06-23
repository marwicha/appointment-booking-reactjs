import React from "react";
import { Container, Box, Typography, Grid } from "@material-ui/core";
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
            <Typography variant="h5" component="h5" gutterBottom={true}>
              Patrick Caillier
            </Typography>

            <Typography variant="h6" component="h6" gutterBottom={true}>
              Qui suis-je ?
            </Typography>

            <p className={classes.p}>
              Mon histoire… <br></br>
              Cadre de formation, j’ai travaillé 20 ans en tant que salarié dans
              le monde de l’entreprise sur des postes à responsabilité dans le
              domaine de la restauration.
              <br></br> Au cours de mon chemin, certains évènements ont
              bouleversé ma vie, un épuisement professionnel, un licenciement
              suivi d’un divorce. Des électrochocs qui me poussent à reprendre
              le contrôle de ma vie, à me reconnecter à moi-même, à ma joie
              intérieure. Passer du rôle de victime à celui de guide,<br></br>
              C´est bien là, la source de ma reconversion, une nouvelle approche
              axée vers le bien-être, l´équilibre l´accompagnement et le
              coaching. <br></br>Après des années d´apprentissage, de pratique
              et de découverte, ma reconversion fut complétée par l´ouverture de
              mon cabinet IKDO® Zen en 2006.<br></br> Je continue de développer
              mon activité avec l´ouverture de mon nouvel atelier bien – être à
              Cormont. <br></br> <br></br> Aujourd´hui en moi réside l´envie de
              partager avec vous toutes ces réussites et ces difficultés
              rencontrées tout au long de mon parcours. L’envie de réveiller
              cette joie qui sommeille en chacun de nous, d’activer son énergie,
              de la laisser vivre, de connaitre son potentiel.
              <br></br>
              Mon parcours est simplement le fruit d´une recherche de paix et
              d´équilibre intérieur que je vous invite á partager. Je veux vous
              donner toutes les clés pour que vous puissiez enfin prendre votre
              vie en main, honorer votre existence et vous sentir libres,
              vivants, pour pouvoir enfin vivre pleinement. Que chacun puisse
              acquérir cette autonomie, se reconnecter à sa puissance
              intérieure, ce feu, cette joie, cet amour et cette lumière qui
              nous anime chaque jour et nous donne tout simplement envie de
              soulever des montagnes et de donner de l’Amour !
            </p>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default SectionOne;
