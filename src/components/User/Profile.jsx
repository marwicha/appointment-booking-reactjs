import React, { useState, useEffect } from "react";
import AuthService from "../../services/auth.service";

import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import {
  Grid,
  Container,
  Card,
  CardHeader,
  CardContent,
  Button,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  btn: {
    color: "white",
    backgroundColor: "#4b9fbc",
  },
}));

const Profile = () => {
  const classes = useStyles();

  const [currentUser, setcurrentUser] = useState([]);

  const getUser = () => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setcurrentUser(user);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Container maxWidth="md">
      <Grid container justify="flex-start" align="center">
        <Grid item md={6} xs={12}>
          <Card>
            <CardHeader subheader="Vos informations personnelles" />

            <CardContent>
              <Box align="left">
                <p> {currentUser.name} </p>

                <p> {currentUser.email} </p>

                <p> {currentUser.phone} </p>
              </Box>
              <Link
                to={"/compte/" + currentUser.id}
                className="badge badge-warning"
              >
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.btn}
                >
                  Modifier
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
