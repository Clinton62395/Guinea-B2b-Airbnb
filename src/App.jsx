import React, { lazy, Suspense } from "react";

import "./App.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Footer } from "./components/Footer";
import { PrimeReactProvider } from "primereact/api";

// import { RegisterPage } from "./pages/Register";
// import { LoginPage } from "./pages/Login";
import { HomeSkeleton } from "./components/skeletons/HomeSkeleton";
import { HomeLayout } from "./layouts/HomeLayout";
import NotFound from "./pages/NotFound";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import HotelDetailsPage from "./pages/HotelDetailsPage";
import HotelBookingForm from "./pages/HotelBookinForm";
import BookingConfirmation from "./pages/BookingConfirmed";

const HotelSearchPage = lazy(() => import("./pages/ReservationPage"));
const HomePage = lazy(() => import("./pages/HomePage"));

function App() {
  return (
    <>
      <BrowserRouter>
        <PrimeReactProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Suspense fallback={<div><HomeSkeleton /></div>}>
              <Routes>
                <Route element={<HomeLayout />}>
                  <Route index element={<HomePage />} />
                  <Route path="/hotel-filter" element={<HotelSearchPage />} />
                  <Route path="/hotel-details" element={<HotelDetailsPage />} />
                  <Route path="/hotel-booking" element={<HotelBookingForm />} />
                  <Route path="/booking-confirmation" element={<BookingConfirmation />} />
                  {/* <Route path="/register" element={<RegisterPage />} /> */}
                  {/* <Route path="/login" element={<LoginPage />} /> */}
                </Route>

                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </LocalizationProvider>
        </PrimeReactProvider>
        <Footer />
      </BrowserRouter>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
