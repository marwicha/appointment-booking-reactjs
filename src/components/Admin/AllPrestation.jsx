import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  Typography,
  Container,
  Grid,
  CardContent,
  CardHeader,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PrestationService from "../../services/prestation.service";

const useStyles = makeStyles(({ palette, ...theme }) => ({}));

const AllPrestations = () => {
  const [prestations, setPrestations] = useState([]);

  useEffect(() => {
    PrestationService.getAllPrestations().then((response) => {
      setPrestations(response);
    });
  }, []);

  return (
    <Container maxWidth="lg">
      <Grid
        container
        spacing={2}
        md={12}
        xs={12}
        justify="flex-start"
        align="center"
      >
        {prestations.map((prestation, index) => (
          <Grid item key={index} md={4} xs={12}>
            <Card>
              <CardHeader
                style={{
                  backgroundColor: "#dfe5e6",
                  color: "black",
                }}
                subheader={prestation.name}
              />

              <CardContent>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  align="left"
                >
                  prestation: {prestation.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AllPrestations;
