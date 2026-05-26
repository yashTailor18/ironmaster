import { Link } from "react-router-dom";

function BlanketCleaning() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="px-6 md:px-20 py-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>

            <p className="text-gray-500 uppercase tracking-[6px] mb-6">
              Premium Blanket Cleaning
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">

              Luxury
              <br />
              Blanket Care Service

            </h1>

            <p className="text-gray-400 text-lg leading-9 max-w-2xl mb-10">

              Keep your blankets, quilts, comforters, and bedding fresh,
              hygienic, and luxurious with our premium deep-cleaning solutions.

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
                🛏
              </div>

              <h2 className="text-4xl font-bold mb-8">
                Deep Bedding Care
              </h2>

              <div className="space-y-6">

                <div className="flex items-center gap-4">
                  <span className="text-2xl">✔</span>
                  <p className="text-gray-400">
                    Deep Hygiene Cleaning
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-2xl">✔</span>
                  <p className="text-gray-400">
                    Dust & Allergy Removal
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-2xl">✔</span>
                  <p className="text-gray-400">
                    Soft Fabric Protection
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-2xl">✔</span>
                  <p className="text-gray-400">
                    Fast Pickup & Delivery
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
            Premium Blanket Cleaning Experience
          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <div className="bg-black border border-gray-800 rounded-3xl p-10 hover:border-white transition duration-300">

            <div className="text-6xl mb-8">
              🧼
            </div>

            <h3 className="text-3xl font-bold mb-5">
              Deep Cleaning
            </h3>

            <p className="text-gray-400 leading-8">
              Professional cleaning process for complete hygiene and freshness.
            </p>

          </div>

          <div className="bg-black border border-gray-800 rounded-3xl p-10 hover:border-white transition duration-300">

            <div className="text-6xl mb-8">
              ✨
            </div>

            <h3 className="text-3xl font-bold mb-5">
              Fabric Protection
            </h3>

            <p className="text-gray-400 leading-8">
              Gentle care technology that maintains softness and quality.
            </p>

          </div>

          <div className="bg-black border border-gray-800 rounded-3xl p-10 hover:border-white transition duration-300">

            <div className="text-6xl mb-8">
              🚚
            </div>

            <h3 className="text-3xl font-bold mb-5">
              Doorstep Service
            </h3>

            <p className="text-gray-400 leading-8">
              Hassle-free pickup and express delivery for your bedding care.
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
            Affordable Bedding Care
          </h2>

        </div>

        <div className="max-w-4xl mx-auto bg-[#111111] border border-gray-800 rounded-[40px] p-12">

          <div className="space-y-8">

            <div className="flex justify-between border-b border-gray-800 pb-5">
              <span className="text-xl text-gray-400">
                Single Blanket Cleaning
              </span>
              <span className="text-2xl font-bold">
                ₹199
              </span>
            </div>

            <div className="flex justify-between border-b border-gray-800 pb-5">
              <span className="text-xl text-gray-400">
                Double Blanket Cleaning
              </span>
              <span className="text-2xl font-bold">
                ₹299
              </span>
            </div>

            <div className="flex justify-between border-b border-gray-800 pb-5">
              <span className="text-xl text-gray-400">
                Comforter & Quilt Care
              </span>
              <span className="text-2xl font-bold">
                ₹399
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-xl text-gray-400">
                Premium Express Service
              </span>
              <span className="text-2xl font-bold">
                ₹499
              </span>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default BlanketCleaning;