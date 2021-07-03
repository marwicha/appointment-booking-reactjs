import React, { useState, useEffect } from "react";

import { toast } from "react-toastify";
import AdminService from "../../services/admin.service";

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
  textArea: {
    maxWidth: 200,
  },
}));

const AddFormation = () => {
  const classes = useStyles();

  const [formations, setFormations] = useState([]);
  const [name, setName] = useState("");
  const [dateText, setDateText] = useState("");
  const [description, setDescription] = useState("");
  const [prix, setPrix] = useState("");

  useEffect(() => {
    AdminService.getAllFormations().then((response) => {
      setFormations(response);
    });
  }, []);

  const addFormation = () => {
    const data = {
      name: name,
      dateText: dateText,
      description: description,
      prix: prix,
    };

    AdminService.createFormation(data)
      .then((response) => {
        toast.success("Crée avec success!");
      })
      .then(() => {
        AdminService.getAllFormations().then((response) => {
          setFormations(response);
        });
      })
      .catch((e) => {
        toast.error("erreur");
        console.log(e);
      });
  };

  const deleteFormation = (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Etes vous sûre de vouloir supprimer cette formation ?")) {
      AdminService.deleteFormation(id).then(() => {
        setFormations(formations.filter((element) => element._id !== id));
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
              subheader="Ajouter une formation"
            />

            <CardContent>
              <Box align="center">
                <TextField
                  placeholder="Nom"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <br></br>
                <br></br>
                <TextField
                  placeholder="Date"
                  name="dateText"
                  value={dateText}
                  onChange={(e) => setDateText(e.target.value)}
                />

                <br></br>
                <br></br>

                <TextField
                  placeholder="Description"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />

                <br></br>
                <br></br>

                <TextField
                  placeholder="Prix"
                  name="prix"
                  value={prix}
                  onChange={(e) => setPrix(e.target.value)}
                />
              </Box>
              <br></br>

              <Button
                variant="contained"
                color="primary"
                className={classes.btn}
                onClick={addFormation}
              >
                Valider
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid
        container
        justify="flex-start"
        align="center"
        spacing={2}
      >
        {formations.map((formation, index) => (
          <Grid item md={3} xs={12}>
            <Box mt={2}>
              <Card>
                <CardHeader
                  style={{
                    color: "black",
                  }}
                  subheader={formation.name}
                />
                <Divider />
                <CardContent>
                  {formation.dateText}

                  <br></br>
                  {formation.description}
                  <br></br>
                  {formation.prix}
                </CardContent>

                <Button
                  color="secondary"
                  onClick={() => deleteFormation(formation._id)}
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

export default AddFormation;
