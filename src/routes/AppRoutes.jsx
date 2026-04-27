import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Attendance from "../pages/Attendance";
import Leave from "../pages/Leave";
import Requests from "../pages/Requests";
import Resume from './../pages/Resume';
import Data from '../pages/Data';
import ConferenceBooking from "../components/requests/ConferenceBooking";



function AppRoutes() {

    return (
        <Routes>


            <Route
                path="/"
                element={<Login />}
            />

            <Route
                path="/dashboard"
                element={<Dashboard />}
            />

            <Route
                path="/attendance"
                element={<Attendance />}

            />

            <Route
                path="/leave"
                element={<Leave />}

            />

            <Route
                path="/requests"
                element={<Requests />}

            />

            <Route
                path="/resume"
                element={<Resume />}

            />

            <Route
                path="/data"
                element={<Data />}
            />

            <Route
                path="/conference"
                element={<ConferenceBooking />}

            />


        </Routes>
    )
}

export default AppRoutes