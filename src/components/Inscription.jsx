import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import TopBar from "../home/sections/TopBar";
import PersonOutlineOutlined from "@material-ui/icons/PersonOutlineOutlined";
import AlternateEmail from "@material-ui/icons/AlternateEmail";
import PhoneOutlined from "@material-ui/icons/PhoneOutlined";
import LockOutlined from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import Lock from "@material-ui/icons/Lock";
import { useForm } from "react-hook-form";

import {
  Typography,
  Box,
  Grid,
  Button,
  Card,
  TextField,
  CssBaseline,
  Link,
} from "@material-ui/core";

import AuthService from "../services/auth.service";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://www.linkedin.com/in/marwa-rekik-06992169/"
      >
        Marwa
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles(({ palette, ...theme }) => ({
  title: {
    fontFamily: "Roboto",
    margin: "2em",
    width: "51%",
  },

  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#fff",
    borderRadius: "10px",
    width: "100%",
    border: "solid 2px #DDD",
  },

  input: {
    fontSize: "1.5em",
    fontWeight: "600",
    fontFamily: "Roboto",
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#78b9dc",
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
    color: "white",
  },
}));

const Inscription = (props) => {
  const classes = useStyles();
  const { handleSubmit, register, errors } = useForm();

  //states
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const [messageLogin, setMessageLogin] = useState("");

  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const onChangePhone = (e) => {
    const phone = e.target.value;
    setPhone(phone);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    //e.preventDefault();

    setMessage("");
    setSuccessful(false);

    AuthService.register(name, phone, email, password).then(
      (response) => {
        setMessage(response.data.message);
        setSuccessful(true);
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setMessage(resMessage);
        setSuccessful(false);
      }
    );
  };

  /// Login

  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const onChangeEmailLogin = (e) => {
    const email = e.target.value;
    setEmailLogin(email);
  };

  const onChangePasswordLogin = (e) => {
    const password = e.target.value;
    setPasswordLogin(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessageLogin("");
    setSuccessful(false);

    AuthService.login(emailLogin, passwordLogin).then(
      () => {
        window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setMessageLogin(resMessage);
        setSuccessful(false);
      }
    );
  };

  return (
    <Container className="landing">
      <TopBar />
      <div className="section-box-inscription">
        <Container maxWidth="lg">
          <CssBaseline />
          <Grid container spacing={2} justify="center" align="center">
            <Grid item md={5} xs={12}>
              <Card className={classes.paper}>
                <h5 className={classes.title}>
                  Merci de vous s'inscrire afin de prendre un rendez-vous
                </h5>

                <form
                  onSubmit={handleSubmit(handleRegister)}
                  noValidate
                  className="mt-5"
                >
                  <div>
                    {message && <Alert severity="info">{message}</Alert>}
                  </div>

                  <div>
                    <label> Nom et Prénom </label>
                    <Grid container spacing={1} alignItems="center">
                      <Grid item>
                        <PersonOutlineOutlined />
                      </Grid>

                      <Grid item>
                        <TextField
                          className={classes.input}
                          fullWidth={true}
                          value={name}
                          name="name"
                          type="text"
                          onChange={onChangeName}
                          error={!!errors.name}
                          helperText={errors.name?.type && errors.name?.message}
                          inputRef={register({
                            required: "Votre nom complet est obligatoire",
                            minLength: {
                              value: 2,
                              message:
                                "Le nom doit contenir au moins 2 caracteres",
                            },
                            maxLength: {
                              value: 20,
                              message:
                                "Le nom doit contenir au max 20 caracteres",
                            },
                          })}
                        />
                      </Grid>
                    </Grid>

                    <label>Téléphone</label>
                    <Grid container spacing={1} alignItems="center">
                      <Grid item>
                        <PhoneOutlined />
                      </Grid>

                      <Grid item>
                        <TextField
                          className={classes.input}
                          fullWidth={true}
                          name="phone"
                          type="number"
                          value={phone}
                          onChange={onChangePhone}
                          error={!!errors.phone}
                          helperText={
                            errors.phone?.type && errors.phone?.message
                          }
                          inputRef={register({
                            required: "Le téléphone est obligatoire",
                          })}
                        />
                      </Grid>
                    </Grid>

                    <label>E-mail</label>
                    <Grid container spacing={1} alignItems="center">
                      <Grid item>
                        <AlternateEmail />
                      </Grid>

                      <Grid item>
                        <TextField
                          className={classes.input}
                          fullWidth={true}
                          type="email"
                          name="email"
                          value={email}
                          onChange={onChangeEmail}
                          error={!!errors.email}
                          helperText={
                            errors.email?.type && errors.email?.message
                          }
                          inputRef={register({
                            required: "L'email est obligatoire",
                            pattern: {
                              value: /^\S+@\S+$/i,
                              message: "l'adresse email invalide",
                            },
                          })}
                        />
                      </Grid>
                    </Grid>

                    <label>Mot de passe</label>
                    <Grid container spacing={1} alignItems="center">
                      <Grid item>
                        <LockOutlined />
                      </Grid>

                      <Grid item>
                        <TextField
                          className={classes.input}
                          fullWidth={true}
                          name="password"
                          value={password}
                          onChange={onChangePassword}
                          error={!!errors.password}
                          helperText={
                            errors.password?.type && errors.password?.message
                          }
                          inputRef={register({
                            required: "Le mot de passe est obligatoire",
                            minLength: {
                              value: 10,
                              message:
                                "Le mot de passe doit contenir au moins 10 caracteres",
                            },
                          })}
                        />
                      </Grid>
                    </Grid>

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                    >
                      <span> S'inscrire </span>
                    </Button>
                  </div>
                </form>
              </Card>
            </Grid>

            <Grid item md={5} xs={12}>
              <Card className={classes.paper}>
                <h5 className={classes.title}>Se connecter</h5>

                <form onSubmit={handleLogin} className={classes.form}>
                  <div>
                    {messageLogin && (
                      <Alert severity="error">{messageLogin}</Alert>
                    )}
                  </div>

                  <label>Email</label>
                  <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                      <PersonOutlineOutlined />
                    </Grid>

                    <Grid item>
                      <TextField
                        className={classes.input}
                        fullWidth
                        name="emailLogin"
                        value={emailLogin}
                        onChange={onChangeEmailLogin}
                      />
                    </Grid>
                  </Grid>

                  <br></br>

                  <label>Mot de passe</label>
                  <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                      <Lock />
                    </Grid>
                    <Grid item>
                      <TextField
                        className={classes.input}
                        name="passwordLogin"
                        fullWidth
                        type="password"
                        value={passwordLogin}
                        onChange={onChangePasswordLogin}
                      />
                    </Grid>
                  </Grid>

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    <span> Connecter </span>
                  </Button>
                </form>
              </Card>
              <div>
                <p>
                  <NavLink to="/reinitialiser-mot-de-passe">
                    Mot de passe oublié?
                  </NavLink>
                </p>
              </div>
            </Grid>
          </Grid>
          <Box mt={2}>
            <Copyright />
          </Box>
        </Container>
      </div>
    </Container>
  );
};

export default Inscription;
