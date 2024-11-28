import React from 'react';
    import { Typography, Box } from '@mui/material';

    function Home() {
      return (
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="h4">Welcome to DHL Clone</Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Track your packages, schedule shipments, and manage your deliveries with ease.
          </Typography>
        </Box>
      );
    }

    export default Home;
