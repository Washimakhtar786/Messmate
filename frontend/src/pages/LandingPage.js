import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/mess-bg.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Main Card */}
      <div className="relative z-10 w-[1000px] h-[620px] flex rounded-[30px] overflow-hidden shadow-2xl">

        {/* Left Section */}
        <div className="w-[52%] bg-black/30 backdrop-blur-md flex flex-col justify-center px-12">

          <h1 className="text-white text-[58px] font-bold leading-tight mb-10">
            Sign up for the hostel
            <br />
            mess of your choice:
          </h1>

          <div className="space-y-6">

            <button
              className="
                w-full
                bg-white/90
                hover:bg-white
                rounded-2xl
                py-5
                px-6
                flex
                items-center
                justify-between
                text-[28px]
                font-semibold
                transition
              "
            >
              already a mess inmate?

              <div className="h-8 w-8 rounded-full border-[5px] border-red-300"></div>
            </button>

            <button
              className="
                w-full
                bg-white/90
                hover:bg-white
                rounded-2xl
                py-5
                px-6
                flex
                items-center
                justify-between
                text-[28px]
                font-semibold
                transition
              "
            >
              not yet a mess inmate?

              <div className="h-8 w-8 rounded-full border-[5px] border-red-300"></div>
            </button>
          </div>

          <Link
            to="/login"
            className="
              mt-10
              w-[130px]
              text-center
              bg-red-400
              hover:bg-red-500
              text-white
              text-[28px]
              font-bold
              py-3
              rounded-2xl
              transition
            "
          >
            next
          </Link>
        </div>

        {/* Right Section */}
        <div
          className="
            w-[48%]
            bg-gradient-to-br
            from-red-400
            via-red-500
            to-pink-400
            flex
            flex-col
            items-center
            justify-center
            relative
          "
        >
          {/* Logo */}
          <div className="text-white text-[120px] mb-6">
            🍽️
          </div>

          <h1 className="text-white text-[92px] font-extrabold leading-none">
            MyMess
          </h1>

          <p className="text-white text-center font-bold text-[24px] mt-4 px-10 leading-tight">
            the #1 destination for
            <br />
            all your mess needs
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;