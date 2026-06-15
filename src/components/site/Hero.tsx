import { motion } from "framer-motion";
import heroAquarium from "@/assets/hero-aquarium.jpg";

export function Hero() {
  return (
    <section id="top" className="relative w-full overflow-hidden bg-white">
      {/* SaaS Soft Gradient Background for perfect font contrast */}
      <div className="absolute inset-x-0 top-0 h-[80vh] bg-gradient-to-b from-[#E0F7FA] via-[#F2FBFD] to-white" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="text-left pt-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#0B1E36] mb-6 leading-[1.1]"
            >
              Designing Bespoke Aquatic Ecosystems.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-xl sm:text-2xl text-[#00BCD4] font-bold mb-4"
            >
              Living Art For Your Home & Office.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-slate-600 max-w-lg mb-10 text-lg leading-relaxed font-medium"
            >
              From custom aquascaping to white-glove maintenance, Sai Aquatics engineers stunning underwater worlds that breathe life into any space.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <a href="#portfolio" className="inline-flex items-center justify-center rounded-full bg-[#00BCD4] text-white font-bold px-8 py-3.5 transition-all hover:bg-[#0097A7] hover:scale-105 shadow-xl shadow-cyan-500/20">
                View Our Work <span className="ml-2">→</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Floating Aquarium Image */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full flex justify-center items-center">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: [0, -15, 0] }}
              transition={{ 
                opacity: { duration: 1 },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative w-[90%] h-[90%] rounded-[3rem] overflow-hidden shadow-2xl shadow-cyan-900/20 z-10 border-[8px] border-white"
            >
              <img 
                src={heroAquarium} 
                alt="Bespoke Aquarium Installation"
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Floating Data Card 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute left-0 top-1/4 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-2xl border border-slate-100 z-20"
            >
              <div className="text-4xl font-bold text-[#00BCD4]">500+</div>
              <div className="text-sm text-slate-600 font-bold mt-1">Custom Tanks<br/>Installed</div>
            </motion.div>

            {/* Floating Data Card 2 */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute right-0 bottom-1/4 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-2xl border border-slate-100 z-20"
            >
              <div className="text-4xl font-bold text-[#00BCD4]">12<span className="text-2xl">yrs</span></div>
              <div className="text-sm text-slate-600 font-bold mt-1">Aquascaping<br/>Experience</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
