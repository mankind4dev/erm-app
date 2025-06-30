import { Route, Routes } from "react-router-dom"; 
import SignUp from "./scene/sign-up";
import SignIn from "./scene/sign-in";
import AddPatient from "./scene/patients";   
import Home from "./page/Home";
import DashboardLayout from "./scene/home/DashboardHome";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/patient" element={<AddPatient />} />
        <Route path="/sme-dashboard" element={<DashboardLayout />} />
      </Routes>
    </>
  );
}

export default App;
