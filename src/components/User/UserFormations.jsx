import React, { useState, useEffect } from "react";

import AdminService from "../../services/admin.service";

import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Container,
  Card,
  CardHeader,
  CardContent,
  Button,
  Box,
  Divider,
} from "@material-ui/core";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  btn: {
    color: "white",
    backgroundColor: "#4b9fbc",
  },
}));

const UserFormations = () => {
  const classes = useStyles();

  const [formations, setFormations] = useState([]);

  useEffect(() => {
    AdminService.getAllFormations().then((response) => {
      setFormations(response);
    });
  }, []);

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justify="flex-start"
        align="center"
        spacing={2}
        md={12}
        xs={12}
      >
        {formations.map((formation, index) => (
          <Grid item md={3} xs={12}>
            <Box mt={2}>
              <Card>
                <CardHeader
                  style={{
                    color: "black",
                    backgroundColor: "#dfe5e6",
                  }}
                  subheader={formation.name}
                />
                <Divider />
                <CardContent>{formation.dateText}</CardContent>

                <Button
                  variant="contained"
                  color="primary"
                  className={classes.btn}
                >
                  En savoir plus
                </Button>
                <br></br>
                <br></br>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default UserFormations;
