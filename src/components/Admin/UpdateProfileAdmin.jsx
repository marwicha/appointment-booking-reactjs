import React, { useState } from "react";
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

const UpdateProfileAdmin = (props) => {
  const classes = useStyles();
  const userTest = AuthService.getCurrentUser();

  const initialState = {
    id: userTest.id,
    email: userTest.email,
  };

  const [user, setUser] = useState(initialState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const update = () => {
    UserService.updateAccount(user.id, user)
      .then(() => {
        alert("Vos informations sont mis à jour");
        localStorage.setItem("user", JSON.stringify({ ...user }));
        props.history.push("/admin");
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
              <CardHeader subheader="Modifier vos informations" />

              <CardContent>
                <Box align="left">
                  <TextField
                    name="email"
                    value={user.email}
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
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default UpdateProfileAdmin;
