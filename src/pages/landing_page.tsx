import React, { useState, useEffect, createContext, useContext } from "react";
import Navbar from "../components/navbar";
import Home from "./Home";

// Create context for active role
export const ActiveRoleContext = createContext<{
  activeRole: string | null;
  setActiveRole: (role: string | null) => void;
  activePage: string | null;
  setActivePage: (page: string | null) => void;
}>({
  activeRole: null,
  setActiveRole: () => {},
  activePage: null,
  setActivePage: () => {},
});

// Hook to use active role in other components
export const useActiveRole = () => useContext(ActiveRoleContext);

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Employee");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [zoomOut, setZoomOut] = useState(false);
  const [errorShake, setErrorShake] = useState(false);
  const [fadeWhite, setFadeWhite] = useState(false);
  const [activeRole, setActiveRole] = useState<string | null>(null);
  const [activePage, setActivePage] = useState<string | null>(null);

  // Ensure the global body background is the app background once logged in.
  // This avoids teal/green gutters showing after transitioning from the login screen.
  useEffect(() => {
    if (!activeRole) return;
    const prev = document.body.style.backgroundColor || "";
    document.body.style.backgroundColor = "#F2F7F8";
    return () => {
      document.body.style.backgroundColor = prev;
    };
  }, [activeRole]);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setErrorShake(false);

    if (!email || !password) {
      setError("Please enter username and password.");
      setErrorShake(true);
      setTimeout(() => setErrorShake(false), 600);
      return;
    }

    try {
      setIsLoading(true);

      const ZOOM_MS = 1000;
      const FADE_MS = 300;
      setZoomOut(true);
      setTimeout(() => setFadeWhite(true), ZOOM_MS);
      setTimeout(() => {
        setActiveRole(role);
      }, ZOOM_MS + FADE_MS);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Login failed");
      setErrorShake(true);
      setTimeout(() => setErrorShake(false), 700);
    } finally {
      setIsLoading(false);
    }
  };

  // If user is logged in, show the active role
  if (activeRole) {
    return (
      <ActiveRoleContext.Provider
        value={{ activeRole, setActiveRole, activePage, setActivePage }}
      >
        <>
          <Navbar role={activeRole ?? "Employee"} />

          {/* Home page under the fixed navbar */}
          <div className="pt-20 w-full bg-gray-50">
            <Home />
            {/* <Applications/> */}
          </div>
        </>
      </ActiveRoleContext.Provider>
    );
  }

  return (
    <ActiveRoleContext.Provider
      value={{ activeRole, setActiveRole, activePage, setActivePage }}
    >
      <div className="h-screen w-screen flex items-center justify-center bg-[#008080] overflow-hidden">
        {/* Component-level styles */}
        <style>{`
          html, body { margin: 0; padding: 0; height: 100%; width: 100%; overflow: hidden; background-color: #008080; }
          @keyframes shakeX { 0%{transform:translateX(0)}25%{transform:translateX(-6px)}50%{transform:translateX(6px)}75%{transform:translateX(-4px)}100%{transform:translateX(0)} }
          .shake { animation: shakeX 0.6s cubic-bezier(.36,.07,.19,.97); }
          @keyframes fadeUp { from { transform: translateY(6px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }
          .fade-in-up { animation: fadeUp 640ms cubic-bezier(.22,.9,.3,1) both; }
          @keyframes pulseRing { 0% { box-shadow: 0 0 0 0 rgba(0,128,128,0.28) } 70% { box-shadow: 0 0 0 18px rgba(0,128,128,0.02) } 100% { box-shadow: 0 0 0 0 rgba(0,128,128,0) } }
          .login-card { transition: transform 1000ms cubic-bezier(.2,.9,.25,1), opacity 800ms ease, filter 800ms ease; }
          .login-card.zoom-out { transform: scale(0.7); opacity: 0; filter: blur(8px); }
          .ust-ring { animation: pulseRing 1600ms infinite; }
        `}</style>

        {/* Zoom animation overlay */}
        {zoomOut && (
          <div className="fixed inset-0 z-40 flex items-center justify-center pointer-events-none">
            <div className="bg-white rounded-2xl p-6 shadow-xl flex items-center gap-6">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center ust-ring overflow-auto p-2 shadow-lg border-2 border-gray-100">
                  <img
                    src="https://th.bing.com/th/id/OIP.dJyDYtvxRwYypCbYf4Xh_gAAAA?w=158&h=180&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1"
                    alt="UST Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="text-gray-800 font-semibold text-xl">
                Taking you to your workspace...
              </div>
            </div>
          </div>
        )}

        {/* Fade-to-white overlay */}
        <div
          className={`fixed inset-0 z-50 pointer-events-none bg-white transition-opacity duration-300 ${
            fadeWhite ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Centered Login Card */}
        <div
          className={`login-card bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md mx-4 ${
            zoomOut ? "zoom-out" : ""
          }`}
        >
          <div
            className={`transition-all duration-500 ${
              mounted
                ? "opacity-100 translate-y-0 fade-in-up"
                : "opacity-0 -translate-y-4"
            }`}
          >
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <img
                src="https://th.bing.com/th/id/OIP.dJyDYtvxRwYypCbYf4Xh_gAAAA?w=158&h=180&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1"
                alt="UST Logo"
                className="h-10"
              />
            </div>

            {/* Title */}
            <h2 className="text-base font-semibold text-center text-gray-800 mb-8">
              Sign in with your corporate identity
            </h2>

            {/* Error Message */}
            {error && (
              <div
                className={`mb-4 text-sm text-red-600 text-center ${
                  errorShake ? "shake" : ""
                }`}
              >
                {error}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#008080] ${
                    errorShake ? "shake" : ""
                  }`}
                  placeholder="Enter your username"
                  required
                />
              </div>

              <div>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#008080]"
                  required
                />
              </div>

              <div>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#008080]"
                >
                  <option>Employee</option>
                  <option>TP Manager</option>
                  <option>WFM</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#008080] text-white py-2.5 rounded hover:bg-[#006666] transition transform active:scale-95 font-medium"
              >
                <span className="inline-flex items-center justify-center gap-3">
                  {isLoading && (
                    <svg
                      className="w-5 h-5 animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                  )}
                  <span>{isLoading ? "Signing in..." : "Sign in"}</span>
                </span>
              </button>
            </form>

            {/* Help links */}
            <div className="text-center mt-4">
              <a href="#" className="text-sm text-[#008080] hover:underline">
                Can't access your account?
              </a>
            </div>

            <div className="mt-6 flex justify-center gap-6 text-sm text-gray-500">
              <a href="#" className="hover:underline">
                Privacy
              </a>
              <a href="#" className="hover:underline">
                Need Help
              </a>
            </div>
          </div>
        </div>
      </div>
    </ActiveRoleContext.Provider>
  );
};

export default LoginPage;
