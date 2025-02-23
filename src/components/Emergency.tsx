import type React from "react"
import { motion } from "framer-motion"
import { FaPhone, FaHospital } from "react-icons/fa"

const Emergency: React.FC = () => {
  return (
    <section id="emergency" className="py-20 bg-brown-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Emergency Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaPhone className="text-5xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Emergency Hotline</h3>
            <p className="text-gray-600 mb-4 text-sm">24/7 support for urgent breastfeeding-related inquiries</p>
            <p className="text-gray-600 mb-4 text-sm">Please call (+234) 081 8160 0465</p>
            <a
              href="tel:+234 8160 0465"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Call Now
            </a>
          </motion.div>
          {/* <motion.div
            className="bg-white p-6 rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <FaAmbulance className="text-5xl text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Ambulance Service</h3>
            <p className="text-gray-600 mb-4 text-sm">Quick response for medical emergencies</p>
            <a
              href="tel:911"
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
            >
              Request Ambulance
            </a>
          </motion.div> */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FaHospital className="text-5xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Nearby Hospitals</h3>
            <p className="text-gray-600 mb-4 text-sm">Location: 23 Zaria Bypass, Jos 930105, Plateau State</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
              Locate Us Now
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Emergency

