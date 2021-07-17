import React, { useState } from "react";
import UserService from "../../services/user.service";
import AuthService from "../../services/auth.service";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Container,
  Card,
  CardHeader,
  CardContent,
  TextField,
  Button,
  Box,
} from "@material-ui/core";
import TopBar from "home/sections/TopBar";

import { useForm } from "react-hook-form";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  btn: {
    color: "white",
    backgroundColor: "#4b9fbc",
  },

  root: {
    paddingTop: "5%",
  },
}));

const UpdateProfile = (props) => {
  const classes = useStyles();
  const { handleSubmit, register, errors } = useForm();
  const userTest = AuthService.getCurrentUser();

  const initialState = {
    id: userTest.id,
    email: userTest.email,
    name: userTest.name,
    phone: userTest.phone,
  };

  const [user, setUser] = useState(initialState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const update = () => {
    UserService.updateAccount(user.id, user)
      .then(() => {
        alert("Vos informations sont mis à jour");
        localStorage.setItem("user", JSON.stringify({ ...user }));
        props.history.push("/compte");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <TopBar />
      <Container maxWidth="md" className={classes.root}>
        <Grid container justify="center" align="center">
          <Grid item md={6} xs={12}>
            <Card>
              <CardHeader subheader="Modifier vos informations" />

              <CardContent>
                <form onSubmit={handleSubmit(update)} noValidate>
                  <Box align="center">
                    <TextField
                      fullWidth
                      name="name"
                      value={user.name}
                      onChange={handleInputChange}
                      error={!!errors.name}
                      helperText={errors.name?.type && errors.name?.message}
                      inputRef={register({
                        required: "Votre nom et prénom est obligatoire",
                      })}
                    />

                    <br></br>
                    <br></br>

                    <TextField
                      fullWidth
                      name="email"
                      type="email"
                      value={user.email}
                      onChange={handleInputChange}
                      error={!!errors.email}
                      helperText={errors.email?.type && errors.email?.message}
                      inputRef={register({
                        required: "Votre email est obligatoire",
                      })}
                    />

                    <br></br>
                    <br></br>
                    <TextField
                      fullWidth
                      name="phone"
                      type="number"
                      value={user.phone}
                      onChange={handleInputChange}
                      error={!!errors.phone}
                      helperText={errors.phone?.type && errors.phone?.message}
                      inputRef={register({
                        required: "Votre téléphone est obligatoire",
                      })}
                    />
                  </Box>
                  <br></br>
                  <br></br>

                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.btn}
                    type="submit"
                  >
                    Valider
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default UpdateProfile;
