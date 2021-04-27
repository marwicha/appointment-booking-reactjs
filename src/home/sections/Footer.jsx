import React from "react";
import {
  Grid,
  Avatar,
  Typography,
  fade,
  Box,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import RoomIcon from "@material-ui/icons/Room";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  contactWrapper: {
    backgroundColor: "rgb(250 251 255)",
  },
  iconWrapper: {
    backgroundColor: "rgb(250 251 255)",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer>
      <Container maxWidth="lg">
        <Box py={10}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <div className={classes.contactWrapper}>
                <Box textAlign="center" py={4}>
                  <Box display="flex" justifyContent="center" mb={3}>
                    <Avatar className={classes.iconWrapper}>
                      <RoomIcon color="primary" fontSize="large" />
                    </Avatar>
                  </Box>
                  <Typography variant="h6" gutterBottom={true}>
                    Adresse
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {" "}
                    446 Bis Av De Dunkerque{" "}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {" "}
                    Lambersart, 59130{" "}
                  </Typography>
                </Box>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.contactWrapper}>
                <Box textAlign="center" py={4}>
                  <Box display="flex" justifyContent="center" mb={3}>
                    <Avatar className={classes.iconWrapper}>
                      <EmailIcon color="primary" fontSize="large" />
                    </Avatar>
                  </Box>
                  <Typography variant="h6" gutterBottom={true}>
                    {" "}
                    Email{" "}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {" "}
                    patrick.caillier@hotmail.fr{" "}
                  </Typography>
                  <br />
                </Box>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.contactWrapper}>
                <Box textAlign="center" py={4}>
                  <Box display="flex" justifyContent="center" mb={3}>
                    <Avatar className={classes.iconWrapper}>
                      <PhoneIcon color="primary" fontSize="large" />
                    </Avatar>
                  </Box>
                  <Typography variant="h6" gutterBottom={true}>
                    {" "}
                    Téléphone{" "}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    (33) 555555555
                  </Typography>
                  <br />
                </Box>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
