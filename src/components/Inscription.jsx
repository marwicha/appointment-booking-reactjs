import React, { useState, useRef } from "react";
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
    fontFamily: "LEMON MILK",
    margin: "3em",
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
    margin: theme.spacing(1),
    fontSize: "1.25em",
    color: "#217093",
    fontWeight: "500",
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

const requiredFieldsLogin = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Inscription = (props) => {
  const classes = useStyles();
  const { handleSubmit, register, errors } = useForm();

  // Error Messages
  const required = "Veuillez remplir tous les champs";
  const patternPhone = "Numéro de téléphone doit être un chiffre";
  const patternEmail = "Adresse email invalide";

  // Error Component
  const errorMessage = (error) => {
    return <Alert severity="error">{error} </Alert>;
  };

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

  const form = useRef();

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
    <div className="landing">
      <TopBar />
      <div className="section-box-inscription">
        <Container maxWidth="lg">
          <CssBaseline />
          <Grid container spacing={2} justify="center" align="center">
            <Grid item md={5} lg={5} sm={5}>
              <Card className={classes.paper}>
                <h5 className={classes.title}>
                  S'inscrire afin de prendre un rendez-vous
                </h5>

                <form
                  onSubmit={handleSubmit(handleRegister)}
                  noValidate
                  className="mt-5"
                >
                  {successful && (
                    <Alert severity="success">
                      Vous êtes inscrit avec success
                    </Alert>
                  )}

                  {((errors.name && errors.name.type === "required") ||
                    (errors.email && errors.email.type === "required") ||
                    (errors.phone && errors.phone.type === "required") ||
                    (errors.password && errors.password.type === "required")) &&
                    errorMessage(required)}

                  {errors.phone && errorMessage(patternPhone)}

                  {errors.email && errorMessage(patternEmail)}

                  <div>
                    <div>
                      <label> Nom et Prénom </label>
                      <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                          <PersonOutlineOutlined />
                        </Grid>

                        <Grid item>
                          <TextField
                            className={classes.input}
                            margin="normal"
                            fullWidth
                            value={name}
                            name="name"
                            onChange={onChangeName}
                            error={!!errors.name}
                            inputRef={register({ required: true })}
                          />
                        </Grid>
                      </Grid>
                    </div>

                    <div>
                      <label>Téléphone</label>
                      <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                          <PhoneOutlined />
                        </Grid>

                        <Grid item>
                          <TextField
                            className={classes.input}
                            fullWidth
                            name="phone"
                            margin="normal"
                            value={phone}
                            onChange={onChangePhone}
                            error={!!errors.phone}
                            inputRef={register({
                              required: true,
                              pattern: /\d+/,
                            })}
                          />
                        </Grid>
                      </Grid>
                    </div>

                    <br></br>

                    <div>
                      <label>E-mail</label>
                      <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                          <AlternateEmail />
                        </Grid>

                        <Grid item>
                          <TextField
                            className={classes.input}
                            margin="normal"
                            fullWidth
                            name="email"
                            value={email}
                            onChange={onChangeEmail}
                            error={!!errors.email}
                            inputRef={register({
                              required: true,
                              pattern:
                                /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                          />
                        </Grid>
                      </Grid>
                    </div>

                    <br></br>

                    <div>
                      <label>Mot de passe</label>
                      <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                          <LockOutlined />
                        </Grid>

                        <Grid item>
                          <TextField
                            className={classes.input}
                            fullWidth
                            margin="normal"
                            name="password"
                            value={password}
                            onChange={onChangePassword}
                            error={!!errors.password}
                            inputRef={register({ required: true })}
                          />
                        </Grid>
                      </Grid>
                    </div>

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

            <Grid item md={5} lg={5} sm={5}>
              <Card className={classes.paper}>
                <h5 className={classes.title}>Se connecter</h5>

                <form
                  onSubmit={handleLogin}
                  ref={form}
                  className={classes.form}
                >
                  <div>
                    {messageLogin && (
                      <Alert severity="error">{messageLogin}</Alert>
                    )}
                  </div>

                  <div className="form-group">
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
                          validations={[requiredFieldsLogin]}
                        />
                      </Grid>
                    </Grid>
                  </div>

                  <br></br>

                  <div className="form-group">
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
                          validations={[requiredFieldsLogin]}
                        />
                      </Grid>
                    </Grid>
                  </div>

                  <div className="form-group">
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                    >
                      <span> Connecter </span>
                    </Button>
                  </div>
                </form>
              </Card>
            </Grid>
          </Grid>
          <Box mt={2}>
            <Copyright />
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default Inscription;
