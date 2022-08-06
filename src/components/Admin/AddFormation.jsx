import React, { useState } from "react";

import { toast } from "react-toastify";
import AdminService from "../../services/admin.service";
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
  TextareaAutosize,
  Divider,
} from "@material-ui/core";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  btn: {
    color: "white",
    backgroundColor: "#4b9fbc",
  },
}));

const AddFormation = () => {
  const classes = useStyles();
  const { handleSubmit, register, errors } = useForm();

  const [name, setName] = useState("");
  const [dateDebut, setDateDebut] = useState("");
  const [dateFin, setDateFin] = useState("");
  const [description, setDescription] = useState("");
  const [prix, setPrix] = useState("");

  const addFormation = () => {
    const data = {
      name: name,
      dateDebut: dateDebut,
      dateFin: dateFin,
      description: description,
      prix: prix,
    };

    AdminService.createFormation(data)
      .then(() => {
        alert("Formation crée avec success!");
      })
      .catch((e) => {
        toast.error("erreur");
        console.log(e);
      });
  };

  return (
    <Container maxWidth="lg">
      <Grid container justify="center" align="center">
        <Grid item md={10} xs={12}>
          <Card>
            <CardHeader subheader="Ajouter une formation" />

            <CardContent>
              <form onSubmit={handleSubmit(addFormation)} noValidate>
                <Box align="center">
                  <label>Nom</label>
                  <TextField
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    error={!!errors.name}
                    helperText={errors.name?.type && errors.name?.message}
                    inputRef={register({
                      required: "Le nom est obligatoire",
                      maxLength: {
                        value: 20,
                        message: "Le nom doit contenir au max 20 caracteres",
                      },
                    })}
                  />

                  <br></br>
                  <p>test2</p>
                  <label>Date de début</label>
                  <TextField
                    name="dateDebut"
                    value={dateDebut}
                    type="date"
                    onChange={(e) => setDateDebut(e.target.value)}
                    error={!!errors.dateDebut}
                    helperText={
                      errors.dateDebut?.type && errors.dateDebut?.message
                    }
                    inputRef={register({
                      required: "La date de début est obligatoire",
                    })}
                  />

                  <br></br>
                  <label>Date de fin</label>
                  <TextField
                    name="dateFin"
                    value={dateFin}
                    type="date"
                    onChange={(e) => setDateFin(e.target.value)}
                    error={!!errors.dateFin}
                    helperText={errors.dateFin?.type && errors.dateFin?.message}
                    inputRef={register({
                      required: "La date de fin est obligatoire",
                    })}
                  />
                  <br></br>
                  <label>Prix</label>
                  <TextField
                    name="prix"
                    value={prix}
                    type="number"
                    onChange={(e) => setPrix(e.target.value)}
                    error={!!errors.prix}
                    helperText={errors.prix?.type && errors.prix?.message}
                    inputRef={register({
                      required: "Le prix est obligatoire",
                    })}
                  />
                  <br></br>

                  <label>Description</label>
                  <TextareaAutosize
                    name="description"
                    value={description}
                    type="text"
                    onChange={(e) => setDescription(e.target.value)}
                    error={!!errors.description}
                    helperText={
                      errors.description?.type && errors.description?.message
                    }
                    inputRef={register({
                      required: "La description est obligatoire",
                    })}
                  />
                </Box>

                <Divider></Divider>
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
    </Container>
  );
};

export default AddFormation;
