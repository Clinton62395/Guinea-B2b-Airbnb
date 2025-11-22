import React from "react";
import { Link } from "react-router-dom";
import colors from "../components/colorsPalette";

export const LoginPage = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: colors.neutral.bgSection }}
    >
      <div
        className="shadow-lg rounded-lg flex w-full max-w-4xl overflow-hidden"
        style={{ backgroundColor: colors.neutral.bgCard }}
      >
        {/* Image section */}
        <div
          className=" relative w-1/2  bg-cover bg-center rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
          style={{ backgroundImage: "url('/guinea logo.png')" }}
        >
          {/* Overlay optionnel pour lisibilité */}
          <div className="w-full h-full bg-black/10 rounded-xl flex items-center justify-center">
            <span className=" absolute top-10 text-white text-lg font-semibold  logo-text">
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
            Login to access your hotel reservation account:
          </p>

          <form>
            <label
              className="block mb-2 text-sm font-medium"
              style={{ color: colors.neutral.textSecondary }}
            >
              Email
            </label>
            <div>
              <input
                type="email"
                className="w-full p-2 border rounded mb-4"
                style={{
                  borderColor: colors.neutral.borderLight,
                  backgroundColor: colors.neutral.bgCard,
                }}
                placeholder="easyset24@gmail.com"
              />
            </div>

            <div>
              <label
                className="block mb-2 text-sm font-medium"
                style={{ color: colors.neutral.textSecondary }}
              >
                Password
              </label>
              <input
                type="password"
                className="w-full p-2 border rounded mb-4"
                style={{
                  borderColor: colors.neutral.borderLight,
                  backgroundColor: colors.neutral.bgCard,
                }}
              />
            </div>

            <div className="flex items-center justify-between mb-4">
              <label
                className="flex items-center text-sm"
                style={{ color: colors.neutral.textSecondary }}
              >
                <input type="checkbox" className="mr-2" />
                Remember Me
              </label>
              <Link
                to="/forgot-password"
                className="text-sm hover:underline"
                style={{ color: colors.primary.main }}
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full text-white py-2 rounded transition-colors"
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
              Login
            </button>
          </form>

          <div className="flex justify-center items-center my-6">
            <hr
              className="flex flex-grow"
              style={{ borderColor: colors.neutral.borderLight }}
            />
            <div
              className="text-center mx-2"
              style={{ color: colors.neutral.textSecondary }}
            >
              Or
            </div>
            <hr
              className="flex flex-grow"
              style={{ borderColor: colors.neutral.borderLight }}
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="relative">
              <button
                className="w-full py-2 rounded transition-colors"
                style={{
                  border: `1px solid ${colors.neutral.borderLight}`,
                  backgroundColor: colors.neutral.bgCard,
                  color: colors.neutral.textPrimary,
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = colors.neutral.bgHover;
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = colors.neutral.bgCard;
                }}
              >
                Login with Google
              </button>
            </div>
            <div className="relative">
              <button
                className="w-full py-2 rounded transition-colors"
                style={{
                  border: `1px solid ${colors.neutral.borderLight}`,
                  backgroundColor: colors.neutral.bgCard,
                  color: colors.neutral.textPrimary,
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = colors.neutral.bgHover;
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = colors.neutral.bgCard;
                }}
              >
                Login with Facebook
              </button>
            </div>
            <div className="relative">
              <button
                className="w-full py-2 rounded transition-colors"
                style={{
                  border: `1px solid ${colors.neutral.borderLight}`,
                  backgroundColor: colors.neutral.bgCard,
                  color: colors.neutral.textPrimary,
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = colors.neutral.bgHover;
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = colors.neutral.bgCard;
                }}
              >
                Login with Apple
              </button>
            </div>
          </div>

          <p
            className="mt-6 text-sm text-center"
            style={{ color: colors.neutral.textSecondary }}
          >
            Don't have an account yet?{" "}
            <Link
              to="/register"
              className="hover:underline"
              style={{ color: colors.primary.main }}
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
