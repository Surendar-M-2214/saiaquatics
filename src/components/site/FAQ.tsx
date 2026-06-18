import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How much does an aquarium setup cost in Chennai?",
    answer: "The cost of an **Aquarium Setup in Chennai** depends on the size of the tank, the type of setup (freshwater, planted aquascape, or marine/reef), and the custom cabinetry required. At Sai Aquatics, we offer tailored solutions starting from compact home aquariums to large custom commercial displays. Contact us for a free consultation and customized quote."
  },
  {
    question: "Do you provide aquarium maintenance services?",
    answer: "Yes, we provide professional **Aquarium Maintenance in Chennai** for both residential and commercial setups. Our maintenance plans can be customized for weekly, bi-weekly, or monthly visits. They include water testing, filter servicing, algae cleaning, plant trimming, and general fish health checks to keep your aquatic environment balanced and healthy."
  },
  {
    question: "Can you install aquariums for offices?",
    answer: "Absolutely! We specialize in designing and installing **Custom Aquarium** setups for corporate offices, reception areas, restaurants, clinics, and showrooms across Chennai. A professionally maintained aquarium reduces stress and adds a premium aesthetic to any commercial workspace."
  },
  {
    question: "How often should an aquarium be cleaned?",
    answer: "For a healthy ecosystem, a partial water change and light cleaning should be done every 2 weeks. However, a professional **Tank Cleaning in Chennai** (including deep sand vacuuming, filter cleaning, and algae scrubbing) is recommended once a month. Our team provides reliable cleaning services to ensure crystal-clear water and healthy fish."
  },
  {
    question: "Do you sell fish and aquarium accessories?",
    answer: "Yes, Sai Aquatics provides a complete range of **Aquarium Services in Chennai**, which includes supplying healthy, quarantined fish, high-grade aquatic plants, premium fish food, advanced filtration systems, specialized LED lighting, and other high-quality aquarium accessories."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="flow-section bg-slate-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="text-xs font-bold tracking-[0.2em] text-[#00BCD4] uppercase">FAQ</div>
          <h2 className="mt-3 text-4xl font-bold text-[#0B1E36] sm:text-5xl">
            Frequently Asked <span className="text-[#00BCD4]">Questions</span>
          </h2>
          <p className="mt-4 text-slate-500 font-medium max-w-xl mx-auto">
            Everything you need to know about our aquarium setup, maintenance, and services in Chennai.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-lg text-[#0B1E36] pr-4">
                    {faq.question}
                  </span>
                  <div className="grid h-8 w-8 place-items-center rounded-full bg-cyan-50 text-[#00BCD4] transition-colors group-hover:bg-[#00BCD4] group-hover:text-white">
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="border-t border-slate-100 p-6 text-slate-600 leading-relaxed font-medium text-sm sm:text-base">
                        {faq.answer.split("**").map((text, idx) => 
                          idx % 2 === 1 ? <strong key={idx} className="text-[#00BCD4]">{text}</strong> : text
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
