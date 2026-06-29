import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

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
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Navbar */}

        <div className="flex items-center justify-between h-16">

          {/* Logo */}

          <Link
            to="/"
            onClick={closeMenu}
            className="
              text-2xl
              font-extrabold
              text-gray-900
              tracking-tight
            "
          >
            MessMate
          </Link>

          {/* Desktop Menu */}

          <div className="hidden md:flex items-center gap-8">

            <Link
              to="/"
              className="font-medium text-gray-700 hover:text-blue-600 transition"
            >
              Home
            </Link>

            {user && (
              <>
                <Link
                  to="/dashboard"
                  className="font-medium text-gray-700 hover:text-blue-600 transition"
                >
                  Dashboard
                </Link>

                <Link
                  to="/profile"
                  className="font-medium text-gray-700 hover:text-blue-600 transition"
                >
                  Profile
                </Link>
              </>
            )}

            {!user && (
              <>
                <Link
                  to="/login"
                  className="font-medium text-gray-700 hover:text-blue-600 transition"
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
                  transition
                "
              >
                Logout
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              md:hidden
              text-gray-800
            "
          >
            {menuOpen ? (
              <HiX size={30} />
            ) : (
              <HiMenu size={30} />
            )}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div
          className="
            md:hidden
            bg-white
            border-t
            border-gray-200
            shadow-lg
          "
        >
          <div className="flex flex-col px-6 py-5 space-y-5">

            <Link
              to="/"
              onClick={closeMenu}
              className="font-medium text-gray-700"
            >
              Home
            </Link>

            {user && (
              <>
                <Link
                  to="/dashboard"
                  onClick={closeMenu}
                  className="font-medium text-gray-700"
                >
                  Dashboard
                </Link>

                <Link
                  to="/profile"
                  onClick={closeMenu}
                  className="font-medium text-gray-700"
                >
                  Profile
                </Link>
              </>
            )}

            {!user && (
              <>
                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="font-medium text-gray-700"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  onClick={closeMenu}
                  className="
                    bg-blue-600
                    text-white
                    rounded-lg
                    py-3
                    text-center
                    font-semibold
                  "
                >
                  Sign Up
                </Link>
              </>
            )}

            {user && (
              <button
                onClick={() => {
                  logout();
                  closeMenu();
                }}
                className="
                  bg-red-500
                  text-white
                  rounded-lg
                  py-3
                  font-semibold
                "
              >
                Logout
              </button>
            )}

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;