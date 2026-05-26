

import logo from "../assets/iron.png";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-black text-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center px-6 md:px-20 relative overflow-hidden">

        {/* BACKGROUND GLOW */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-5 rounded-full blur-3xl"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center w-full">

          {/* LEFT CONTENT */}
          <div className="relative z-10">

            <p className="text-gray-500 uppercase tracking-[6px] mb-6">
              Premium Laundry & Ironing
            </p>

            <h1 className="text-6xl md:text-8xl font-black leading-tight mb-8">

              Luxury
              <br />
              Laundry
              <br />
              Experience

            </h1>

            <p className="text-gray-400 text-lg leading-9 max-w-2xl mb-10">

              IronMaster delivers premium laundry, steam ironing,
              dry cleaning, and doorstep garment care services
              designed for modern lifestyles.

            </p>

            <div className="flex gap-6 flex-wrap">

              <Link to="/book-pickup">

                <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-300 transition duration-300 hover:scale-105">

                  Book Pickup

                </button>

              </Link>

              <Link to="/services">

                <button className="border border-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black transition duration-300">

                  Explore Services

                </button>

              </Link>

            </div>

          </div>

          {/* RIGHT SIDE CARD */}
          <div className="relative">

            <div className="bg-[#111111] border border-gray-800 rounded-[50px] p-12 relative overflow-hidden">

              <div className="absolute top-0 right-0 w-60 h-60 bg-white opacity-5 rounded-full blur-3xl"></div>

              <div className="relative z-10">

                <div className="text-9xl mb-10">
                  👔
                </div>

                <h2 className="text-5xl font-black mb-8">
                  Premium Garment Care
                </h2>

                <div className="space-y-6">

                  <div className="flex items-center gap-4">
                    <span className="text-2xl">✔</span>
                    <p className="text-gray-400 text-lg">
                      Doorstep Pickup & Delivery
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-2xl">✔</span>
                    <p className="text-gray-400 text-lg">
                      Premium Fabric Protection
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-2xl">✔</span>
                    <p className="text-gray-400 text-lg">
                      Fast 24 Hour Service
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-2xl">✔</span>
                    <p className="text-gray-400 text-lg">
                      Luxury Steam Finishing
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SERVICES SECTION */}
      <section className="px-6 md:px-20 py-24 bg-[#0b0b0b]">

        <div className="text-center mb-20">

          <p className="text-gray-500 uppercase tracking-[6px] mb-5">
            Our Services
          </p>

          <h2 className="text-5xl md:text-6xl font-black">
            Premium Cleaning Solutions
          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          <div className="bg-black border border-gray-800 rounded-3xl p-10 hover:border-white transition duration-300 hover:-translate-y-3">

            <div className="text-6xl mb-8">
              🧺
            </div>

            <h3 className="text-3xl font-bold mb-5">
              Laundry
            </h3>

            <p className="text-gray-400 leading-8">
              Deep cleaning with premium fabric care solutions.
            </p>

          </div>

          <div className="bg-black border border-gray-800 rounded-3xl p-10 hover:border-white transition duration-300 hover:-translate-y-3">

            <div className="text-6xl mb-8">
              🧼
            </div>

            <h3 className="text-3xl font-bold mb-5">
              Ironing
            </h3>

            <p className="text-gray-400 leading-8">
              Luxury wrinkle-free steam ironing services.
            </p>

          </div>

          <div className="bg-black border border-gray-800 rounded-3xl p-10 hover:border-white transition duration-300 hover:-translate-y-3">

            <div className="text-6xl mb-8">
              👔
            </div>

            <h3 className="text-3xl font-bold mb-5">
              Dry Cleaning
            </h3>

            <p className="text-gray-400 leading-8">
              Premium garment protection for delicate fabrics.
            </p>

          </div>

          <div className="bg-black border border-gray-800 rounded-3xl p-10 hover:border-white transition duration-300 hover:-translate-y-3">

            <div className="text-6xl mb-8">
              👟
            </div>

            <h3 className="text-3xl font-bold mb-5">
              Shoe Care
            </h3>

            <p className="text-gray-400 leading-8">
              Professional sneaker and footwear cleaning care.
            </p>

          </div>

        </div>

      </section>
      {/* WHY CHOOSE US */}
