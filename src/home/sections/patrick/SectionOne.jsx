import React from "react";
import { Container, Box, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  container: {
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)",
    background: "#FAFBFF",
    padding: "2rem",
    borderRadius: "0px 50px",
    maxWidth: "1200px",
    margin: "0 auto",
    boxSizing: "border-box",
  },
  p: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "1em",
    lineHeight: "30px",
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
      <Box pt={6} textAlign="center">
        <img
          alt=""
          src="/assets/images/patrick.png"
          className={classes.avatar}
        />
        <Typography variant="h5" component="h5" gutterBottom={true}>
          Patrick Caillier
        </Typography>
      </Box>

      <Container maxWidth="md" className={classes.container}>
        <Typography variant="body2" component="span" gutterBottom={true}>
          Qui suis-je ?
        </Typography>
        <Box mt={5} textAlign="center" justifyContent="center">
          <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
              <h4 className={classes.p}>
                Mon histoire… <br></br>
                Cadre de formation, j'ai travaillé 20 ans en tant que salarié
                dans le monde de l'entreprise sur des postes à responsabilité
                dans le domaine de la restauration.
                <br></br> Au cours de mon chemin, certains évènements ont
                bouleversé ma vie, un épuisement professionnel, un licenciement
                suivi d'un divorce. <br></br>Des électrochocs qui me poussent à
                reprendre le contrôle de ma vie, à me reconnecter à moi-même, à
                ma joie intérieure. Passer du rôle de victime à celui de guide,
                C'est bien là, la source de ma reconversion, une nouvelle
                approche axée vers le bien-être, l'équilibre l'accompagnement et
                le coaching. <br></br> Après des années d'apprentissage, de
                pratique et de découverte, ma reconversion fut complétée par
                l'ouverture de mon cabinet IKDO® Zen en 2006.<br></br>
              </h4>
            </Grid>

            <Grid item md={6} xs={12}>
              <h4 className={classes.p}>
                Je continue de développer mon activité avec l'ouverture de mon
                nouvel atelier bien–être à Cormont, en moi réside l'envie de
                partager avec vous toutes ces réussites et ces difficultés
                rencontrées tout au long de mon parcours. L'envie de réveiller
                cette joie qui sommeille en chacun de nous, d’activer son
                énergie, de la laisser vivre, de connaitre son potentiel.
                <br></br>
                Mon parcours est simplement le fruit d'une recherche de paix et
                d'équilibre intérieur que je vous invite á partager. Je veux
                vous donner toutes les clés pour que vous puissiez enfin prendre
                votre vie en main, honorer votre existence et vous sentir
                libres, vivants, pour pouvoir enfin vivre pleinement. Que chacun
                puisse acquérir cette autonomie, se reconnecter à sa puissance
                intérieure, ce feu, cette joie, cet amour et cette lumière qui
                nous anime chaque jour et nous donne tout simplement envie de
                soulever des montagnes et de donner de l'amour !
              </h4>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default SectionOne;
