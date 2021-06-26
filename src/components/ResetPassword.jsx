import React, { useState, useRef } from "react";
import Container from "@material-ui/core/Container";
import TopBar from "../home/sections/TopBar";
import { makeStyles } from "@material-ui/core/styles";

import Alert from "@material-ui/lab/Alert";
import { useForm } from "react-hook-form";
import { Grid, Button, Card, TextField, CssBaseline } from "@material-ui/core";

import AuthService from "../services/auth.service";

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

const getParamFromUrl = (paramName) => {
  // firstname=""&lastname=""&email=""
  const paramUrl = window.location.href.split("?")[1];

  // firstname="" : lastname="" : email=""
  const splitedParam = paramUrl.split("&");

  let desiredParam = "";

  for (let i = 0; i < splitedParam.length; i++) {
    //  firstname==""
    const paramValueSplited = splitedParam[i].split("=");

    // paramValueSplited[0] == firstname
    if (paramValueSplited[0].trim() == paramName) {
      // paramValueSplited[1] == ""
      desiredParam = paramValueSplited[1];
    }
  }

  return desiredParam;
};

const ResetPassword = (props) => {
  const classes = useStyles();

  const { handleSubmit, register, errors } = useForm();
  const [message, setMessage] = useState("");
  const required = "Veuillez saisir votre E-mail";

  const [password, setPassword] = useState("");

  // Error Component
  const errorMessage = (error) => {
    return <Alert severity="error">{error} </Alert>;
  };

  const onChangePassword = (e) => {
    const pass = e.target.value;
    setPassword(pass);
  };

  const handleResetPassword = (e) => {
    setMessage("");
    const token = getParamFromUrl("token");
    const userId = getParamFromUrl("id");

    AuthService.resetPassword(userId, token, password).then(
      () => {
        alert("Ok");
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setMessage(resMessage);
      }
    );
  };

  return (
    <div className="landing">
      <TopBar />
      <div className="section-box-inscription">
        <Container maxWidth="md">
          <CssBaseline />
          <Grid container justify="center" align="center">
            <Grid item md={9} lg={9} sm={9}>
              <Card className={classes.paper}>
                <h6 className={classes.title}>
                  Veuillez entrer votre nouvelle mot de passe
                </h6>

                <form onSubmit={handleSubmit(handleResetPassword)}>
                  <div>
                    {message && <Alert severity="info">{message}</Alert>}
                  </div>

                  {errors.password &&
                    errors.password.type === "required" &&
                    errorMessage(required)}

                  <TextField
                    placeholder="Mot de passe"
                    className={classes.input}
                    name="password"
                    value={password}
                    onChange={onChangePassword}
                    fullWidth
                    error={!!errors.password}
                    inputRef={register({ required: true })}
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Valider
                  </Button>
                </form>
              </Card>
              <div></div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default ResetPassword;
