import React from 'react';
import { Container, Paper, Grid, TextField, Button } from '@material-ui/core';

const SignUp = () => {
  return (
    <Container maxWidth="xs">
      <Paper style={{ marginTop: '50px', padding: '20px' }}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <TextField label="First Name" variant="outlined" fullWidth required />
          </Grid>
          <Grid item>
            <TextField label="Last Name" variant="outlined" fullWidth required />
          </Grid>
          <Grid item>
            <TextField label="Email" variant="outlined" fullWidth required />
          </Grid>
          <Grid item>
            <TextField label="Password" variant="outlined" type="password" fullWidth required />
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" fullWidth>
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default SignUp;
