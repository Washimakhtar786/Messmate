import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav
      className="
        sticky
        top-0
        z-50
        bg-white
        shadow-sm
        border-b
        border-gray-100
      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="flex justify-between items-center h-16">

          {/* Logo */}

          <Link
            to="/"
            className="
              text-2xl
              font-extrabold
              text-gray-900
              tracking-tight
            "
          >
            MessMate
          </Link>

          {/* Menu */}

          <div className="flex items-center gap-6">

            <Link
              to="/"
              className="
                text-gray-700
                font-medium
                hover:text-blue-600
                transition
              "
            >
              Home
            </Link>

            {user && (
              <>
                <Link
                  to="/dashboard"
                  className="
                    text-gray-700
                    font-medium
                    hover:text-blue-600
                    transition
                  "
                >
                  Dashboard
                </Link>

                <Link
                  to="/profile"
                  className="
                    text-gray-700
                    font-medium
                    hover:text-blue-600
                    transition
                  "
                >
                  Profile
                </Link>
              </>
            )}

            {!user && (
              <>
                <Link
                  to="/login"
                  className="
                    text-gray-700
                    font-medium
                    hover:text-blue-600
                    transition
                  "
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  className="
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    px-5
                    py-2.5
                    rounded-lg
                    font-semibold
                    shadow-sm
                    transition
                  "
                >
                  Sign Up
                </Link>
              </>
            )}

            {user && (
              <button
                onClick={logout}
                className="
                  bg-red-500
                  hover:bg-red-600
                  text-white
                  px-5
                  py-2.5
                  rounded-lg
                  font-semibold
                  shadow-sm
                  transition
                "
              >
                Logout
              </button>
            )}

          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;