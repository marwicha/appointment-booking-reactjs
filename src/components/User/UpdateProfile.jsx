import React, { useState, useEffect } from "react";
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
  Typography,
} from "@material-ui/core";
import TopBar from "home/sections/TopBar";

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
  const userTest = AuthService.getCurrentUser();

  const initialState = {
    id: userTest.id,
    name: userTest.name,
    email: userTest.email,
    phone: userTest.phone,
  };

  const [user, setUser] = useState(initialState);
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const update = () => {
    UserService.updateAccount(user.id, user)
      .then((response) => {
        setUser({ ...user });
        localStorage.setItem("user", JSON.stringify(user));
        props.history.push("/compte");

        setMessage("ok");
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
              <CardHeader
                style={{
                  backgroundColor: "#dfe5e6",
                  color: "black",
                }}
                subheader="Modifier vos informations"
              />

              <CardContent>
                <Box align="left">
                  <TextField
                    name="name"
                    value={user.name}
                    onChange={handleInputChange}
                  />

                  <br></br>
                  <br></br>

                  <TextField
                    name="email"
                    value={user.email}
                    onChange={handleInputChange}
                  />

                  <br></br>
                  <br></br>

                  <TextField
                    name="phone"
                    value={user.phone}
                    onChange={handleInputChange}
                  />
                </Box>
                <br></br>
                <br></br>

                <Button
                  variant="contained"
                  color="primary"
                  className={classes.btn}
                  type="submit"
                  onClick={update}
                >
                  Valider
                </Button>

                <p>{message}</p>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default UpdateProfile;
