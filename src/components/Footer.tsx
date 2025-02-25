import type React from "react"
// import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"

const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Love & Lactation</h3>
            <p className="text-sm">
              Your one-stop lactation guide, providing support and guidance throughout your journey.
              Feel free to join our family of happy mothers.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="hover:text-purple-300">
                  Features
                </a>
              </li>
              {/* <li>
                <a href="#tracker" className="hover:text-purple-300">
                  Pregnancy Tracker
                </a>
              </li> */}
              <li>
                <a href="#faq" className="hover:text-purple-300">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#chat" className="hover:text-purple-300">
                  AI Chat
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-sm">23 Zaria Bypass, Jos 930105, Platueau</p>
            <p className="text-sm">Email: info@bhuth.org.ng</p>
            <p className="text-sm">Phone: (+234) 081 8160 0465</p>
          </div>
          {/* <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-purple-300">
                <FaFacebook />
              </a>
              <a href="#" className="text-2xl hover:text-purple-300">
                <FaTwitter />
              </a>
              <a href="#" className="text-2xl hover:text-purple-300">
                <FaInstagram />
              </a>
              <a href="#" className="text-2xl hover:text-purple-300">
                <FaYoutube />
              </a>
            </div>
          </div> */}
        </div>
        <div className="mt-8 pt-8 border-t border-purple-800 text-center">
          <p className="text-sm">&copy; 2025 Love and Lactation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

