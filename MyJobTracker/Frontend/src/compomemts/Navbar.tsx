import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box, Typography  } from '@mui/material';
import logo from '/public/favicon.ico';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        

        <Box sx={{ flexGrow: 1 }}>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/jobs">Jobs</Button>
        <Button color="inherit" component={Link} to="/about">About</Button>
        <Button color="inherit" component={Link} to="/add-job">Add Job</Button>
        </Box>
        <Typography variant="h6" sx={{flexGrow: 1.2, fontWeight: 'bold'}}>
          My Job Tracker
          <img
          src={logo}
          alt="My Logo"
          style={{ height: '40px', marginRight: '10px' }}
        />
        </Typography>
        
        <Button color="inherit" component={Link} to="/register">Register</Button>
        <Button color="inherit" component={Link} to="/login">Login</Button>
      </Toolbar>
      </AppBar>
  );
}

export default Navbar;