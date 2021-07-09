import React, { useState, useEffect } from "react";

import PrestationService from "../../services/prestation.service";
import { useForm } from "react-hook-form";
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
  const { handleSubmit, register, errors } = useForm();

  const [prestations, setPrestations] = useState([]);
  const [namePrestation, setNamePrestation] = useState("");
  const [pricePrestation, setPricePrestation] = useState("");

  useEffect(() => {
    PrestationService.getAllPrestations().then((response) => {
      setPrestations(response);
    });
  }, []);

  const addPrestation = (e) => {
    const data = {
      name: namePrestation,
      price: pricePrestation,
    };

    PrestationService.createPrestation(data)
      .then(() => {
        PrestationService.getAllPrestations().then((response) => {
          setPrestations(response);
        });
      })
      .catch((e) => {
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
      <Grid container justify="center" align="center">
        <Grid item md={10} xs={12}>
          <Card>
            <CardHeader subheader="Ajouter une prestation" />

            <CardContent>
              <form onSubmit={handleSubmit(addPrestation)} noValidate>
                <Box align="center">
                  <TextField
                    placeholder="Nom de la prestation"
                    name="namePrestation"
                    value={namePrestation}
                    type="text"
                    onChange={(e) => setNamePrestation(e.target.value)}
                    error={!!errors.namePrestation}
                    helperText={
                      errors.namePrestation?.type &&
                      errors.namePrestation?.message
                    }
                    inputRef={register({
                      required: "La prestation est obligatoire",
                      maxLength: {
                        value: 20,
                        message:
                          "Le nom de la prestation doit contenir au max 20 caracteres",
                      },
                    })}
                  />

                  <br></br>
                  <br></br>

                  <TextField
                    placeholder="Prix de la prestation"
                    name="pricePrestation"
                    value={pricePrestation}
                    type="number"
                    onChange={(e) => setPricePrestation(e.target.value)}
                    error={!!errors.pricePrestation}
                    helperText={
                      errors.pricePrestation?.type &&
                      errors.pricePrestation?.message
                    }
                    inputRef={register({
                      required: "Le prix est obligatoire",
                    })}
                  />
                </Box>
                <br></br>

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.btn}
                >
                  Valider
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container justify="center" align="center" spacing={2}>
        {prestations.map((prestation, index) => (
          <Grid key={index} item md={3} xs={12}>
            <Box mt={2}>
              <Card>
                <CardHeader subheader={prestation.name} />
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
