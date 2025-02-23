"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const tips = [
  "Breastfeed your baby on demand, at least every 2-3 hours.",
  "Ensure a good latch to prevent nipple pain and improve milk flow.",
  "Drink plenty of water to stay hydrated while breastfeeding.",
  "Avoid skipping meals—healthy eating supports milk production.",
  "Skin-to-skin contact helps stimulate milk production.",
  "Try different breastfeeding positions to find what’s most comfortable.",
  "Burp your baby after every feed to reduce gas and discomfort.",
  "If your baby refuses to latch, try expressing milk and using a spoon or cup.",
  "Rest as much as possible; stress can reduce milk supply.",
  "Let your baby finish one breast before switching to the other.",
  "Night feeds are important—prolactin levels are highest at night.",
  "Breastfeeding helps strengthen the baby's immune system.",
  "A good breastfeeding pillow can improve comfort for both mother and baby.",
  "Massage your breasts before feeding to improve milk flow.",
  "Avoid pacifiers in the first few weeks to prevent nipple confusion.",
  "Wear comfortable and supportive nursing bras.",
  "Express milk if you’re away from your baby to maintain milk supply.",
  "Watch for hunger cues like sucking on hands and lip smacking.",
  "Don't introduce solid foods before six months of age.",
  "Enjoy the bonding experience—breastfeeding is not just about nutrition!"
];

const DailyTips: React.FC = () => {
  const [tip, setTip] = useState<string>("");

  useEffect(() => {
    setTip(tips[Math.floor(Math.random() * tips.length)]);
  }, []);

  const getNewTip = () => {
    let newTip;
    do {
      newTip = tips[Math.floor(Math.random() * tips.length)];
    } while (newTip === tip);
    setTip(newTip);
  };

  return (
    <section id="daily-tips" className="py-10 bg-green-50">
      <div className="container mx-auto px-6 max-w-2xl">
        <motion.div
          className="bg-white rounded-lg shadow-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
            Daily Tips
          </h2>
          <p className="text-lg font-medium text-gray-700 mb-4 text-center">
            💡 {tip}
          </p>
          <div className="text-center">
            <button
              onClick={getNewTip}
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300"
            >
              Get New Tip
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DailyTips;
