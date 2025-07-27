import React from "react";
import {Box, Button, Paper, Typography, TextField} from '@mui/material';

function Register() {
    function handleSubmit() {
        // Placeholder for registration logic
    }
    return (
        <Paper elevation={3} sx={{ padding: 4, maxWidth: 400, margin: '0 auto' }}>
        <Typography variant="h5" align="center" gutterBottom>
            Welcome to MyJobTracker
        </Typography>
        <div>
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
                label="Full Name"
                variant="outlined"
            />

            <Button variant="outlined"
                sx={{ borderColor: 'black', 
                color: 'Black', 
                '&:hover': { backgroundColor: '#c5c5c5ff' } }}
                onClick={handleSubmit}>Register
            </Button>
            </Box>
        </div>
    </Paper>
    );
}
export default Register;