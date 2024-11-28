import React from 'react';
    import { Typography, Box, TextField, Button } from '@mui/material';

    function Track() {
      return (
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="h4">Track Package</Typography>
          <TextField label="Tracking Number" variant="outlined" sx={{ mt: 2, mb: 2 }} />
          <Button variant="contained" color="primary">Track</Button>
        </Box>
      );
    }

    export default Track;
