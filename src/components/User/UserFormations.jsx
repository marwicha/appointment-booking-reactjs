import React, { useState, useEffect } from "react";
import AdminService from "../../services/admin.service";

import {
  Grid,
  Container,
  Card,
  CardHeader,
  CardContent,
  Box,
  Divider,
} from "@material-ui/core";

const UserFormations = () => {
  const [formations, setFormations] = useState([]);
  const [readMore, setReadMore] = useState(false);

  const linkName = readMore ? "Lire moins" : "Lire la suite";

  useEffect(() => {
    AdminService.getAllFormations().then((response) => {
      setFormations(response);
    });
  }, []);

  return (
    <Container maxWidth="lg">
      <Grid container justify="flex-start" align="center" spacing={2}>
        {formations.map((formation, index) => (
          <Grid key={index} item md={4} xs={12}>
            <Box mt={2}>
              <Card>
                <CardHeader
                  subheader={formation.name + " " + formation.prix + " eur"}
                />
                <Divider />
                <CardContent>
                  <p className="extra-content">{formation.dateText}</p>
                  <a
                    className="read-more-link"
                    onClick={() => {
                      setReadMore(!readMore);
                    }}
                  >
                    <h6>{linkName}</h6>
                  </a>

                  {readMore && (
                    <p className="extra-content">{formation.description}</p>
                  )}
                </CardContent>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default UserFormations;
