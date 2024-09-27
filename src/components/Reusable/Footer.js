// src/components/Reusable/Footer.js
import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
    return (
        <Box
            sx={{
                bgcolor: '#1116',
                color: 'white',
                p: 1, // Padding reduzido
                position: 'relative',
                bottom: 0,
                width: '90%', // Definindo uma largura específica
                maxWidth: '600px', // Largura máxima
                margin: '0 auto', // Centralizando
                textAlign: 'center',
            }}
        >
            <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
                {'© '}
                <Link color="inherit" href="https://github.com/Dev-Albertojunior1">
                    Alberto Junior
                </Link>
                {' '}{new Date().getFullYear()}
                {'. Todos os direitos reservados.'}
            </Typography>
        </Box>
    );
};

export default Footer;
