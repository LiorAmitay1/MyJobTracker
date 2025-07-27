import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box, Typography  } from '@mui/material';
import logo from '/public/favicon.ico';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        

        <Box sx={{ flexGrow: 0.5 }}>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/add-job">Add Job</Button>
        <Button color="inherit" component={Link} to="/about">About</Button>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', marginRight: 'auto' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginRight: '10px' }}>
          My Job Tracker
        </Typography>
        <img src={logo} alt="My Logo" style={{ height: '40px' }} />
        </Box>
        
        <Button color="inherit" component={Link} to="/register">Register</Button>
        <Button color="inherit" component={Link} to="/login">Login</Button>
      </Toolbar>
      </AppBar>
  );
}

export default Navbar;