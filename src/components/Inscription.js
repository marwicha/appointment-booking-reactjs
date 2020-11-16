import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import Container from '@material-ui/core/Container';
import TopBar from "../../src/home/sections/TopBar";
import PersonOutlineOutlined from '@material-ui/icons/PersonOutlineOutlined';
import AlternateEmail from "@material-ui/icons/AlternateEmail"
import PhoneOutlined from '@material-ui/icons/PhoneOutlined'
import LockOutlined from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from "react-router-dom";
import Alert from '@material-ui/lab/Alert';
import clsx from "clsx";

import { 
   Typography,Box,
   Grid, Button, 
   Card, Avatar,
   TextField, CssBaseline, 
   Checkbox, Link 
  
  }


 from "@material-ui/core";

import AuthService from "../services/auth.service";

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

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const Inscription = (props) => {
  const form = useRef();
  const checkBtn = useRef();
  const classes = useStyles();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
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
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(username, email, password).then(
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
          <LockOutlined />
        </Avatar>
    
        <h5 className={classes.title}>
          S'inscrire
        </h5>

        <Form onSubmit={handleRegister} ref={form} className={classes.form}>

            <div>
           {message && (
            <Alert severity={successful ? "success" : "error" }>
                {message}
                
                </Alert>
          )}

          </div>

          {!successful && (
            <div>
              <div className="form-group">
                <label>Nom et Prenom</label>
                 <Grid container spacing={1} alignItems="flex-end">
        
          <Grid item>
            <PersonOutlineOutlined />
          </Grid>

           <Grid item>

             <TextField
                  className={classes.input}
                  fullWidth
                  required
                  name="username"
                  value={username}
                  onChange={onChangeUsername}
                  validations={[required, vusername]}
              />

            </Grid>

            </Grid>
              
              </div>

                <div className="form-group">
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
                  value={username}
                  onChange={onChangeUsername}
                  validations={[required, vusername]}
              />

            </Grid>

            </Grid>
              
              </div>

               <br></br>

              <div className="form-group">
               <label>Email</label>
          <Grid container spacing={1} alignItems="flex-end">
        
          <Grid item>
            <AlternateEmail />
          </Grid>

          <Grid item>
                <TextField
                  className={classes.input}
                  name="email"
                  fullWidth
                  value={email}
                  onChange={onChangeEmail}
                  validations={[required, validEmail]}
                />
          </Grid>
          </Grid>
         </div>


          <br></br>

              <div className="form-group">
                <label>Mot de passe</label>
          <Grid container spacing={1} alignItems="flex-end">
        
          <Grid item>
            <LockOutlined />
          </Grid>

          <Grid item>
                <TextField
                  className={classes.input}
                  name="password"
                  fullWidth
                  value={password}
                  onChange={onChangePassword}
                  validations={[required, vpassword]}
                />

                </Grid>
                </Grid>
              </div>

            <Button  
             type="submit"
             fullWidth
             variant="contained" color="primary"
             className={classes.submit} >
             
              <span> S'inscrire </span>
            </Button>

            </div>
          )}

           <Grid container>
            <Grid item xs align="right">
              <NavLink to="/Authentification">
                <p> <a> Se connecter </a> </p>
              </NavLink>
            </Grid>
          </Grid>
          

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

export default Inscription;