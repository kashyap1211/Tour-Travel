import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FaPlane, FaHotel, FaMapMarkedAlt, FaCar } from "react-icons/fa";

const services = [
  { icon: <FaPlane size={40} />, title: "Flight Booking", description: "Book affordable flights to your favorite destinations." },
  { icon: <FaHotel size={40} />, title: "Hotel Reservations", description: "Find and book top-rated hotels at the best prices." },
  { icon: <FaMapMarkedAlt size={40} />, title: "Tour Packages", description: "Explore tailored tour packages for an unforgettable experience." },
  { icon: <FaCar size={40} />, title: "Car Rentals", description: "Rent vehicles for a comfortable and convenient journey." }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-10 px-5">
      <motion.h1 
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Services
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.1 }}
          >
            <Card className="p-6 bg-white text-black shadow-lg rounded-2xl text-center">
              <div className="flex justify-center mb-4 text-blue-500">{service.icon}</div>
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
