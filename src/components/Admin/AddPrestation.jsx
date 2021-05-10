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
  const [prestation, setPrestation] = useState("");

  useEffect(() => {
    PrestationService.getAllPrestations().then((response) => {
      setPrestations(response);
    });
  }, []);

  const addPrestation = () => {
    const data = {
      name: prestation,
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
        PrestationService.getAllPrestations().then((response) => {
          setPrestations(response);
        });
      });
    }
  };

  return (
    <Container maxWidth="lg">
      <Grid container justify="flex-start" align="center" spacing={2}>
        <Grid item md={6} xs={12}>
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
                  name="prestation"
                  value={prestation}
                  onChange={(e) => setPrestation(e.target.value)}
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

        <Grid item md={6} xs={12}>
          <Card>
            <table>
              <tr>
                <th>Nom</th>
                <th>Action</th>
              </tr>

              {prestations.map((prestation, index) => (
                <tr>
                  <td>{prestation.name}</td>
                  <td>
                    <Button
                      color="secondary"
                      onClick={() => deletePrestation(prestation.id)}
                    >
                      Supprimer
                    </Button>
                  </td>
                </tr>
              ))}
            </table>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddPrestation;
