import React from "react";
import {Avatar, Typography,Paper,Box } from '@mui/material';


function About() {
    return (
        <Box sx={{ padding: { xs: 2, sm: 4 }, maxWidth: '1100px', margin: '0 auto' }}>
            <Paper elevation={3} sx={{ padding: 4,  width: "100%" ,boxSizing: "border-box",}}>

                <Typography align="center" variant="h4" gutterBottom>
                About This Project
                </Typography>

                <Typography variant="body1" paragraph>
                This website is a simple job tracking platform, built using React and TypeScript. 
                It allows users to add, edit, and delete job applications and keep track of their status.
                </Typography>

                <Typography variant="body1" paragraph>
                The goal is to help job seekers stay organized during their search and streamline the job application process.
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
                    <Avatar
                        alt="Lior Amitay"
                        src="/src/assets/myPhoto.jpg"
                        sx={{ width: 200, height: 200 }}
                    />
                </Box>

                <Typography variant="body2" color="text.secondary">
                Created by Lior Amitay, 2025.
                </Typography>

            </Paper>
        </Box>
    );
}

export default About;