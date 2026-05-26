import { Link } from "react-router-dom";

function Laundry() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="px-6 md:px-20 py-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>

            <p className="text-gray-500 uppercase tracking-[6px] mb-6">
              Premium Laundry Service
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">

              Luxury Laundry
              <br />
              Washing Solution

            </h1>

            <p className="text-gray-400 text-lg leading-9 max-w-2xl mb-10">

              Experience premium fabric care with deep cleaning technology,
              stain removal expertise, and professional doorstep pickup &
              delivery service designed for modern lifestyles.

            </p>

            <div className="flex gap-6 flex-wrap">

              <Link to="/book-pickup">

                <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-300 transition duration-300 hover:scale-105">

                  Book Pickup

                </button>

              </Link>

              <button className="border border-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black transition duration-300">

                Explore Pricing

              </button>

            </div>

          </div>

          {/* RIGHT SIDE CARD */}
          <div className="bg-[#111111] border border-gray-800 rounded-[40px] p-10 relative overflow-hidden">

            <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-5 rounded-full blur-3xl"></div>

            <div className="relative z-10">

              <div className="text-8xl mb-10">
                🧺
              </div>

              <h2 className="text-4xl font-bold mb-8">
                Premium Washing
              </h2>

              <div className="space-y-6">

                <div className="flex items-center gap-4">
                  <span className="text-2xl">✔</span>
                  <p className="text-gray-400">
                    Deep Fabric Cleaning
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-2xl">✔</span>
                  <p className="text-gray-400">
                    Stain Removal Technology
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-2xl">✔</span>
                  <p className="text-gray-400">
                    Premium Detergent Care
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-2xl">✔</span>
                  <p className="text-gray-400">
                    24 Hour Fast Delivery
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES SECTION */}
      <section className="px-6 md:px-20 py-24 bg-[#0b0b0b]">

        <div className="text-center mb-20">

          <p className="text-gray-500 uppercase tracking-[6px] mb-5">
            Why Choose Us
          </p>

          <h2 className="text-5xl md:text-6xl font-bold">
            Premium Laundry Experience
          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <div className="bg-black border border-gray-800 rounded-3xl p-10 hover:border-white transition duration-300">

            <div className="text-6xl mb-8">
              ⚡
            </div>

            <h3 className="text-3xl font-bold mb-5">
              Fast Processing
            </h3>

            <p className="text-gray-400 leading-8">
              Quick turnaround time with express same-day service availability.
            </p>

          </div>

          <div className="bg-black border border-gray-800 rounded-3xl p-10 hover:border-white transition duration-300">

            <div className="text-6xl mb-8">
              🧴
            </div>

            <h3 className="text-3xl font-bold mb-5">
              Premium Care
            </h3>

            <p className="text-gray-400 leading-8">
              Luxury detergents and fabric-safe washing technology.
            </p>

          </div>

          <div className="bg-black border border-gray-800 rounded-3xl p-10 hover:border-white transition duration-300">

            <div className="text-6xl mb-8">
              🚚
            </div>

            <h3 className="text-3xl font-bold mb-5">
              Doorstep Delivery
            </h3>

            <p className="text-gray-400 leading-8">
              Hassle-free pickup and delivery at your preferred timing.
            </p>

          </div>

        </div>

      </section>

      {/* PRICING SECTION */}
      <section className="px-6 md:px-20 py-24">

        <div className="text-center mb-20">

          <p className="text-gray-500 uppercase tracking-[6px] mb-5">
            Pricing
          </p>

          <h2 className="text-5xl md:text-6xl font-bold">
            Affordable Premium Care
          </h2>

        </div>

        <div className="max-w-4xl mx-auto bg-[#111111] border border-gray-800 rounded-[40px] p-12">

          <div className="space-y-8">

            <div className="flex justify-between border-b border-gray-800 pb-5">
              <span className="text-xl text-gray-400">
                T-Shirts & Shirts
              </span>
              <span className="text-2xl font-bold">
                ₹49
              </span>
            </div>

            <div className="flex justify-between border-b border-gray-800 pb-5">
              <span className="text-xl text-gray-400">
                Jeans & Trousers
              </span>
              <span className="text-2xl font-bold">
                ₹79
              </span>
            </div>

            <div className="flex justify-between border-b border-gray-800 pb-5">
              <span className="text-xl text-gray-400">
                Bedsheets & Curtains
              </span>
              <span className="text-2xl font-bold">
                ₹149
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-xl text-gray-400">
                Premium Express Service
              </span>
              <span className="text-2xl font-bold">
                ₹299
              </span>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Laundry;