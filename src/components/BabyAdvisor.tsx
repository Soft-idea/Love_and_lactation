"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const BabyAdvisor: React.FC = () => {
  const [age, setAge] = useState<number | "">("");
  const [weight, setWeight] = useState<number | "">("");
  const [advice, setAdvice] = useState<string>("");

  const handleAdvice = (e: React.FormEvent) => {
    e.preventDefault();

    if (age === "" || weight === "") {
      setAdvice("Please enter both age and weight.");
      return;
    }

    if (age > 24) {
      setAdvice("This advice is only for babies under 2 years old.");
      return;
    }

    if (age < 6) {
      setAdvice(
        "Exclusive breastfeeding is recommended for babies under 6 months. Feed on demand, at least every 2-3 hours."
      );
    } else if (age >= 6 && age <= 12) {
      setAdvice(
        "Continue breastfeeding while introducing solid foods. Ensure the baby gets iron-rich foods."
      );
    } else {
      setAdvice(
        "Breastfeeding should continue with solid meals. Offer milk after meals and before naps."
      );
    }
  };

  return (
    <section id="baby-advisor" className="py-10 bg-blue-50">
      <div className="container mx-auto px-6 max-w-2xl">
        <motion.div
          className="bg-white rounded-lg shadow-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
            Baby Advisor
          </h2>
          <form onSubmit={handleAdvice} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Baby's Age (Months)
              </label>
              <input
                type="number"
                min="0"
                max="24"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Baby's Weight (Kg)
              </label>
              <input
                type="number"
                min="1"
                max="15"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Get Advice
            </button>
          </form>
          {advice && (
            <motion.p
              className="mt-4 text-center text-lg font-semibold text-blue-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {advice}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default BabyAdvisor;
