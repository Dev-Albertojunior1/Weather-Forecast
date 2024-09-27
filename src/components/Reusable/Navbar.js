// src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Ícone de menu opcional
import LinkedInIcon from '@mui/icons-material/LinkedIn'; // Ícone do LinkedIn
import GitHubIcon from '@mui/icons-material/GitHub'; // Ícone do GitHub

const Navbar = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Weather Forecast
                </Typography>
                <IconButton color="inherit" href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn">
                    <LinkedInIcon />
                </IconButton>
                <IconButton color="inherit" href="https://github.com" target="_blank" aria-label="GitHub">
                    <GitHubIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
