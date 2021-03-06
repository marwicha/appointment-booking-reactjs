import React, { useState, useEffect } from "react";

import AdminService from "../../services/admin.service";

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

const ListFormation = () => {
  const [formations, setFormations] = useState([]);
  const [readMore, setReadMore] = useState(false);

  const linkName = readMore ? "Lire moins" : "Lire la suite";

  useEffect(() => {
    AdminService.getAllFormations().then((response) => {
      setFormations(response);
    });
  }, []);

  const deleteFormation = (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Etes vous sûre de vouloir supprimer cette formation ?")) {
      AdminService.deleteFormation(id).then(() => {
        setFormations(formations.filter((element) => element._id !== id));
      });
    }
  };

  return (
    <Container maxWidth="lg">
      <Grid container justify="center" align="center" spacing={2}>
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

                <Button
                  color="secondary"
                  onClick={() => deleteFormation(formation._id)}
                >
                  Supprimer
                </Button>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ListFormation;
