import React, { useState, useRef } from "react";
import AuthService from "../services/auth.service";
import AppointmentService from "../services/appointment.service";
import { Typography,Box, Grid, Button, Card, Avatar, CssBaseline, TextField, Link}
 from "@material-ui/core";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import Alert from '@material-ui/lab/Alert';

import PersonOutlineOutlined from '@material-ui/icons/PersonOutlineOutlined';
import LockOutlined from '@material-ui/icons/LockOutlined';
import Lock from '@material-ui/icons/Lock';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TopBar from "../home/sections/TopBar";


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
    backgroundColor: "#78b9dc",
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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

      AuthService.login(email, password).then(
        () => {
          props.history.push("/compte");
          window.location.reload();
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
    <div className="section-intro-formations">
    <Container component="main" maxWidth="xs" >
      <CssBaseline />
      <Card className={classes.paper}>
        <Avatar  className={clsx(classes.avatar, "md-48")}>
          <LockOutlined />
        </Avatar>
    
        <h5 className={classes.title}>
          Se connecter
        </h5>

        <form onSubmit={handleLogin} ref={form} className={classes.form}>

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
            <PersonOutlineOutlined />
          </Grid>

           <Grid item>
         
            <TextField
              className={classes.input}
              fullWidth
              name="email"
              value={email}
              onChange={onChangeEmail}
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
             >
              <span> Connecter </span>
            </Button>

            <Grid container>
            <Grid item xs>
              <NavLink to="">
                <p> Mot de passe oubliée? </p>
              </NavLink>
            </Grid>
            <Grid item>
              <NavLink to="/Inscription">
                <p> S'inscrire </p>
              </NavLink>
            </Grid>
          </Grid>

          </div>
          
        </form>
     </Card>

      <Box mt={2}>
        <Copyright />
      </Box>
     </Container>
     </div>
     </div>
  );
};

export default Authentification;