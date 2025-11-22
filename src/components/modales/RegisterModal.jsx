import React, { useEffect, useState } from "react";
import { X, Eye, EyeOff } from "lucide-react";
import { PhoneInput } from "react-international-phone";
import colors from "../colorsPalette";
import "react-international-phone/style.css";

export const AuthModal = ({
  text = "Create your account",
  Policies = "I agree to all the Terms and Privacy Policies",
  registerLabel = "Register Now",
  alreadyAccound = "Already have an account?",
  login = "Login",
  isOpen,
  mode = "register",
  onClose,
  onSwitchMode,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [phone, setPhone] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const isRegister = mode === "register";

  // Animation d'entrée
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose?.();
    }, 300);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleSwitchMode = () => {
    onSwitchMode?.(isRegister ? "login" : "register");
  };

  // Si le modal n'est pas ouvert, ne rien render
  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        isVisible ? "opacity-100 backdrop-blur-md" : "opacity-0 backdrop-blur-0"
      }`}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
      onClick={handleBackdropClick}
    >
      {/* Backdrop avec effet de flou amélioré */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        aria-hidden="true"
      />

      {/* Modal avec animation de scale */}
      <div
        className={`relative shadow-2xl rounded-2xl flex w-full max-w-6xl h-[90vh] overflow-hidden transition-all duration-300 transform ${
          isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        style={{
          backgroundColor: colors.neutral.bgCard,
          border: `1px solid ${colors.neutral.borderLight}`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Bouton fermer amélioré */}
        <button
          onClick={handleClose}
          className="absolute right-6 top-6 z-20 p-2 rounded-full transition-all duration-200 hover:bg-gray-100 hover:scale-110"
          style={{
            backgroundColor: colors.neutral.bgCard,
            border: `1px solid ${colors.neutral.borderLight}`,
            color: colors.neutral.textPrimary,
          }}
          aria-label="Fermer"
        >
          <X size={20} />
        </button>

        {/* Image section avec overlay amélioré */}
        <div
          className="relative w-1/2 bg-cover bg-center rounded-l-2xl overflow-hidden group"
          style={{ backgroundImage: "url('/guinea logo 2.png')" }}
        >
          {/* Overlay de gradient */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/20"
            aria-hidden="true"
          />

          {/* Overlay au hover */}
          <div
            className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"
            aria-hidden="true"
          />

          {/* Contenu de l'image - POSITION CORRIGÉE */}
          <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
            <div className="text-center">
              <span
                className="text-white text-3xl font-bold mb-4 block tracking-wide"
                style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
              >
                Guinea
              </span>
              <p
                className="text-white/90 text-lg max-w-md"
                style={{ textShadow: "0 1px 2px rgba(0,0,0,0.5)" }}
              >
                Découvrez les plus belles destinations de Guinée
              </p>
            </div>
          </div>
        </div>

        {/* Form section avec scroll si nécessaire */}
        <div className="w-1/2 p-8 overflow-y-auto">
          <div className="max-w-md mx-auto">
            {/* En-tête */}
            <div className="text-center mb-8">
              <h2
                className="text-3xl font-bold mb-3"
                style={{ color: colors.neutral.textPrimary }}
              >
                Guinee B2BAirbnb
              </h2>
              <p
                className="text-lg"
                style={{ color: colors.neutral.textSecondary }}
              >
                {text}
              </p>
            </div>

            <form className="space-y-6">
              {/* First & Last Name - SEULEMENT pour register */}
              {isRegister && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full p-3 border rounded-lg transition-all duration-200 focus:ring-2 focus:ring-offset-1"
                      style={{
                        borderColor: colors.neutral.borderLight,
                        backgroundColor: colors.neutral.bgCard,
                        color: colors.neutral.textPrimary,
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = colors.primary.main;
                        e.target.style.boxShadow = `0 0 0 2px ${colors.primary.main}20`;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = colors.neutral.borderLight;
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full p-3 border rounded-lg transition-all duration-200 focus:ring-2 focus:ring-offset-1"
                      style={{
                        borderColor: colors.neutral.borderLight,
                        backgroundColor: colors.neutral.bgCard,
                        color: colors.neutral.textPrimary,
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = colors.primary.main;
                        e.target.style.boxShadow = `0 0 0 2px ${colors.primary.main}20`;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = colors.neutral.borderLight;
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>
                </div>
              )}

              {/* Email - TOUJOURS visible */}
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border rounded-lg transition-all duration-200 focus:ring-2 focus:ring-offset-1"
                  style={{
                    borderColor: colors.neutral.borderLight,
                    backgroundColor: colors.neutral.bgCard,
                    color: colors.neutral.textPrimary,
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = colors.primary.main;
                    e.target.style.boxShadow = `0 0 0 2px ${colors.primary.main}20`;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = colors.neutral.borderLight;
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Passwords */}
              <div
                className={`grid gap-4 ${
                  isRegister ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
                }`}
              >
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full p-3 border rounded-lg pr-12 transition-all duration-200 focus:ring-2 focus:ring-offset-1"
                    style={{
                      borderColor: colors.neutral.borderLight,
                      backgroundColor: colors.neutral.bgCard,
                      color: colors.neutral.textPrimary,
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = colors.primary.main;
                      e.target.style.boxShadow = `0 0 0 2px ${colors.primary.main}20`;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = colors.neutral.borderLight;
                      e.target.style.boxShadow = "none";
                    }}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded transition-colors hover:bg-gray-100"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ color: colors.neutral.textSecondary }}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                {/* Confirm Password - SEULEMENT pour register */}
                {isRegister && (
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm Password"
                      className="w-full p-3 border rounded-lg pr-12 transition-all duration-200 focus:ring-2 focus:ring-offset-1"
                      style={{
                        borderColor: colors.neutral.borderLight,
                        backgroundColor: colors.neutral.bgCard,
                        color: colors.neutral.textPrimary,
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = colors.primary.main;
                        e.target.style.boxShadow = `0 0 0 2px ${colors.primary.main}20`;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = colors.neutral.borderLight;
                        e.target.style.boxShadow = "none";
                      }}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded transition-colors hover:bg-gray-100"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      style={{ color: colors.neutral.textSecondary }}
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>
                )}
              </div>

              {/* Phone Input - SEULEMENT pour register */}
              {isRegister && (
                <div>
                  <PhoneInput
                    defaultCountry="gn"
                    value={phone}
                    onChange={setPhone}
                    placeholder="Enter your Phone number"
                    inputStyle={{
                      width: "100%",
                      padding: "16px 16px",
                      border: `1px solid ${colors.neutral.borderLight}`,
                      borderRadius: "8px",
                      fontSize: "14px",
                      backgroundColor: colors.neutral.bgCard,
                      color: colors.neutral.textPrimary,
                      transition: "all 0.2s",
                    }}
                    buttonStyle={{
                      border: `1px solid ${colors.neutral.borderLight}`,
                      borderRight: "none",
                      borderRadius: "8px 0 0 8px",
                      backgroundColor: colors.neutral.bgSection,
                    }}
                  />
                </div>
              )}

              {/* Policies */}
              <label
                className="flex items-start text-sm cursor-pointer group"
                style={{ color: colors.neutral.textSecondary }}
              >
                <input
                  type="checkbox"
                  className="mr-3 mt-0.5 transition-all duration-200 group-hover:scale-110"
                  style={{ accentColor: colors.primary.main }}
                />
                <span className="group-hover:text-gray-700 transition-colors">
                  {Policies}
                </span>
              </label>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full text-white py-3 px-3 rounded-lg transition-all duration-200 font-semibold hover:shadow-lg transform hover:scale-[1.02]"
                style={{
                  backgroundColor: colors.primary.main,
                  border: `1px solid ${colors.primary.main}`,
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = colors.primary.hover;
                  e.target.style.borderColor = colors.primary.hover;
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = colors.primary.main;
                  e.target.style.borderColor = colors.primary.main;
                }}
              >
                {registerLabel}
              </button>
            </form>

            {/* Footer avec bouton pour switcher */}
            <div className="mt-8 pt-6 border-t text-center">
              <p
                className="text-sm"
                style={{ color: colors.neutral.textSecondary }}
              >
                {alreadyAccound}{" "}
                <button
                  className="font-semibold transition-all duration-200 hover:underline hover:scale-105 inline-block"
                  style={{ color: colors.primary.main }}
                  onClick={handleSwitchMode}
                >
                  {login}
                </button>
              </p>
            </div>

            {/* Social buttons */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                className="p-2 border rounded-full transition-colors bg-white w-10 h-10 flex items-center justify-center"
                style={{
                  borderColor: colors.neutral.borderLight,
                  backgroundColor: colors.neutral.bgCard,
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = colors.neutral.bgHover;
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = colors.neutral.bgCard;
                }}
              >
                <img
                  src="/facebook-logo.png"
                  alt="facebook"
                  className="w-5 h-5"
                />
              </button>
              <button
                className="p-2 border rounded-full bg-white w-10 h-10 flex items-center justify-center transition-colors"
                style={{
                  borderColor: colors.neutral.borderLight,
                  backgroundColor: colors.neutral.bgCard,
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = colors.neutral.bgHover;
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = colors.neutral.bgCard;
                }}
              >
                <img src="/google-logo.png" alt="google" className="w-5 h-5" />
              </button>
              <button
                className="p-2 border rounded-full transition-colors bg-white w-10 h-10 flex items-center justify-center"
                style={{
                  borderColor: colors.neutral.borderLight,
                  backgroundColor: colors.neutral.bgCard,
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = colors.neutral.bgHover;
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = colors.neutral.bgCard;
                }}
              >
                <img src="/ios logo.png" alt="apple" className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
