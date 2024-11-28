import React from 'react';
    import { Typography, Box, TextField, Button } from '@mui/material';

    function Schedule() {
      return (
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="h4">Schedule Shipment</Typography>
          <TextField label="Recipient Address" variant="outlined" sx={{ mt: 2, mb: 2 }} />
          <TextField label="Package Details" variant="outlined" sx={{ mb: 2 }} />
          <Button variant="contained" color="primary">Schedule</Button>
        </Box>
      );
    }

    export default Schedule;
