// "use client"

// import type React from "react"
// import { useState } from "react"
// import { motion } from "framer-motion"



// const Register: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   })

//   const [message, setMessage] = useState("")

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()

//     // Basic validation
//     if (formData.password !== formData.confirmPassword) {
//       setMessage("Passwords do not match!")
//       return
//     }

//     setMessage("Registration successful! 🎉")
//     // Here, you can integrate API calls to register the user
//   }

//   return (
//     <section id="register" className="py-20 bg-purple-100">
//       <div className="container mx-auto px-6">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Join our Community</h2>
//         <h1 className="text-xl text-center text-gray-800 mb-8">Get daily breastfeeding tips at your convenience!</h1>
//         <motion.div
//           className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <form onSubmit={handleSubmit} className="space-y-4">
//             {/* Name Field */}
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded-md"
//                 required
//               />
//             </div>

//             {/* Email Field */}
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded-md"
//                 required
//               />
//             </div>

//             {/* Password Field */}
//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded-md"
//                 required
//               />
//             </div>

//             {/* Confirm Password Field */}
//             <div>
//               <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
//                 Confirm Password
//               </label>
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 name="confirmPassword"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded-md"
//                 required
//               />
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full bg-purple-600 text-white p-2 rounded-md hover:bg-purple-700 transition duration-300"
//             >
//               Register
//             </button>
//           </form>

//           {/* Success/Error Message */}
//           {message && (
//             <motion.p
//               className={`mt-4 text-center text-lg font-semibold ${
//                 message.includes("successful") ? "text-green-600" : "text-red-600"
//               }`}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               {message}
//             </motion.p>
//           )}
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default Register

