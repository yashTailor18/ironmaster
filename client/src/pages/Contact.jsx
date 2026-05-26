import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="px-6 md:px-20 py-24 text-center">

        <p className="text-gray-500 uppercase tracking-[6px] mb-6">
          Contact Us
        </p>

        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">

          Let’s Connect
          <br />
          With IronMaster

        </h1>

        <p className="text-gray-400 text-lg leading-9 max-w-3xl mx-auto">

          Need premium laundry services or support?
          Our team is always ready to help you with luxury garment care solutions.

        </p>

      </section>

      {/* CONTACT SECTION */}
      <section className="px-6 md:px-20 pb-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT SIDE */}
          <div className="bg-[#111111] border border-gray-800 rounded-[40px] p-10 md:p-14">

            <p className="text-gray-500 uppercase tracking-[4px] mb-5">
              Contact Information
            </p>

            <h2 className="text-4xl md:text-5xl font-black mb-10">
              Get In Touch
            </h2>

            <div className="space-y-10">

              {/* PHONE */}
              <div className="flex items-start gap-5">

                <div className="bg-white text-black w-16 h-16 rounded-2xl flex items-center justify-center text-3xl">
                  📞
                </div>

                <div>

                  <p className="text-gray-500 mb-2 uppercase tracking-[3px] text-sm">
                    Phone Number
                  </p>

                  <h3 className="text-2xl font-bold">
                    +91 6367502781
                  </h3>

                </div>

              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-5">

                <div className="bg-white text-black w-16 h-16 rounded-2xl flex items-center justify-center text-3xl">
                  📧
                </div>

                <div>

                  <p className="text-gray-500 mb-2 uppercase tracking-[3px] text-sm">
                    Email Address
                  </p>

                  <a
                    href="mailto:yashtailor18112001@gmail.com"
                    className="text-2xl font-bold hover:text-gray-400 transition duration-300 break-all"
                  >
                    yashtailor18112001@gmail.com
                  </a>

                </div>

              </div>

              {/* LOCATION */}
              <div className="flex items-start gap-5">

                <div className="bg-white text-black w-16 h-16 rounded-2xl flex items-center justify-center text-3xl">
                  📍
                </div>

                <div>

                  <p className="text-gray-500 mb-2 uppercase tracking-[3px] text-sm">
                    Office Address
                  </p>

                  <h3 className="text-2xl font-bold leading-10">
                    SS Omnia Complex,
                    <br />
                    Office No 130,
                    <br />
                    Sector 86, Gurgaon,
                    <br />
                    Haryana
                  </h3>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-[#111111] border border-gray-800 rounded-[40px] p-10 md:p-14">

            <p className="text-gray-500 uppercase tracking-[4px] mb-5">
              Send Message
            </p>

            <h2 className="text-4xl md:text-5xl font-black mb-10">
              Contact Form
            </h2>

            <div className="space-y-6">

              {/* NAME */}
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-black border border-gray-700 rounded-2xl px-6 py-5 outline-none focus:border-white"
              />

              {/* EMAIL */}
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-black border border-gray-700 rounded-2xl px-6 py-5 outline-none focus:border-white"
              />

              {/* PHONE */}
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full bg-black border border-gray-700 rounded-2xl px-6 py-5 outline-none focus:border-white"
              />

              {/* MESSAGE */}
              <textarea
                rows="6"
                placeholder="Write Your Message..."
                className="w-full bg-black border border-gray-700 rounded-2xl px-6 py-5 outline-none focus:border-white resize-none"
              ></textarea>

              {/* BUTTON */}
              <button className="w-full bg-white text-black py-5 rounded-2xl font-bold hover:bg-gray-300 transition duration-300 hover:scale-[1.02]">

                Send Message

              </button>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Contact;