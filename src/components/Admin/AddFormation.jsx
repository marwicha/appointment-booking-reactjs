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
  const [dateText, setDateText] = useState("");
  const [description, setDescription] = useState("");
  const [prix, setPrix] = useState("");

  const addFormation = () => {
    const data = {
      name: name,
      dateText: dateText,
      description: description,
      prix: prix,
    };

    AdminService.createFormation(data)
      .then(() => {
        toast.success("Formation crée avec success!");
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
                  <TextField
                    placeholder="Nom"
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
                  <br></br>
                  <TextField
                    placeholder="Date"
                    name="dateText"
                    value={dateText}
                    type="date"
                    onChange={(e) => setDateText(e.target.value)}
                    error={!!errors.dateText}
                    helperText={
                      errors.dateText?.type && errors.dateText?.message
                    }
                    inputRef={register({
                      required: "La date est obligatoire",
                    })}
                  />
                  <br></br>
                  <br></br>
                  <TextField
                    placeholder="Prix"
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
                  <br></br>

                  <TextareaAutosize
                    placeholder="Description"
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
