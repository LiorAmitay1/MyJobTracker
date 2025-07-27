import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JobTable from "./components/JobTable"

import Navbar from './components/Navbar';
import AddJob from './components/AddJob';

import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<JobTable />} />
          <Route path="/add-job" element={<AddJob />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
