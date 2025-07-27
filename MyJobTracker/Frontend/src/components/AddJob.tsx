import React from "react";
import { Button, TextField, Paper, Typography, Box   } from '@mui/material';



type Job = {
  company: string;
  position: string;
  datePosted: string;
  dateApplied: string;
  status: string;
};


function AddJob() {

    const [company, setCompany] = React.useState("");
    const [position, setPosition] = React.useState("");
    const [datePosted, setDatePosted] = React.useState("");
    const [dateApplied, setDateApplied] = React.useState("");
    const [status, setStatus] = React.useState("");
    
    function handleSubmit() {
        const newJob: Job = {
            company,
            position,
            datePosted,
            dateApplied,
            status
        };

        fetch('http://localhost:8000/jobs', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
            .then(response => {
            if (response.ok) {
                alert('Job added successfully!');
                setCompany('');
                setPosition('');
                setDatePosted('');
                setDateApplied('');
                setStatus('');
            } else {
                alert('Failed to add job.');
            }
            })
            .catch(error => {
            console.error('Error adding job:', error);
            });
        }




  return (
    <Paper elevation={3} sx={{ padding: 4, maxWidth: 400, margin: '0 auto' }}>
        <Typography variant="h5" align="center" gutterBottom>
            Add New Job
        </Typography>
        <div>
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
                label="Company Name"
                variant="outlined"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                />
            <TextField
                label="Position"
                variant="outlined"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
            />
            
            <TextField
                label="Date Posted"
                type="date"
                variant="outlined"
                slotProps={{
                    inputLabel: {
                    shrink: true
                    }
                }}          
                value={datePosted}
                onChange={(e) => setDatePosted(e.target.value)}
            />
            <TextField
                label="Date Applied"
                type="date"
                variant="outlined"
                slotProps={{
                    inputLabel: {
                    shrink: true
                    }
                }}
                value={dateApplied}
                onChange={(e) => setDateApplied(e.target.value)}
            />
            <TextField
                label="Status"
                variant="outlined"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
            />
            
            <Button variant="outlined"
                sx={{ borderColor: 'black', 
                color: 'Black', 
                '&:hover': { backgroundColor: '#c5c5c5ff' } }}
                onClick={handleSubmit}>Add Job
            </Button>
            </Box>
        </div>
    </Paper>
  );
}

export default AddJob;