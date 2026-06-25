import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}

      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">

        <div className="max-w-7xl mx-auto px-8 py-24">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div>

              <h1 className="text-6xl font-bold leading-tight mb-6">
                Smart Mess
                Management
                for Students
              </h1>

              <p className="text-xl text-blue-100 mb-8">
                Discover, manage and compare
                hostel messes with ease.
                Built for students and mess owners.
              </p>

              <div className="flex gap-4">

                <Link
                  to="/signup"
                  className="
                    bg-white
                    text-blue-700
                    px-8
                    py-4
                    rounded-xl
                    font-semibold
                    shadow-lg
                    hover:scale-105
                    transition
                  "
                >
                  Get Started
                </Link>

                <Link
                  to="/login"
                  className="
                    border-2
                    border-white
                    px-8
                    py-4
                    rounded-xl
                    font-semibold
                    hover:bg-white
                    hover:text-blue-700
                    transition
                  "
                >
                  Login
                </Link>

              </div>

            </div>

            <div className="flex justify-center">

              

            </div>

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose MessMate?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-5xl mb-4">
                🍽️
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Manage Messes
              </h3>

              <p className="text-gray-600">
                Add, update and manage
                mess listings easily.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-5xl mb-4">
                📊
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Analytics
              </h3>

              <p className="text-gray-600">
                Track revenue, listings
                and performance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-5xl mb-4">
                🔒
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Secure Access
              </h3>

              <p className="text-gray-600">
                JWT authentication
                protects your data.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Stats */}

      <section className="bg-white py-20">

        <div className="max-w-6xl mx-auto px-8">

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-5xl font-bold text-blue-600">
                500+
              </h3>
              <p className="text-gray-600 mt-2">
                Students
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-green-600">
                50+
              </h3>
              <p className="text-gray-600 mt-2">
                Mess Listings
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-orange-500">
                20+
              </h3>
              <p className="text-gray-600 mt-2">
                Locations
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-purple-600">
                99%
              </h3>
              <p className="text-gray-600 mt-2">
                Satisfaction
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-blue-600 text-white py-24">

        <div className="max-w-4xl mx-auto text-center px-8">

          <h2 className="text-5xl font-bold mb-6">
            Ready to Manage Your Mess?
          </h2>

          <p className="text-xl mb-8">
            Join MessMate and simplify
            hostel mess management today.
          </p>

          <Link
            to="/signup"
            className="
              bg-white
              text-blue-700
              px-8
              py-4
              rounded-xl
              font-bold
              inline-block
            "
          >
            Start Now
          </Link>

        </div>

      </section>

      {/* Footer */}

      <footer className="bg-gray-900 text-white py-10">

        <div className="max-w-7xl mx-auto px-8 text-center">

          <h3 className="text-2xl font-bold mb-2">
            MessMate
          </h3>

          <p className="text-gray-400">
            Smart Hostel Mess Management Platform
          </p>

          <p className="text-gray-500 mt-4">
            © 2026 MessMate. All rights reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}

export default Home;