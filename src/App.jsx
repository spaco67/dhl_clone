import React from 'react';
    import { Routes, Route } from 'react-router-dom';
    import { Container, AppBar, Toolbar, Typography } from '@mui/material';
    import Home from './components/Home';
    import Track from './components/Track';
    import Schedule from './components/Schedule';
    import Login from './components/Login';

    function App() {
      return (
        <Container>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                DHL Clone
              </Typography>
            </Toolbar>
          </AppBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/track" element={<Track />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Container>
      );
    }

    export default App;
