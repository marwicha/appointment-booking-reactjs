import React, { useState, useEffect } from "react";
import PrestationService from "../../services/prestation.service";

import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Container,
  Card,
  CardHeader,
  CardContent,
  Button,
  Box,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  btn: {
    color: "white",
    backgroundColor: "#4b9fbc",
  },
}));

const AddPrestation = () => {
  const classes = useStyles();
  const [prestation, setPrestation] = useState("");

  const addPrestation = () => {
    const data = {
      name: prestation,
    };

    PrestationService.createPrestation(data)
      .then((response) => {})
      .catch((e) => {
        console.log(e);
      });
  };

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
              subheader="Ajouter une prestation"
            />

            <CardContent>
              <Box align="left">
                <TextField
                  name="prestation"
                  value={prestation}
                  onChange={(e) => setPrestation(e.target.value)}
                />
              </Box>

              <Button
                variant="contained"
                color="primary"
                className={classes.btn}
                onClick={addPrestation}
              >
                Valider
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddPrestation;
