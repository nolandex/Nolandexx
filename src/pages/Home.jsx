import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaGlobe, FaUserFriends } from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md"
      >
        <div className="bg-white/30 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-white/20">
          <div className="flex flex-col items-center pt-8 pb-6 px-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="rounded-full border-4 border-blue-400 p-1 mb-4"
            >
              <img
                src="https://via.placeholder.com/150"
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover"
              />
            </motion.div>

            <h1 className="text-2xl font-bold text-blue-800 tracking-wide mb-1">
              NolanDex
            </h1>
            <p className="text-blue-600 font-medium tracking-wide mb-4">
              Founder of NolanDex | Online Business Setup
            </p>
          </div>

          <div className="space-y-3 px-6 pb-8">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/6285156779923"
              className="flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 shadow-md"
            >
              <FaWhatsapp className="text-xl" />
              WhatsApp
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://instagram.com/nolandavidco"
              className="flex items-center justify-center gap-3 bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 shadow-md"
            >
              <FaInstagram className="text-xl" />
              Instagram
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://nolandex.vercel.app"
              className="flex items-center justify-center gap-3 bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 shadow-md"
            >
              <FaGlobe className="text-xl" />
              Official Website
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://nolandex.vercel.app/reseller"
              className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 shadow-md"
            >
              <FaUserFriends className="text-xl" />
              Reseller Program
            </motion.a>
          </div>

          <div className="bg-blue-500/10 py-3 text-center">
            <p className="text-blue-700 text-sm font-medium tracking-wide">
              Powered by NolanDex
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
