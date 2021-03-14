import React, {useState, useEffect} from "react";
import AuthService from "../../services/auth.service";
import UserService from "../../services/user.service";
import { Link } from "react-router-dom";
import { Grid, Container, Card, CardHeader, CardContent, TextField, Button} from '@material-ui/core';

const Profile = () => {

  const initialTutorialState = {
    id: null,
    name: "",
    email: "",
    phone: ""
  };

  const [currentUser, setcurrentUser] = useState(initialTutorialState)
  const [message, setMessage] = useState("");


  useEffect(() => {
    getUser();
  }, [currentUser]);

  const getUser = () => {
     const user = AuthService.getCurrentUser()
     setcurrentUser(user);
  };


  const handleInputChange = event => {
    const { name, value } = event.target;
    setcurrentUser({ ...setcurrentUser, [name]: value });
  };

  const update = () => {

    UserService.updateAccount(currentUser.id, currentUser)
      .then(response => {
        setcurrentUser( response.data);
        setMessage("ok");
      })
      .catch(e => {
        console.log(e);
      });
  };



  return (
   
    <section>
    <Container maxWidth="md">
    <Grid container justify="flex-start" align="center" >
    
        <Grid item md={6} xs={12}>
        <Card>
            <CardHeader 
              style={{
               backgroundColor: "#dfe5e6",
               color: "black"
              }}
              subheader="Modifier vos informations"
            />

            <CardContent>
           
          <TextField
            name="name"
            value={currentUser.name}
            onChange={handleInputChange}
           />

           <br></br>
           <br></br>

             <TextField
             name="email"
             value={currentUser.email}
             onChange={handleInputChange}
            />

            <br></br>
            <br></br>

            <TextField
             name="phone"
             value={currentUser.phone}
             onChange={handleInputChange}
            />

            <br></br>
      
            <button
            type="submit"
            className="badge badge-success"
            onClick={update}
          >
            Update
          </button>

          <p>{message}</p>
            
            </CardContent>

        </Card>
        </Grid>
        </Grid>
        </Container>
        </section>

  );
};

export default Profile;