import React, { useState } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  TextField,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { styles } from "./styles";
import Input from "./Input";

function Auth() {
  const state = null;
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false)


  const handleSubmit = () => {};
  const handleChange = () => {};
  const switchMode = () => {
    setIsSignup((prev)=> !prev) 
  };
  const hanldeShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
    hanldeShowPassword(false)
  };
  return (
    <Container component="main" maxWidth="xs" >
      <Paper style={styles.paper} elevation="3">
        <Avatar style={styles.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
        <form style={styles.form} onSubmit={handleSubmit}>
          <Grid container spacing="25" sx={{marginTop :2}}>
            {isSignup && (
              <>
                <Input
                  name="FirstName"
                  label="First Name"
                  handleChange={handleChange}
                  half
                  autoFocus
                />
                <Input
                  name="LasrName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              hanldeShowPassword={hanldeShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type={showPassword ? "text" : "password"}
              hanldeShowPassword={hanldeShowPassword}

              />
            )}
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" style={styles.submit} >
            {
              isSignup ? "Sign Up" : "Sign In"
            }
          </Button>
          <Grid container justifyContent="flex-end">  
          <Grid item>
            <Button onClick={ switchMode}>  {isSignup ? "Already have an account? Sign In" : "Don't have an account? Sign up"}</Button>
          </Grid>
            
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}

export default Auth;