<section className="px-6 md:px-20 py-24">

  <div className="text-center mb-20">

    <p className="text-gray-500 uppercase tracking-[6px] mb-5">
      Why Choose Us
    </p>

    <h2 className="text-5xl md:text-6xl font-black">
      Premium Laundry Experience
    </h2>

    <p className="text-gray-400 text-lg leading-9 max-w-3xl mx-auto mt-8">

      IronMaster combines modern garment care technology with luxury service experience
      to deliver professional laundry solutions for modern lifestyles.

    </p>

  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

    <div className="bg-[#111111] border border-gray-800 rounded-[40px] p-10 hover:border-white transition duration-300">

      <div className="text-7xl mb-8">
        ⚡
      </div>

      <h3 className="text-3xl font-bold mb-6">
        Fast Delivery
      </h3>

      <p className="text-gray-400 leading-9">

        Same-day and next-day delivery options with secure garment handling
        and premium packaging solutions.

      </p>

    </div>

    <div className="bg-[#111111] border border-gray-800 rounded-[40px] p-10 hover:border-white transition duration-300">

      <div className="text-7xl mb-8">
        🧴
      </div>

      <h3 className="text-3xl font-bold mb-6">
        Fabric Protection
      </h3>

      <p className="text-gray-400 leading-9">

        Premium detergents and advanced cleaning technology designed for
        luxury garment safety and fabric longevity.

      </p>

    </div>

    <div className="bg-[#111111] border border-gray-800 rounded-[40px] p-10 hover:border-white transition duration-300">

      <div className="text-7xl mb-8">
        🚚
      </div>

      <h3 className="text-3xl font-bold mb-6">
        Doorstep Service
      </h3>

      <p className="text-gray-400 leading-9">

        Convenient pickup and delivery service tailored for busy professionals
        and modern urban lifestyles.

      </p>

    </div>

  </div>

</section>

      {/* STATS SECTION */}
      <section className="px-6 md:px-20 py-24">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          <div>
            <h2 className="text-6xl font-black mb-4">
              10K+
            </h2>

            <p className="text-gray-400 uppercase tracking-[3px]">
              Happy Customers
            </p>
          </div>

          <div>
            <h2 className="text-6xl font-black mb-4">
              24H
            </h2>

            <p className="text-gray-400 uppercase tracking-[3px]">
              Fast Delivery
            </p>
          </div>

          <div>
            <h2 className="text-6xl font-black mb-4">
              99%
            </h2>

            <p className="text-gray-400 uppercase tracking-[3px]">
              Satisfaction
            </p>
          </div>

          <div>
            <h2 className="text-6xl font-black mb-4">
              5★
            </h2>

            <p className="text-gray-400 uppercase tracking-[3px]">
              Premium Service
            </p>
          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}
<section className="px-6 md:px-20 py-24 bg-[#0b0b0b]">

  <div className="text-center mb-24">

    <p className="text-gray-500 uppercase tracking-[6px] mb-5">
      Process
    </p>

    <h2 className="text-5xl md:text-6xl font-black">
      How IronMaster Works
    </h2>

  </div>

  <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

    <div className="text-center">

      <div className="w-24 h-24 bg-white text-black rounded-full flex items-center justify-center text-4xl font-black mx-auto mb-8">
        1
      </div>

      <h3 className="text-3xl font-bold mb-5">
        Schedule Pickup
      </h3>

      <p className="text-gray-400 leading-8">
        Book your laundry service online within minutes.
      </p>

    </div>

    <div className="text-center">

      <div className="w-24 h-24 bg-white text-black rounded-full flex items-center justify-center text-4xl font-black mx-auto mb-8">
        2
      </div>

      <h3 className="text-3xl font-bold mb-5">
        Pickup Service
      </h3>

      <p className="text-gray-400 leading-8">
        Our executive collects garments from your doorstep.
      </p>

    </div>

    <div className="text-center">

      <div className="w-24 h-24 bg-white text-black rounded-full flex items-center justify-center text-4xl font-black mx-auto mb-8">
        3
      </div>

      <h3 className="text-3xl font-bold mb-5">
        Premium Cleaning
      </h3>

      <p className="text-gray-400 leading-8">
        Garments receive luxury washing and fabric treatment.
      </p>

    </div>

    <div className="text-center">

      <div className="w-24 h-24 bg-white text-black rounded-full flex items-center justify-center text-4xl font-black mx-auto mb-8">
        4
      </div>

      <h3 className="text-3xl font-bold mb-5">
        Fast Delivery
      </h3>

      <p className="text-gray-400 leading-8">
        Fresh garments delivered back to your location.
      </p>

    </div>

  </div>

</section>

      {/* CTA SECTION */}
      <section className="px-6 md:px-20 pb-24">

        <div className="bg-white text-black rounded-[50px] p-16 text-center relative overflow-hidden">

          <div className="absolute top-0 right-0 w-80 h-80 bg-black opacity-5 rounded-full blur-3xl"></div>

          <div className="relative z-10">

            <p className="uppercase tracking-[6px] mb-5 text-gray-600">
              Start Today
            </p>

            <h2 className="text-5xl md:text-7xl font-black leading-tight mb-10">

              Experience Premium
              <br />
              Laundry Service

            </h2>

            <Link to="/book-pickup">

              <button className="bg-black text-white px-10 py-5 rounded-full font-bold hover:bg-gray-800 transition duration-300 hover:scale-105">

                Schedule Pickup

              </button>

            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;