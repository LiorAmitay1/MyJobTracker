import { useEffect, useState } from 'react';
import { Box, Table, TableHead, TableBody, TableCell , TableRow, TableContainer, Paper } from '@mui/material';



type Job = {
  company: string;
  position: string;
  datePosted: string;
  dateApplied: string;
  status: string;
};

function JobTable() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    fetch('http://localhost:8000/jobs')
      .then(response => response.json())
      .then(data => setJobs(data))
      .catch(err => console.error("Failed to fetch jobs:", err));
  }, []);

  return (
    <Box sx={{ padding: 4, maxWidth: 1000, margin: '0 auto' }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{'& .MuiTableCell-root': {backgroundColor: '#c5c5c5ff',color: 'black',fontWeight: 'bold' }}}>
              <TableCell>Company</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>Date Posted</TableCell>
              <TableCell>Date Applied</TableCell>
              <TableCell>Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {jobs.map((job, index) => (
          <TableRow key={index} sx={{'&:hover': { backgroundColor: '#eceaeaff' } 
      }}>
            <TableCell>{job.company}</TableCell>
            <TableCell>{job.position}</TableCell>
            <TableCell>{job.datePosted}</TableCell>
            <TableCell>{job.dateApplied}</TableCell>
            <TableCell>{job.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table >
    </TableContainer>
    </Box>
  );
}

export default JobTable;
