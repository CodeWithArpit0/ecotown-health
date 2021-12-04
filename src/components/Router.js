import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Campaign from "./Campaign/Campaign";
import Calender from "./Calender/Calender";
import Media from "./Media/Media";
import Profile from "./Profile/Profile";
import Contact from "./Contact/Contact";
import About from "./About/About";
import Doctors from "./Sub Nav/Doctors";
import Patients from "./Sub Nav/Patients";
import PatientPayment from "./Sub Nav/PatientPayment";
import TreatmentReport from "./Sub Nav/TreatmentReport";

function Router() {
    return (
        <Routes>
            {/* Main Menu*/}
            <Route exact path="/ecotown-health" element={<Dashboard />} />
            <Route exact path="/calender" element={<Calender />} />
            <Route exact path="/media" element={<Media />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            {/* Main Menu*/}

            {/* Sub Menu*/}
            <Route exact path="/doctors" element={<Doctors />} />
            <Route exact path="/doctors/treatmentReport" element={<TreatmentReport />} />

            <Route exact path="/patients" element={<Patients />} />
            <Route exact path="/patients/patient-payment" element={<PatientPayment />} />

            <Route exact path="/appointments" element={<Campaign />} />

            <Route exact path="/campaign" element={<Campaign />} />
            <Route exact path="/schedule" element={<Campaign />} />
            <Route exact path="/human-resources" element={<Campaign />} />
            <Route exact path="/perscription" element={<Campaign />} />
            <Route exact path="/lab-tests" element={<Campaign />} />
            <Route exact path="/medicine" element={<Campaign />} />
            <Route exact path="/pharmacy" element={<Campaign />} />
            <Route exact path="/report" element={<Campaign />} />
            {/* Sub Menu*/}
        </Routes>
    );
}

export default Router;