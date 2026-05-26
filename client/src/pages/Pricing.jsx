import { Link } from "react-router-dom";

function Pricing() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="px-6 md:px-20 py-24 text-center">

        <p className="text-gray-500 uppercase tracking-[6px] mb-6">
          Pricing Plans
        </p>

        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">

          Premium Laundry
          <br />
          Pricing Solutions

        </h1>

        <p className="text-gray-400 text-lg leading-9 max-w-3xl mx-auto">

          Affordable luxury care for your clothes with premium washing,
          ironing, dry cleaning, and doorstep delivery services.

        </p>

      </section>

      {/* PRICING CARDS */}
      <section className="px-6 md:px-20 pb-24">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* BASIC PLAN */}
          <div className="bg-[#111111] border border-gray-800 rounded-[40px] p-10 hover:border-white transition duration-300">

            <p className="text-gray-500 uppercase tracking-[4px] mb-4">
              Basic Care
            </p>

            <h2 className="text-5xl font-black mb-6">
              ₹299
            </h2>

            <p className="text-gray-400 leading-8 mb-10">
              Perfect for daily laundry and basic clothing care.
            </p>

            <div className="space-y-5 mb-12">

              <div className="flex items-center gap-4">
                <span>✔</span>
                <p className="text-gray-400">
                  Laundry Washing
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span>✔</span>
                <p className="text-gray-400">
                  Steam Ironing
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span>✔</span>
                <p className="text-gray-400">
                  24H Delivery
                </p>
              </div>

            </div>

            <Link to="/book-pickup">

              <button className="w-full border border-white py-4 rounded-full font-bold hover:bg-white hover:text-black transition duration-300">

                Choose Plan

              </button>

            </Link>

          </div>

          {/* PREMIUM PLAN */}
          <div className="bg-white text-black rounded-[40px] p-10 scale-105 shadow-2xl relative overflow-hidden">

            <div className="absolute top-0 right-0 bg-black text-white px-5 py-2 rounded-bl-2xl text-sm font-bold uppercase tracking-[2px]">
              Popular
            </div>

            <p className="text-gray-600 uppercase tracking-[4px] mb-4">
              Premium Care
            </p>

            <h2 className="text-5xl font-black mb-6">
              ₹599
            </h2>

            <p className="text-gray-700 leading-8 mb-10">
              Best choice for premium fabric care and express services.
            </p>

            <div className="space-y-5 mb-12">

              <div className="flex items-center gap-4">
                <span>✔</span>
                <p>
                  Laundry + Ironing
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span>✔</span>
                <p>
                  Dry Cleaning Included
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span>✔</span>
                <p>
                  Same Day Delivery
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span>✔</span>
                <p>
                  Premium Fabric Protection
                </p>
              </div>

            </div>

            <Link to="/book-pickup">

              <button className="w-full bg-black text-white py-4 rounded-full font-bold hover:bg-gray-800 transition duration-300">

                Choose Plan

              </button>

            </Link>

          </div>

          {/* LUXURY PLAN */}
          <div className="bg-[#111111] border border-gray-800 rounded-[40px] p-10 hover:border-white transition duration-300">

            <p className="text-gray-500 uppercase tracking-[4px] mb-4">
              Luxury Care
            </p>

            <h2 className="text-5xl font-black mb-6">
              ₹999
            </h2>

            <p className="text-gray-400 leading-8 mb-10">
              Complete luxury garment care with VIP express delivery.
            </p>

            <div className="space-y-5 mb-12">

              <div className="flex items-center gap-4">
                <span>✔</span>
                <p className="text-gray-400">
                  All Premium Services
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span>✔</span>
                <p className="text-gray-400">
                  Shoe Cleaning Included
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span>✔</span>
                <p className="text-gray-400">
                  Blanket & Bedding Care
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span>✔</span>
                <p className="text-gray-400">
                  VIP Express Delivery
                </p>
              </div>

            </div>

            <Link to="/book-pickup">

              <button className="w-full border border-white py-4 rounded-full font-bold hover:bg-white hover:text-black transition duration-300">

                Choose Plan

              </button>

            </Link>

          </div>

        </div>

      </section>

      {/* EXTRA SERVICES */}
      <section className="px-6 md:px-20 py-24 bg-[#0b0b0b]">

        <div className="text-center mb-20">

          <p className="text-gray-500 uppercase tracking-[6px] mb-5">
            Extra Services
          </p>

          <h2 className="text-5xl md:text-6xl font-bold">
            Additional Premium Care
          </h2>

        </div>

        <div className="max-w-5xl mx-auto bg-[#111111] border border-gray-800 rounded-[40px] p-12">

          <div className="space-y-8">

            <div className="flex justify-between border-b border-gray-800 pb-5">
              <span className="text-xl text-gray-400">
                Sneaker Cleaning
              </span>
              <span className="text-2xl font-bold">
                ₹199
              </span>
            </div>

            <div className="flex justify-between border-b border-gray-800 pb-5">
              <span className="text-xl text-gray-400">
                Blanket Cleaning
              </span>
              <span className="text-2xl font-bold">
                ₹299
              </span>
            </div>

            <div className="flex justify-between border-b border-gray-800 pb-5">
              <span className="text-xl text-gray-400">
                Express Delivery
              </span>
              <span className="text-2xl font-bold">
                ₹99
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-xl text-gray-400">
                Premium Packaging
              </span>
              <span className="text-2xl font-bold">
                ₹149
              </span>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Pricing;