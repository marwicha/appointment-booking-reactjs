import React, { useState, useEffect } from "react";

import { toast } from "react-toastify";
import AdminService from "../../services/admin.service";

import TextareaAutosize from "@material-ui/core/TextareaAutosize";
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
    if (confirm("Etes vous sûre de vouloir supprimer cette prestation ?")) {
      AdminService.deleteFormation(id).then(() => {
        AdminService.getAllFormations().then((response) => {
          setFormations(response);
        });
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
                  placeholder="Nom de la formation"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <br></br>
                <br></br>
                <TextField
                  placeholder="Date de la formation"
                  name="dateText"
                  value={dateText}
                  onChange={(e) => setDateText(e.target.value)}
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
        md={12}
        xs={12}
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
                <CardContent>{formation.dateText}</CardContent>

                <Button
                  color="secondary"
                  onClick={() => deleteFormation(formation.id)}
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
