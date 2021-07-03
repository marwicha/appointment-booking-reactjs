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

  p: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "1rem",
    textAlign: "center",
    maxWidth: 500,
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

                  <p className={classes.p}>
                    446B AV DE DUNKERQUE 59130,Lambersart
                  </p>
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

                  <p className={classes.p}>patrick.caillier@hotmail.fr</p>
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

                  <p className={classes.p}>07 86 99 59 40 ou 09 8222 8555</p>
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
