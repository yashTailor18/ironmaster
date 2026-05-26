import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-gray-800 text-white">

      {/* Main Footer */}
      <div className="px-8 md:px-20 py-24">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">

          {/* Brand Section */}
          <div>

           

            <p className="text-gray-400 leading-8">
              Premium Laundry & Ironing Service with modern pickup and delivery solutions for your lifestyle.
            </p>

            {/* Social Icons */}
            <div className="flex gap-5 mt-10">

              <div className="w-12 h-12 border border-gray-700 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition duration-300 cursor-pointer">
                <FaInstagram />
              </div>

              <div className="w-12 h-12 border border-gray-700 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition duration-300 cursor-pointer">
                <FaFacebookF />
              </div>

              <div className="w-12 h-12 border border-gray-700 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition duration-300 cursor-pointer">
                <FaLinkedinIn />
              </div>

              <div className="w-12 h-12 border border-gray-700 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition duration-300 cursor-pointer">
                <FaWhatsapp />
              </div>

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-2xl font-bold mb-8">
              Quick Links
            </h3>

            <ul className="space-y-5 text-gray-400">

              <li className="hover:text-white transition cursor-pointer">
                Home
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Services
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Pricing
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Track Order
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Contact
              </li>

            </ul>

          </div>

          {/* Services */}
          <div>

            <h3 className="text-2xl font-bold mb-8">
              Services
            </h3>

            <ul className="space-y-5 text-gray-400">

              <li>Laundry Washing</li>
              <li>Steam Ironing</li>
              <li>Dry Cleaning</li>
              <li>Premium Laundry</li>
              <li>Doorstep Pickup</li>

            </ul>

          </div>

          {/* Contact Info */}
          <div>

            <h3 className="text-2xl font-bold mb-8">
              Contact Info
            </h3>

            <div className="space-y-8 text-gray-400">

              <div className="flex gap-4">

                <FaMapMarkerAlt className="mt-1 text-white" />

                <p className="leading-8">
                  SS Omnia Complex <br />
                  Office No 130 <br />
                  Sector 86 Gurgaon, Haryana
                </p>

              </div>

              <div className="flex gap-4 items-center">

                <FaPhoneAlt className="text-white" />

                <p>
                  +91 6367502781
                </p>

              </div>

              <div className="flex gap-4 items-center">

                <FaEnvelope className="text-white" />

                <p>
                  yashtailor18112001@gmail.com
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Google Maps */}
      <div className="px-8 md:px-20 pb-20">

        <div className="rounded-3xl overflow-hidden border border-gray-800">

          <iframe
            title="IronMaster Location"
            src="https://www.google.com/maps?q=Sector+86+Gurgaon&output=embed"
            className="w-full h-[400px]"
            loading="lazy"
          ></iframe>

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 px-8 md:px-20 py-8">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500">

          <p>
            © 2026 IronMaster. All Rights Reserved.
          </p>

          <p>
            Luxury Laundry & Ironing Experience
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;