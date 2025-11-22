import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import colors from "../components/colorsPalette";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

export const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [phone, setPhone] = useState("");

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: colors.neutral.bgSection }}
    >
      <div
        className="shadow-lg rounded-lg flex w-full max-w-6xl h-[90vh] overflow-hidden "
        style={{ backgroundColor: colors.neutral.bgCard }}
      >
        {/* Image section */}
        <div
          className=" relative w-1/2  bg-cover bg-center rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
          style={{ backgroundImage: "url('/guinea logo 2.png')" }}
        >
          {/* Overlay optionnel pour lisibilité */}
          <div className="w-full h-full bg-black/10 rounded-xl flex items-center justify-center">
            <span className=" absolute top-8 text-white text-lg font-semibold  logo-text">
              Guinea
            </span>
          </div>
        </div>

        {/* Form section */}
        <div className="w-1/2 p-8">
          <h2
            className="text-2xl font-bold mb-4"
            style={{ color: colors.neutral.textPrimary }}
          >
            Guinee B2BAirbnb
          </h2>
          <p className="mb-6" style={{ color: colors.neutral.textSecondary }}>
            Create your account:
          </p>

          <form className=" space-y-4">
            <div className="flex gap-4 mb-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-2 border rounded"
                  style={{
                    borderColor: colors.neutral.borderLight,
                    backgroundColor: colors.neutral.bgCard,
                  }}
                />
              </div>
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-2 border rounded"
                  style={{
                    borderColor: colors.neutral.borderLight,
                    backgroundColor: colors.neutral.bgCard,
                  }}
                />
              </div>
            </div>

            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded"
                style={{
                  borderColor: colors.neutral.borderLight,
                  backgroundColor: colors.neutral.bgCard,
                }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="mb-4 relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full p-2 border rounded pr-10"
                  style={{
                    borderColor: colors.neutral.borderLight,
                    backgroundColor: colors.neutral.bgCard,
                  }}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ color: colors.neutral.textSecondary }}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <div className="mb-4 relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  className="w-full p-2 border rounded pr-10"
                  style={{
                    borderColor: colors.neutral.borderLight,
                    backgroundColor: colors.neutral.bgCard,
                  }}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  style={{ color: colors.neutral.textSecondary }}
                >
                  {showConfirmPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
            </div>

            {/* select number */}
            <div>
              <PhoneInput
                defaultCountry="gn"
                value={phone}
                onChange={(phone) => setPhone(phone)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <label
              className="flex items-center text-sm mb-4"
              style={{ color: colors.neutral.textSecondary }}
            >
              <input
                type="checkbox"
                className="mr-2"
                style={{ accentColor: colors.primary.main }}
              />
              I agree to all the Terms and Privacy Policies
            </label>

            <button
              type="submit"
              className="w-full text-white py-2 rounded transition-colors mb-6"
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
              Register Now
            </button>
          </form>

          <p
            className="text-sm text-center"
            style={{ color: colors.neutral.textSecondary }}
          >
            Already have an account?{" "}
            <Link
              to="/login"
              className="transition-colors hover:underline"
              style={{ color: colors.primary.main }}
            >
              Login
            </Link>
          </p>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              className="p-2 border rounded-full transition-colors bg-white w-10 h-10  shadow-orange-50 flex items-center justify-center"
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
              <img src="/facebook-logo.png" alt="ios logo" />
            </button>
            <button
              className="p-2 border rounded-full  bg-white w-10 h-10  shadow-orange-50 flex items-center justify-center transition-colors"
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
              <img src="/google-logo.png" alt="ios logo" />
            </button>
            <button
              className="p-2 border rounded-full transition-colors bg-white w-10 h-10  shadow-orange-50 flex items-center justify-center"
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
              <img src="/ios logo.png" alt="ios logo" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
