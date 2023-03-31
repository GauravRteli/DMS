import Login from "./components/Login";
import AdminHome from "./components/AdminHome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Recruitment from "./components/Recruitment";
import ManageRecruitment from "./components/ManageRecruitment";
import JobDetails from "./components/JobDetailsPopUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin-home" element={<AdminHome />}>
          <Route path="" element={<Dashboard />} />
          <Route path="add-job" element={<Recruitment />} />
          <Route path="manage-recruitment" element={<ManageRecruitment />} />
          <Route path="jobdetails" element={<JobDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
