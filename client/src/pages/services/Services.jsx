import { Link } from "react-router-dom";

function Services() {

  const services = [
    {
      title: "Laundry Washing",
      icon: "🧺",
      path: "/services/laundry",
      description:
        "Premium washing service with deep cleaning and fabric protection.",
    },

    {
      title: "Steam Ironings",
      icon: "🧼",
      path: "/services/ironings",
      description:
        "Wrinkle-free ironing with professional steam finishing.",
    },

    {
      title: "Dry Cleaning",
      icon: "👔",
      path: "/services/dry-cleaning",
      description:
        "Luxury dry cleaning for premium and delicate garments.",
    },

    {
      title: "Shoe Cleaning",
      icon: "👟",
      path: "/services/shoe-cleaning",
      description:
        "Professional shoe cleaning and whitening service.",
    },

    {
      title: "Blanket Cleaning",
      icon: "🛏",
      path: "/services/blanket-cleaning",
      description:
        "Deep blanket cleaning with hygiene-focused treatment.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-20 py-24">

      {/* Heading */}
      <div className="text-center mb-24">

        <p className="text-gray-500 uppercase tracking-[6px] mb-5">
          Our Services
        </p>

        <h1 className="text-5xl md:text-7xl font-black">
          Premium Laundry Solutions
        </h1>

        <p className="text-gray-400 mt-8 max-w-3xl mx-auto leading-8">
          Experience luxury laundry and ironing services designed for modern lifestyles.
        </p>

      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {
          services.map((service, index) => (

            <Link key={index} to={service.path}>

              <div className="bg-[#111111] border border-gray-800 rounded-3xl p-10 hover:border-white transition duration-300 hover:-translate-y-3 cursor-pointer h-full">

                <div className="text-6xl mb-8">
                  {service.icon}
                </div>

                <h2 className="text-3xl font-bold mb-5">
                  {service.title}
                </h2>

                <p className="text-gray-400 leading-8">
                  {service.description}
                </p>

              </div>

            </Link>

          ))
        }

      </div>

    </div>
  );
}

export default Services;