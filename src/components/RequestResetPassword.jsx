import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import TopBar from "../home/sections/TopBar";
import { makeStyles } from "@material-ui/core/styles";

import Alert from "@material-ui/lab/Alert";
import { useForm } from "react-hook-form";
import { Grid, Button, Card, TextField, CssBaseline } from "@material-ui/core";

import AuthService from "../services/auth.service";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  title: {
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: "normal",
    textAlign: "center",
    width: "51%",
    marginTop: "2em",
  },

  paper: {
    marginTop: "9em",
    display: "flex",
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

  submit: {
    margin: theme.spacing(3, 0, 2),
    color: "white",
  },
}));

const RequestResetPassword = (props) => {
  const classes = useStyles();

  const { handleSubmit, register, errors } = useForm();
  const [message, setMessage] = useState("");
  const required = "Veuillez saisir votre adresse e-mail";

  const [emailForgot, setEmailForgot] = useState("");

  // Error Component
  const errorMessage = (error) => {
    return <Alert severity="error">{error} </Alert>;
  };

  const onChangeEmailForgot = (e) => {
    const email = e.target.value;
    setEmailForgot(email);
  };

  const handleResetRequest = (e) => {
    //e.preventDefault();

    setMessage("");

    AuthService.resetRequest(emailForgot)
      .then(() => {
        setMessage("E-mail de réinitialisation de mot de passe envoyé!");
      })
      .catch((error) => {
        setMessage("Un problème est survenu ou email n'existe pas");
      });
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
                  Veuillez saisir votre adresse email
                </h6>

                <form onSubmit={handleSubmit(handleResetRequest)}>
                  <div>
                    {message && <Alert severity="info">{message}</Alert>}
                  </div>

                  {errors.emailForgot &&
                    errors.emailForgot.type === "required" &&
                    errorMessage(required)}

                  <TextField
                    placeholder="saisir votre adresse email"
                    className={classes.input}
                    name="emailForgot"
                    value={emailForgot}
                    onChange={onChangeEmailForgot}
                    fullWidth
                    error={!!errors.emailForgot}
                    inputRef={register({ required: true })}
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Envoyer
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

export default RequestResetPassword;
