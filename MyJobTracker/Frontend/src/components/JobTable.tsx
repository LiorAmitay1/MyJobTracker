import { useEffect, useState } from 'react';
import {TextField, Button, IconButton, Box, Table, TableHead, TableBody, TableCell , TableRow, TableContainer, Paper } from '@mui/material';
import deleteBeforeIcon from '../assets/delete_before.png';
import deleteHoverIcon from '../assets/delete_hover.png';


type Job = {
  id: number;
  company: string;
  position: string;
  datePosted: string;
  dateApplied: string;
  status: string;
};

function JobTable() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [changedJobIds, setChangedJobIds] = useState<Set<number>>(new Set());



  useEffect(() => {
    fetch('http://localhost:8000/jobs')
      .then(response => response.json())
      .then(data => setJobs(data))
      .catch(err => console.error("Failed to fetch jobs:", err));
  }, []);

  function handleDelete(id: number) {
    fetch(`http://localhost:8000/jobs/${id}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.ok) {
          setJobs(prevJobs => prevJobs.filter(job => job.id !== id));
        } else {
          alert('Failed to delete job.');
        }
      })
      .catch(error => {
        console.error('Error deleting job:', error);
      });
  }

    function handleFieldChange(id: number, field: keyof Job, value: string) {
      setJobs(prevJobs =>
        prevJobs.map(job =>
          job.id === id ? { ...job, [field]: value } : job
        )
      );

      setChangedJobIds(prevIds => new Set(prevIds).add(id));
    }

    function saveAllChanges() {
    changedJobIds.forEach(id => {
      const jobToUpdate = jobs.find(job => job.id === id);
      if (jobToUpdate) {
        handleSave(jobToUpdate);
      }
    });
    setChangedJobIds(new Set());  // מאפס את הסט אחרי השמירה
  }


  function handleSave(job: Job) {
    fetch(`http://localhost:8000/jobs/${job.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(job)
    })
      .then(response => {
        if (!response.ok) {
          alert('Failed to update job.');
        }
      })
      .catch(error => {
        console.error('Error updating job:', error);
      });
  }


  return (
    <>
    

    <Box sx={{ padding: 4, maxWidth: 1000, margin: '0 auto' }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 2 }}>
        <Button
          onClick={() => {
            if (editMode) {
              saveAllChanges();
            }
            setEditMode(!editMode);
          }}
          variant="outlined"
          sx={{ borderColor: 'black', color: 'Black', '&:hover': { backgroundColor: '#c5c5c5ff' } }}
        >
          {editMode ? 'Exit Edit Jobs' : 'Edit Jobs'}
        </Button>

      </Box>
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
        {jobs.map((job) => (
          <TableRow key={job.id} sx={{'&:hover': { backgroundColor: '#eceaeaff' }  }}>

            <TableCell>{editMode ? (
              <TextField
              variant="standard"
              value={job.company}
              onChange={(e) => handleFieldChange(job.id, 'company', e.target.value)}
              fullWidth
              />
            ) :(job.company)}
            </TableCell>

            <TableCell>{editMode ? (<TextField
              variant="standard"
              value = {job.position}
              onChange={(e) => handleFieldChange(job.id, "position", e.target.value)}
              fullWidth
            />):(job.position)}
            </TableCell>


            <TableCell>{editMode ? (<TextField
              variant="standard"
              value = {job.datePosted}
              onChange={(e) => handleFieldChange(job.id, "datePosted", e.target.value)}
              fullWidth
            />):(job.datePosted)}
            </TableCell>


            <TableCell>{editMode ? (<TextField
              variant="standard"
              value = {job.dateApplied}
              onChange={(e) => handleFieldChange(job.id, "dateApplied", e.target.value)}
              fullWidth
            />):(job.dateApplied)}
            </TableCell>


            <TableCell>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {editMode ? (
                  <TextField
                    variant="standard"
                    value={job.status}
                    onChange={(e) => handleFieldChange(job.id, 'status', e.target.value)}
                    sx={{ minWidth: 80 }}  // אופציונלי - שומר על מינימום רוחב קבוע
                  />
                ) : (
                  <span>{job.status}</span>
                )}
                <IconButton
                  onClick={() => handleDelete(job.id)}
                  onMouseEnter={() => setHoveredRow(job.id)}
                  onMouseLeave={() => setHoveredRow(null)}
                  sx={{
                    padding: 0, visibility: editMode ? 'visible' : 'hidden' 
                  }}
                  >
                  <img
                    src={hoveredRow === job.id ? deleteHoverIcon : deleteBeforeIcon}
                    alt="Delete"
                    style={{ width: 20, height: 20 }}
                  />
                  </IconButton>
              </Box>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table >
    </TableContainer>
    </Box>
    </>
  );
}

export default JobTable;
