import { useState, useEffect } from "react";
import AddMessForm from "../components/AddMessForm";
import MessList from "../components/MessList";
import api from "../services/api";

function Dashboard() {

  const [refresh, setRefresh] =
    useState(false);

  const [messes, setMesses] =
    useState([]);

  const [searchTerm, setSearchTerm] =
    useState("");

  const [darkMode, setDarkMode] =
    useState(
      localStorage.getItem(
        "darkMode"
      ) === "true"
    );

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  useEffect(() => {
    fetchMesses();
  }, [refresh]);

  useEffect(() => {

    localStorage.setItem(
      "darkMode",
      darkMode
    );

  }, [darkMode]);

  const fetchMesses = async () => {
    try {

      const res =
        await api.get("/messes");

      setMesses(res.data);

    } catch (error) {

      console.log(error);

    }
  };

  // Stats

  const totalMesses =
    messes.length;

  const activeListings =
    messes.length;

  const totalRevenue =
    messes.reduce(
      (sum, mess) =>
        sum +
        Number(mess.price),
      0
    );

  return (

    <div
      className={`
        min-h-screen
        p-8
        ${
          darkMode
            ? "bg-slate-900 text-white"
            : "bg-gray-100 text-black"
        }
      `}
    >

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div
          className="
          flex
          justify-between
          items-center
          mb-8
        "
        >

          <h1 className="text-4xl font-bold">
            Mess Dashboard
          </h1>

          <button
            onClick={() =>
              setDarkMode(
                !darkMode
              )
            }
            className="
              px-4
              py-2
              rounded-lg
              bg-slate-800
              text-white
              hover:bg-slate-700
            "
          >
            {darkMode
              ? "☀️ Light Mode"
              : "🌙 Dark Mode"}
          </button>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-3 gap-6 mb-8">

          <div
            className={`
              p-6
              rounded-xl
              shadow
              ${
                darkMode
                  ? "bg-slate-800"
                  : "bg-white"
              }
            `}
          >
            <h3 className="text-gray-500">
              Total Messes
            </h3>

            <p className="text-3xl font-bold text-blue-600">
              {totalMesses}
            </p>
          </div>

          <div
            className={`
              p-6
              rounded-xl
              shadow
              ${
                darkMode
                  ? "bg-slate-800"
                  : "bg-white"
              }
            `}
          >
            <h3 className="text-gray-500">
              Active Listings
            </h3>

            <p className="text-3xl font-bold text-green-600">
              {activeListings}
            </p>
          </div>

          <div
            className={`
              p-6
              rounded-xl
              shadow
              ${
                darkMode
                  ? "bg-slate-800"
                  : "bg-white"
              }
            `}
          >
            <h3 className="text-gray-500">
              Monthly Revenue
            </h3>

            <p className="text-3xl font-bold text-orange-500">
              ₹{" "}
              {totalRevenue.toLocaleString()}
            </p>
          </div>

        </div>

        {/* Search */}

        <div className="mb-8">

          <input
            type="text"
            placeholder="🔍 Search Mess..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(
                e.target.value
              )
            }
            className={`
              w-full
              p-4
              rounded-xl
              shadow
              border
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500

              ${
                darkMode
                  ? "bg-slate-800 border-slate-700 text-white"
                  : "bg-white"
              }
            `}
          />

        </div>

        <AddMessForm
          onMessAdded={
            handleRefresh
          }
        />

        <MessList
          refresh={refresh}
          searchTerm={searchTerm}
          darkMode={darkMode}
        />

      </div>

    </div>
  );
}

export default Dashboard;