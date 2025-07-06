import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import SignUp from "./scene/sign-up";
import SignIn from "./scene/sign-in";
import AddPatient from "./scene/patient/page";
import Dashboard from "./page/Dashboard";
import MessagesPage from "./scene/messages/page";
import SchedulePage from "./scene/schedule/page";
import DashboardLayout from "./scene/home/DashboardLayout";
import type { ReactNode } from "react";
import MedicinePage from "./scene/medicines/page";

type Props = {
  children: ReactNode;
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/patient" element={<AddPatient />} />
        <Route element={<DashboardLayout />}>
          <Route path="/sme/dashboard" element={<Dashboard />} />
          <Route path="/sme/scheldules" element={<SchedulePage />} />
          <Route path="/sme/patients" element={<AddPatient />} />
          <Route path="/sme/messages" element={<MessagesPage />} />
          <Route path="/sme/medicines" element={<MedicinePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
