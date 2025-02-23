import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    question: "How often should I breastfeed my baby?",
    answer:
      "Newborns typically feed every 2-3 hours, or about 8-12 times in 24 hours. As they grow, feeding frequency may reduce. However, it is adviced to follow your baby's hunger signals.",
  },
  {
    question: "How do I know if my baby is getting enough milk?",
    answer:
      "Signs include steady weight gain, at least 6 wet diapers a day,regular bowel movements, and a satisfied feeling after feeds.",
  },
  {
    question: "How long should a breastfeeding session last?",
    answer:
      "Sessions usually last 10-45 minutes, depending on the baby's age and feeding efficiency. Let your baby decide whento stop.",
  },
  {
    question: "Can I breastfeed if I have low milk supply?",
    answer:
      "Yes, but consult a lactation professional. Frequent feeding, staying hydrated, eating well, and ensuring proper latch can help boost supply.",
  },  {
    question: "What food should I avoid while breastfeeding?",
    answer:
      "Most foods are safe, but some babies react to caffeine, dairy, or spicy foods. Monitor your baby’s reaction and adjust accordingly..",
  },
  {
    question: "Can I take medications while breastfeeding?",
    answer:
      "Many medications are safe, but always consult a healthcare provider before taking any medication.",
  },  {
    question: "How can I prevent sore or cracked nipples?",
    answer:
      "Ensure a proper latch, change breastfeeding positions, and apply lanolin or breast milk to soothe nipples.",
  },  {
    question: "Is it normal for my baby to cluster feed?",
    answer:
      "Yes, cluster feeding (frequent, short feeds) is common, especially during growth spurts. It helps increase milk supply.",
  },  {
    question: "How do I store breast milk safely?",
    answer:
      "Store in clean containers, refrigerate for up to 4 days, freeze for up to 6 months, and thaw in the fridge or warm water.",
  },  {
    question: "How can I increase my milk supply?",
    answer:
      "Nurse frequently, stay hydrated, eat a balanced diet, and try lactation foods like oats and fenugreek.",
  },  {
    question: "Can I breastfeed if I have mastitis?",
    answer:
      "Yes, continuing to breastfeed can help clear the infection. Apply warm compresses and consult a doctor if needed.",
  },  {
    question: "When should I introduce a bottle or pacifier?",
    answer:
      "Experts recommend waiting until breastfeeding is well established (about 3–4 weeks).",
  },  {
    question: "How do I handle breastfeeding in public?",
    answer:
      "Use a nursing cover if you prefer, wear easy-access clothing, and find a comfortable space. Many places have nursing rooms.",
  },  {
    question: "When should I start weaning my baby?",
    answer:
      "The World Health Organization recommends exclusive breastfeeding for 6 months and continued breastfeeding along with solids until at least age 2.",
  },  {
    question: "Can I breastfeed while pregnant?",
    answer:
      "Yes, but some women may experience reduced milk supply. Consult your doctor if you have concerns.",
  },  
  // Add more FAQs here
]

const FAQ: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4 rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className="w-full text-left p-4 bg-purple-50 hover:bg-purple-100 transition duration-300"
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
              </button>
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 bg-white"
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

