import { Search, Menu } from "lucide-react";
import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import colors from "../components/colorsPalette";
import { AuthModal } from "./modales/RegisterModal";

export const Navbar = () => {
  const location = useLocation();
  const [isRegisterOpen, setIsRegister] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleRegisterOpen = () => setCurrentModal("register");

  const handleLoginOpen = () => setCurrentModal("login");
  const handleSwitchMode = (newSwitch) => setCurrentModal(newSwitch);

  const handleCloseModals = () => setCurrentModal(null);

  const hideNavbar =
    location.pathname === "/login" || location.pathname === "/register";

  if (hideNavbar) return null;

  return (
    <>
      <nav
        className="fixed top-0 z-40 px-6 py-3 shadow-md w-full"
        style={{ backgroundColor: colors.neutral.textPrimary }}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/logoAirbnb.png" alt="Guinea Airbnb" className="h-10" />
            <span
              className="text-xl font-bold"
              style={{ color: colors.neutral.bgCard }}
            >
              Guinea Airbnb
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            <button
              type="button"
              onClick={handleRegisterOpen}
              className="transition-colors hover:underline"
              style={{ color: colors.neutral.bgCard }}
            >
              Register
            </button>

            <button
              type="button"
              onClick={handleLoginOpen}
              className="transition-colors hover:underline"
              style={{ color: colors.neutral.bgCard }}
            >
              Login
            </button>

            <button
              className="flex items-center gap-1 px-3 py-1 rounded-md transition-colors"
              style={{
                backgroundColor: colors.neutral.bgCard,
                color: colors.neutral.textPrimary,
                border: `1px solid ${colors.neutral.borderLight}`,
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = colors.neutral.bgHover;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = colors.neutral.bgCard;
              }}
            >
              🇬🇧 <span className="text-sm">EN</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: colors.neutral.bgCard }}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative mt-4">
          <input
            type="text"
            placeholder="Search hotels, cities..."
            className="w-full px-4 py-2 rounded-md"
            style={{
              backgroundColor: colors.neutral.bgCard,
              color: colors.neutral.textPrimary,
              border: `1px solid ${colors.neutral.borderLight}`,
            }}
          />
          <Search
            className="absolute right-4 top-2"
            style={{ color: colors.neutral.textSecondary }}
            size={20}
          />
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="mt-4 flex flex-col gap-3 md:hidden"
            style={{ color: colors.neutral.bgCard }}
          >
            <button
              type="button"
              onClick={handleRegisterOpen}
              className="transition-colors hover:underline py-2 text-left"
            >
              Register
            </button>
            <button
              type="button"
              onClick={handleLoginOpen}
              className="transition-colors hover:underline py-2 text-left"
            >
              Login
            </button>
            <button
              className="flex items-center gap-1 px-3 py-2 rounded-md w-fit transition-colors"
              style={{
                backgroundColor: colors.neutral.bgCard,
                color: colors.neutral.textPrimary,
                border: `1px solid ${colors.neutral.borderLight}`,
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = colors.neutral.bgHover;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = colors.neutral.bgCard;
              }}
            >
              🇬🇧 <span className="text-sm">EN</span>
            </button>
          </div>
        )}
      </nav>
      {/* Modals - EN DEHORS de la navbar pour éviter les problèmes de z-index */}

      {currentModal && (
        <AuthModal
          onClose={handleCloseModals}
          mode={currentModal}
          isOpen={currentModal !== null}
          onSwitchMode={handleSwitchMode}
          text={
            currentModal === "register"
              ? "Create your account"
              : "Login to your account"
          }
          Policies={
            currentModal === "register"
              ? "I agree to all the Terms and Privacy Policies"
              : "Remember me"
          }
          registerLabel={
            currentModal === "register" ? "Register Now" : "Sign In"
          }
          alreadyAccound={
            currentModal === "register"
              ? "Already have an account?"
              : "Don't have an account?"
          }
          login={currentModal === "register" ? "Login" : "Register"}
          path={currentModal === "register" ? "/login" : "/register"}
        />
      )}
    </>
  );
};
