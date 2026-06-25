import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";
import { AuthContext } from "../context/AuthContext";

function LoginForm() {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await api.post(
        "/auth/login",
        formData
      );

      login(res.data.token);

      navigate("/dashboard");
    } catch (err) {
      alert("Invalid Credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
        min-h-screen
        bg-gradient-to-br
        from-black
        via-gray-900
        to-black
        flex
        items-center
        justify-center
        px-6
      "
    >
      <div
        className="
          max-w-6xl
          w-full
          rounded-3xl
          overflow-hidden
          shadow-2xl
          grid
          md:grid-cols-2
          bg-white
        "
      >
        {/* Left Side */}

        <div
          className="
            hidden
            md:flex
            flex-col
            justify-center
            p-12
            bg-gradient-to-br
            from-gray-950
            via-black
            to-gray-900
            text-white
          "
        >
          <h1 className="text-5xl font-bold mb-6">
            Welcome Back 👋
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            Manage your hostel mess,
            track listings, update
            details and grow your
            business with MessMate.
          </p>

          <div className="mt-10 flex gap-4">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
          </div>
        </div>

        {/* Right Side */}

        <div className="p-10 md:p-14 bg-white">

          <h2 className="text-5xl font-bold text-gray-900 mb-2">
            Login
          </h2>

          <p className="text-gray-500 mb-10">
            Sign in to your account
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label className="block text-gray-600 mb-2">
                Username
              </label>

              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                placeholder="Enter username"
                className="
                  w-full
                  p-4
                  rounded-xl
                  border
                  border-gray-300
                  focus:ring-2
                  focus:ring-black
                  focus:border-black
                  outline-none
                  transition
                "
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-2">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter password"
                className="
                  w-full
                  p-4
                  rounded-xl
                  border
                  border-gray-300
                  focus:ring-2
                  focus:ring-black
                  focus:border-black
                  outline-none
                  transition
                "
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                bg-black
                hover:bg-gray-900
                text-white
                py-4
                rounded-xl
                font-semibold
                text-lg
                transition
              "
            >
              {loading
                ? "Logging In..."
                : "Login"}
            </button>
          </form>

          <p className="mt-8 text-center text-gray-500">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="
                text-black
                font-semibold
                hover:underline
              "
            >
              Sign Up
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}

export default LoginForm;