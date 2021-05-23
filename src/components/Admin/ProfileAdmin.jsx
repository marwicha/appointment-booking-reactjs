import React, { useState, useEffect } from "react";
import AuthService from "../../services/auth.service";

import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Container,
  Card,
  CardHeader,
  CardContent,
  Button,
  Box,
} from "@material-ui/core";

import { Link } from "react-router-dom";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  btn: {
    color: "white",
    backgroundColor: "#4b9fbc",
  },
}));

const ProfileAdmin = () => {
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
            <CardHeader
              style={{
                backgroundColor: "#dfe5e6",
                color: "black",
              }}
              subheader="Vos informations personnelles"
            />

            <CardContent>
              <Box align="left">
                <p> {currentUser.email} </p>
              </Box>
              <br></br>

              <Link
                to={"/admin/" + currentUser.id}
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

export default ProfileAdmin;
