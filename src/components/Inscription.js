import React, { useState } from "react";
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

import {useForm} from 'react-hook-form'

import { 
   Typography,Box,
   Grid, Button, 
   Card, Avatar,
   TextField, CssBaseline, Link 
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
    border: "solid 2px #DDD"
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

}))

const Inscription = (props) => {
  const classes = useStyles();
  const { handleSubmit, register, errors } = useForm();

  // Error Messages
const required = "Veuillez remplir tous les champs";
const patternPhone = "Numéro de téléphone doit être un chiffre"
const patternEmail = "Adresse email invalide"


// Error Component
const errorMessage = error => {
  return <Alert severity="error">{error} </Alert>;
};

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

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

  return (
    <div className="landing">
    <TopBar />
    <div className="section-intro-formations">
    <Container maxWidth="sm">
      <CssBaseline />
      <Card className={classes.paper}>
        <Avatar  className={clsx(classes.avatar)}>
          <LockOutlined />
        </Avatar>
    
        <h5 className={classes.title}>
          S'inscrire afin de prendre un rendez-vous
        </h5>
        
        <form onSubmit={handleSubmit(handleRegister)} noValidate className="mt-5" >

        { successful && <Alert severity="success"> Vous êtes inscrit avec success </Alert> } 

        { ((errors.name && errors.name.type === "required" ) || (errors.email && errors.email.type === "required" ) || (errors.phone && errors.phone.type === "required") || (errors.password && errors.password.type === "required")
         ) && errorMessage(required)
        }

        { errors.phone && errorMessage(patternPhone)}

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
                  inputRef={register(
                    { required: true ,
                      pattern: /\d+/
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
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
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
             variant="contained" color="primary"
             className={classes.submit} >
             
              <span> S'inscrire </span>
            </Button>

            </div>

           <Grid container>
            <Grid item xs align="right">
              <NavLink to="/authentification">
                <p> Se connecter </p>
              </NavLink>
            </Grid>
          </Grid>
          

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

export default Inscription;