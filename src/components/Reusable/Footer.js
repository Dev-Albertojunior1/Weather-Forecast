// src/components/Reusable/Footer.js
import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
    return (
        <Box
            sx={{
                bgcolor: '#1976d2',
                color: 'white',
                p: 2,
                position: 'relative',
                bottom: 0,
                width: '100%',
                textAlign: 'center',
            }}
        >
            <Typography variant="body2">
                {'© '}
                <Link color="inherit" href="https://github.com/Dev-Albertojunior1">
                    Seu Nome ou Empresa
                </Link>
                {' '}{new Date().getFullYear()}
                {'. Todos os direitos reservados.'}
            </Typography>
            <Typography variant="body2">
                <Link color="inherit" href="/about">
                    Sobre
                </Link>{' | '}
                <Link color="inherit" href="/contact">
                    Contato
                </Link>
            </Typography>
        </Box>
    );
};

export default Footer;
