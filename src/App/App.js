import logo from '../assets/images/logo.png';
import './App.css';
import Navbar from '../components/Navbar/Navbar.js';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import AboutUsPage from "../pages/AboutUsPage/AboutUsPage";
import ReserveTripPage from "../pages/ReserveTripPage/ReserveTripPage";
import TravelCompaniesPage from "../pages/TravelCompaniesPage/TravelCompaniesPage";
import CreateReservationPage from "../pages/CreateReservationPage/CreateReservationPage";

function App() {
  return (
    <div className="App">
      <div className={"app-container"}>
        <BrowserRouter>
          <Navbar />
          <div className="content-container">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/reserve" element={<ReserveTripPage />} />
            <Route path="/companies" element={<TravelCompaniesPage />} />
            <Route path="/create-reservation" element={<CreateReservationPage />} />
            <Route path="*" element={<LandingPage />} />
          </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
