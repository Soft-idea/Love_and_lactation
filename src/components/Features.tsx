import type React from "react"
import { motion } from "framer-motion"
import { FaUsers, FaComments, FaHeartbeat, FaBook } from "react-icons/fa"

const features = [
  {
    icon: <FaUsers />,
    title: "Community Support",
    description: "Join a supportive community of mothers sharing experiences",
  },
  {
    icon: <FaComments />,
    title: "AI Doctor",
    description: "Get instant answers to your breastfeeding-related questions.",
  },
  {
    icon: <FaHeartbeat />,
    title: "Health Management",
    description: "Manage your health and get our hotline and location for scheduled visitation.",
  },
  {
    icon: <FaBook />,
    title: "Breastfeeding Tips",
    description: "Access a daily comprehensive tips for breastfeeding your baby.",
  },
]

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-purple-50 rounded-lg p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl text-purple-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

