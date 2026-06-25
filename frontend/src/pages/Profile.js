import { useEffect, useState } from "react";
import api from "../services/api";

function Profile() {
  const [profile, setProfile] = useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res =
        await api.get("/profile");

      setProfile(res.data);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-5xl mx-auto">

        {/* Header Card */}

        <div
          className="
            bg-gradient-to-r
            from-blue-600
            to-indigo-600
            rounded-3xl
            p-8
            text-white
            shadow-xl
            mb-8
          "
        >
          <div className="flex items-center gap-6">

            <div
              className="
                w-24
                h-24
                rounded-full
                bg-white
                text-blue-600
                flex
                items-center
                justify-center
                text-4xl
                font-bold
              "
            >
              {profile?.username?.charAt(0).toUpperCase()}
            </div>

            <div>
              <h1 className="text-4xl font-bold">
                {profile.username}
              </h1>

              <p className="text-blue-100 mt-2">
                {profile.email}
              </p>

              <span
                className="
                  inline-block
                  mt-3
                  bg-green-500
                  px-4
                  py-1
                  rounded-full
                  text-sm
                "
              >
                Active User
              </span>
            </div>

          </div>
        </div>

        {/* Info Cards */}

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow">

            <h3 className="text-gray-500 mb-2">
              Username
            </h3>

            <p className="text-2xl font-bold">
              {profile.username}
            </p>

          </div>

          <div className="bg-white p-6 rounded-2xl shadow">

            <h3 className="text-gray-500 mb-2">
              Email Address
            </h3>

            <p className="text-2xl font-bold break-all">
              {profile.email}
            </p>

          </div>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <div className="bg-white p-6 rounded-2xl shadow">

            <h3 className="text-gray-500">
              Account Status
            </h3>

            <p className="text-3xl font-bold text-green-600 mt-2">
              Active
            </p>

          </div>

          <div className="bg-white p-6 rounded-2xl shadow">

            <h3 className="text-gray-500">
              Role
            </h3>

            <p className="text-3xl font-bold text-blue-600 mt-2">
              User
            </p>

          </div>

          <div className="bg-white p-6 rounded-2xl shadow">

            <h3 className="text-gray-500">
              Joined
            </h3>

            <p className="text-3xl font-bold text-purple-600 mt-2">
              2025
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;