import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JobTable from "./compomemts/JobTable"
// import LoginPage from './components/LoginPage';
import Navbar from './compomemts/Navbar';
import AddJob from './compomemts/AddJob';




function App() {
  
  return (
    <>
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<JobTable />} />
          {/* <Route path="/login" element={<LoginPage />} /> */}
          <Route path="/add-job" element={<AddJob />} />
        </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
