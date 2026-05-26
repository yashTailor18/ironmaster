import logo from "../../assets/iron.png";

import { Link } from "react-router-dom";

function Navbar() {

  return (
    <nav className="w-full border-b border-gray-800 bg-black text-white px-8 py-5 flex items-center justify-between sticky top-0 z-50">

      {/* LEFT SIDE LOGO */}
      <Link to="/">

        <div className="flex items-center gap-3 cursor-pointer">

          <img
            src={logo}
            alt="IRONMASTER Logo"
            className="w-11 h-11 object-contain bg-white rounded-xl p-1"
          />

          <div>

            <h1 className="text-2xl font-black tracking-[4px]">
              IRONMASTER
            </h1>

            <p className="text-[10px] text-gray-400 tracking-[3px] uppercase">
              Premium Laundry Service
            </p>

          </div>

        </div>

      </Link>

      {/* CENTER MENU */}
      <ul className="hidden lg:flex items-center gap-10 text-sm uppercase tracking-[3px]">

        {/* HOME */}
        <Link to="/">
          <li className="hover:text-gray-400 transition duration-300 cursor-pointer">
            Home
          </li>
        </Link>

        {/* SERVICES DROPDOWN */}
        <li className="relative group cursor-pointer">

          <div className="flex items-center gap-2 hover:text-gray-400 transition duration-300">

            Services

            <span className="text-xs">▼</span>

          </div>

          {/* DROPDOWN */}
          <div className="absolute top-8 left-0 bg-[#111111] border border-gray-800 rounded-2xl shadow-2xl min-w-[260px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-4 z-50">

            <div className="flex flex-col gap-2">

              <Link to="/services/laundry">

                <div className="px-4 py-3 rounded-xl hover:bg-black transition duration-300">
                  🧺 Laundry Washing
                </div>

              </Link>

              <Link to="/services/ironings">

                <div className="px-4 py-3 rounded-xl hover:bg-black transition duration-300">
                  🧼 Steam Ironings
                </div>

              </Link>

              <Link to="/services/dry-cleaning">

                <div className="px-4 py-3 rounded-xl hover:bg-black transition duration-300">
                  👔 Dry Cleaning
                </div>

              </Link>

              <Link to="/services/shoe-cleaning">

                <div className="px-4 py-3 rounded-xl hover:bg-black transition duration-300">
                  👟 Shoe Cleaning
                </div>

              </Link>

              <Link to="/services/blanket-cleaning">

                <div className="px-4 py-3 rounded-xl hover:bg-black transition duration-300">
                  🛏 Blanket Cleaning
                </div>

              </Link>

            </div>

          </div>

        </li>

        {/* PRICING */}
        <Link to="/pricing">

          <li className="hover:text-gray-400 transition duration-300 cursor-pointer">
            Pricing
          </li>

        </Link>

        {/* TRACK ORDER */}
        <Link to="/track-order">

          <li className="hover:text-gray-400 transition duration-300 cursor-pointer">
            Track Order
          </li>

        </Link>

        {/* CONTACT */}
        <Link to="/contact">

          <li className="hover:text-gray-400 transition duration-300 cursor-pointer">
            Contact
          </li>

        </Link>

      </ul>

      {/* RIGHT BUTTON */}
      <Link to="/book-pickup">

        <button className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-300 transition duration-300 hover:scale-105">

          Book Pickup

        </button>

      </Link>

    </nav>
  );
}

export default Navbar;