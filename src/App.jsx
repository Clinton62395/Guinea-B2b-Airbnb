import "./App.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { HomePage } from "./pages/HomePage";
import { Footer } from "./components/Footer";
import { PrimeReactProvider } from "primereact/api";

// import { RegisterPage } from "./pages/Register";
// import { LoginPage } from "./pages/Login";
import { HomeLayout } from "./layouts/HomeLayout";
import NotFound from "./pages/NotFound";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function App() {
  return (
    <>
      <BrowserRouter>
        <PrimeReactProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Routes>
              <Route element={<HomeLayout />}>
                <Route index element={<HomePage />} />
                {/* <Route path="/register" element={<RegisterPage />} /> */}
                {/* <Route path="/login" element={<LoginPage />} /> */}
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </LocalizationProvider>
        </PrimeReactProvider>
        <Footer />
      </BrowserRouter>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
