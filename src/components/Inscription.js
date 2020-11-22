import React, { useState, useRef } from "react";
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

//React Hooks Form validation
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";

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
        Ce champ est requis!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
       Ce n'est pas un email valide.
      </div>
    );
  }
};

const validateName = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        Le nom et prénom doivent comprendre entre 3 et 20 caractères.
      </div>
    );
  }
};

const validatePhone = (value) => {
  if (value.length > 8) {
    return (
      <div className="alert alert-danger" role="alert">
        Le numéro de téléphone ne doit pas dépasser 8 caractères.
      </div>
    );
  }
};


const validatePassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        Le mot de passe doit comporter entre 6 et 40 caractères.
      </div>
    );
  }
};

const Inscription = (props) => {
  const classes = useStyles();
  const { errors, register } = useForm({
    criteriaMode: "all"
  });

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
    e.preventDefault();

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
    <Container component="main" maxWidth="xs" className={classes.containerSection}>
      <CssBaseline />
      <Card className={classes.paper}>
        <Avatar  className={clsx(classes.avatar, "md-48")}>
          <LockOutlined />
        </Avatar>
    
        <h5 className={classes.title}>
          S'inscrire
        </h5>

        <form onSubmit={handleRegister} className={classes.form}>

           <ErrorMessage
             errors={errors}
             name="multipleErrorInput"
               render={({ messages }) => {
                 console.log("messages", messages);
                 return messages
                   ? Object.entries(messages).map(([type, message]) => (
                   <p key={type}>{message}</p>
                   ))
                    : null;
                     }}
                   />

      

          {!successful && (
            <div>
              <div className="form-group">
                <label>Nom et Prénom</label>
                 <Grid container spacing={1} alignItems="flex-end">
        
          <Grid item>
            <PersonOutlineOutlined />
          </Grid>

           <Grid item>

             <TextField
                  className={classes.input}
                  fullWidth
                  name="multipleErrorInput"
                  value={name}
                  onChange={onChangeName}
                  ref={register({
                        required: "Ce champ est obligatoire.",
                        maxLength: {
                        value: 20,
                        message: "Nom et Prénom ne doit pas dépasser 20 caractères."
                       }
                       })}
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
                  value={phone}
                  onChange={onChangePhone}
                  validations={[required, validatePhone]}
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
                  fullWidth
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required, validatePassword]}
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
                <p> Se connecter </p>
              </NavLink>
            </Grid>
          </Grid>
          

        </form>
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