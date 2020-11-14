import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth.service";
import { Typography,Box, Grid, Button, Card, Avatar, TextField, CssBaseline, FormControlLabel, Checkbox, Link}
 from "@material-ui/core";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import Alert from '@material-ui/lab/Alert';

import AccountCircle from '@material-ui/icons/AccountCircle';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Lock from '@material-ui/icons/Lock';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TopBar from "../../src/home/sections/TopBar";


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.linkedin.com/in/marwa-rekik-06992169/">
        Marwa 
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const useStyles = makeStyles(({ palette, ...theme }) => ({

"containerSection": {
   //backgroundColor: "#f5f5f8"
},

 title: {
  fontFamily: "LEMON MILK"
},

  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: "center",
    background: "#fff",
    borderRadius: "6px",
    width: "100%",
    border: "solid 1px #DDD"
  },

   input: {
    margin: theme.spacing(1),
    fontSize: "1.25em",
    color: "#217093",
    fontWeight: "700",
    fontFamily: "inherit"
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "red",
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
    padding: "3.5em"
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
    color: "white",
  },

}))

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Authentification = (props) => {

  const classes = useStyles()
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(username, password).then(
        () => {
          props.history.push("/prendre-rendez-vous");
          window.location.reload();
        },
        (error) => {
          const responseMessage = "Email ou mot de passe incorrect"
          error.response.status === 401 && setMessage(responseMessage)
        }
      );
    } else {
      setLoading(false);
    }
  };

  return (
    <div className="landing">
    <TopBar />
    <div className="section-intro-formations">
    <Container component="main" maxWidth="xs" className={classes.containerSection}>
      <CssBaseline />
      <Card className={classes.paper}>
        <Avatar  className={clsx(classes.avatar, "md-48")}>
          <LockOutlinedIcon />
        </Avatar>
        <br></br>

        <h5 className={classes.title}>
          Se connecter
        </h5>

        <Form onSubmit={handleLogin} ref={form} className={classes.form}>

          <div>
           {message && (
            <Alert severity="error">
                {message}
                
                </Alert>
          )}

          </div>

          <div className="form-group">
            <label>Email</label>
          <Grid container spacing={1} alignItems="flex-end">
        
          <Grid item>
            <AccountCircle />
          </Grid>

           <Grid item>
            <TextField
              className={classes.input}
              fullWidth
              name="username"
              value={username}
              onChange={onChangeUsername}
              validations={[required]}
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
             name="password"
             fullWidth
             type="password"
             value={password}
             onChange={onChangePassword}
             validations={[required]}
            />
             </Grid>
            </Grid>
          </div>

          <div className="form-group">
            <Button  
             type="submit"
             fullWidth
             variant="contained" color="primary"
             className={classes.submit} 
             disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span> Connecter </span>
            </Button>

            <Grid container>
            <Grid item xs>
              <Link>
                Mot de passe oubliée?
              </Link>
            </Grid>
            <Grid item>
              <Link>
                S'inscrire
              </Link>
            </Grid>
          </Grid>

          </div>

       
          
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
     </Card>

      <Box mt={8}>
        <Copyright />
      </Box>
     </Container>
     </div>
     </div>
  );
};

export default Authentification;