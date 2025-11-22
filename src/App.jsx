import "./App.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { HomePage } from "./pages/HomePage";
import { Footer } from "./components/Footer";
// import { RegisterPage } from "./pages/Register";
// import { LoginPage } from "./pages/Login";
import { HomeLayout } from "./layouts/HomeLayout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<HomeLayout />}>
            <Route index element={<HomePage />} />
            {/* <Route path="/register" element={<RegisterPage />} /> */}
            {/* <Route path="/login" element={<LoginPage />} /> */}
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
