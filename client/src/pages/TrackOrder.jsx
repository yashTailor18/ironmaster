import { useState } from "react";

function TrackOrder() {

  const [orderId, setOrderId] = useState("");

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="px-6 md:px-20 py-24 text-center">

        <p className="text-gray-500 uppercase tracking-[6px] mb-6">
          Track Your Order
        </p>

        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">

          Real-Time
          <br />
          Laundry Tracking

        </h1>

        <p className="text-gray-400 text-lg leading-9 max-w-3xl mx-auto">

          Track your laundry pickup, cleaning process, and delivery
          status with our premium live order tracking experience.

        </p>

      </section>

      {/* TRACKING BOX */}
      <section className="px-6 md:px-20">

        <div className="max-w-5xl mx-auto bg-[#111111] border border-gray-800 rounded-[40px] p-10 md:p-16">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">

            {/* INPUT */}
            <div className="lg:col-span-2">

              <label className="block text-gray-400 mb-4 uppercase tracking-[3px] text-sm">
                Enter Tracking ID
              </label>

              <input
                type="text"
                placeholder="IRON12345"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                className="w-full bg-black border border-gray-700 rounded-2xl px-6 py-5 outline-none focus:border-white text-lg"
              />

            </div>

            {/* BUTTON */}
            <div>

              <button className="w-full bg-white text-black py-5 rounded-2xl font-bold hover:bg-gray-300 transition duration-300 hover:scale-105">

                Track Order

              </button>

            </div>

          </div>

        </div>

      </section>

      {/* ORDER STATUS */}
      <section className="px-6 md:px-20 py-24">

        <div className="text-center mb-20">

          <p className="text-gray-500 uppercase tracking-[6px] mb-5">
            Live Status
          </p>

          <h2 className="text-5xl md:text-6xl font-bold">
            Order Progress
          </h2>

        </div>

        {/* STATUS TIMELINE */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* STEP 1 */}
          <div className="bg-[#111111] border border-green-500 rounded-3xl p-10 text-center relative">

            <div className="absolute top-5 right-5 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>

            <div className="text-6xl mb-8">
              📦
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Pickup Confirmed
            </h3>

            <p className="text-gray-400 leading-8">
              Your laundry pickup has been successfully scheduled.
            </p>

          </div>

          {/* STEP 2 */}
          <div className="bg-[#111111] border border-green-500 rounded-3xl p-10 text-center relative">

            <div className="absolute top-5 right-5 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>

            <div className="text-6xl mb-8">
              🚚
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Clothes Picked
            </h3>

            <p className="text-gray-400 leading-8">
              Our executive has collected your garments safely.
            </p>

          </div>

          {/* STEP 3 */}
          <div className="bg-[#111111] border border-yellow-500 rounded-3xl p-10 text-center relative">

            <div className="absolute top-5 right-5 w-4 h-4 bg-yellow-500 rounded-full animate-pulse"></div>

            <div className="text-6xl mb-8">
              🧺
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Cleaning Process
            </h3>

            <p className="text-gray-400 leading-8">
              Your garments are currently under premium care treatment.
            </p>

          </div>

          {/* STEP 4 */}
          <div className="bg-[#111111] border border-gray-700 rounded-3xl p-10 text-center">

            <div className="text-6xl mb-8">
              🏠
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Delivery Pending
            </h3>

            <p className="text-gray-400 leading-8">
              Delivery will be completed after quality inspection.
            </p>

          </div>

        </div>

      </section>

      {/* ORDER DETAILS */}
      <section className="px-6 md:px-20 pb-24">

        <div className="max-w-5xl mx-auto bg-[#111111] border border-gray-800 rounded-[40px] p-12">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 mb-12">

            <div>

              <p className="text-gray-500 uppercase tracking-[4px] mb-3">
                Order ID
              </p>

              <h2 className="text-4xl font-black">
                IRON12345
              </h2>

            </div>

            <div className="bg-green-500 text-black px-8 py-3 rounded-full font-bold w-fit">
              In Progress
            </div>

          </div>

          {/* DETAILS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            <div className="space-y-8">

              <div className="border-b border-gray-800 pb-5">

                <p className="text-gray-500 mb-2">
                  Customer Name
                </p>

                <h3 className="text-2xl font-bold">
                  Yash Tailor
                </h3>

              </div>

              <div className="border-b border-gray-800 pb-5">

                <p className="text-gray-500 mb-2">
                  Service Type
                </p>

                <h3 className="text-2xl font-bold">
                  Premium Laundry + Ironing
                </h3>

              </div>

            </div>

            <div className="space-y-8">

              <div className="border-b border-gray-800 pb-5">

                <p className="text-gray-500 mb-2">
                  Pickup Date
                </p>

                <h3 className="text-2xl font-bold">
                  20 May 2026
                </h3>

              </div>

              <div className="border-b border-gray-800 pb-5">

                <p className="text-gray-500 mb-2">
                  Expected Delivery
                </p>

                <h3 className="text-2xl font-bold">
                  21 May 2026
                </h3>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default TrackOrder;