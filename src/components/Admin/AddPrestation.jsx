import React, { useState, useEffect } from "react";

import { toast } from "react-toastify";
import PrestationService from "../../services/prestation.service";

import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Container,
  Card,
  CardHeader,
  CardContent,
  Button,
  Box,
  TextField,
  Divider,
} from "@material-ui/core";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  btn: {
    color: "white",
    backgroundColor: "#4b9fbc",
  },
}));

const AddPrestation = () => {
  const classes = useStyles();

  const [prestations, setPrestations] = useState([]);
  const [namePrestation, setNamePrestation] = useState("");
  const [pricePrestation, setPricePrestation] = useState("");

  useEffect(() => {
    PrestationService.getAllPrestations().then((response) => {
      setPrestations(response);
    });
  }, []);

  const addPrestation = () => {
    const data = {
      name: namePrestation,
      price: pricePrestation,
    };

    PrestationService.createPrestation(data)
      .then((response) => {
        toast.success("Crée avec success!");
      })
      .then(() => {
        PrestationService.getAllPrestations().then((response) => {
          setPrestations(response);
        });
      })
      .catch((e) => {
        toast.error("erreur");
        console.log(e);
      });
  };

  const deletePrestation = (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Etes vous sûre de vouloir supprimer cette prestation ?")) {
      PrestationService.deletePrestation(id).then(() => {
        setPrestations(prestations.filter((element) => element._id !== id));
      });
    }
  };

  return (
    <Container maxWidth="lg">
      <Grid container justify="flex-start" align="center">
        <Grid item md={8} lg={8} sm={8}>
          <Card>
            <CardHeader
              style={{
                backgroundColor: "#dfe5e6",
                color: "black",
              }}
              subheader="Ajouter une prestation"
            />

            <CardContent>
              <Box align="center">
                <TextField
                  placeholder="Nom de la prestation"
                  name="namePrestation"
                  value={namePrestation}
                  onChange={(e) => setNamePrestation(e.target.value)}
                />

                <br></br>
                <br></br>

                <TextField
                  placeholder="Prix de la prestation"
                  name="pricePrestation"
                  value={pricePrestation}
                  onChange={(e) => setPricePrestation(e.target.value)}
                />
              </Box>
              <br></br>

              <Button
                variant="contained"
                color="primary"
                className={classes.btn}
                onClick={addPrestation}
              >
                Valider
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container justify="flex-start" align="center" spacing={2}>
        {prestations.map((prestation, index) => (
          <Grid key={index} item md={3} xs={12}>
            <Box mt={2}>
              <Card>
                <CardHeader
                  style={{
                    color: "black",
                  }}
                  subheader={prestation.name}
                />
                <Divider />

                <CardContent>{prestation.price} EUR</CardContent>

                <Button
                  color="secondary"
                  onClick={() => deletePrestation(prestation._id)}
                >
                  Supprimer
                </Button>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AddPrestation;
