import React from 'react';
    import { Typography, Box, TextField, Button } from '@mui/material';

    function Login() {
      return (
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="h4">Login</Typography>
          <TextField label="Email" variant="outlined" sx={{ mt: 2, mb: 2 }} />
          <TextField label="Password" type="password" variant="outlined" sx={{ mb: 2 }} />
          <Button variant="contained" color="primary">Login</Button>
        </Box>
      );
    }

    export default Login;
