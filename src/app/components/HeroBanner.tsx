import { motion } from "motion/react";
import { Truck, BadgeDollarSign, ShieldCheck } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const bannerImage =
  "https://images.unsplash.com/photo-1770823556202-2eba715a415b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYnVpbGRpbmclMjBtYXRlcmlhbHN8ZW58MXx8fHwxNzczMTQxNTAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const trustBadges = [
  { icon: Truck, label: "Entrega Garantida" },
  { icon: BadgeDollarSign, label: "Melhor Preco" },
  { icon: ShieldCheck, label: "Qualidade Certificada" },
];

export function HeroBanner() {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={bannerImage}
          alt="Materiais de construcao"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/95 via-[#1A1A1A]/85 to-[#1A1A1A]/40" />
      </div>

      {/* Diagonal yellow/black stripes pattern */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none hidden md:block">
        <div className="absolute -right-10 top-0 w-40 h-full opacity-20" style={{
          background: 'repeating-linear-gradient(135deg, #FFC107, #FFC107 20px, transparent 20px, transparent 40px)'
        }} />
        <div className="absolute -right-40 top-0 w-40 h-full opacity-10" style={{
          background: 'repeating-linear-gradient(135deg, #FFC107, #FFC107 20px, transparent 20px, transparent 40px)'
        }} />
      </div>

      {/* Hazard stripe top accent */}
      <div className="absolute top-0 left-0 right-0 h-2" style={{
        background: 'repeating-linear-gradient(135deg, #FFC107, #FFC107 10px, #1A1A1A 10px, #1A1A1A 20px)'
      }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-[#E53935] text-white text-xs font-black px-4 py-1.5 mb-5 uppercase tracking-widest">
              Ofertas Imperdiveis
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-2 leading-[1.05] uppercase tracking-tight"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            MATERIAIS DE
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 leading-[1.05] uppercase tracking-tight"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", color: '#FFC107' }}
          >
            CONSTRUCAO
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#1A1A1A]/80 border-l-4 border-[#FFC107] px-4 py-3 mb-8 max-w-md"
          >
            <p className="text-gray-300 text-base leading-relaxed">
              Tudo para sua obra com os <span className="text-[#FFC107] font-bold">melhores precos</span>. Qualidade garantida para profissionais e projetos residenciais.
            </p>
            <p className="text-[#E53935] font-black text-lg mt-1">
              Ate 40% OFF em produtos selecionados!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <button
              className="bg-[#FFC107] text-[#1A1A1A] px-8 py-3.5 font-black text-sm uppercase tracking-wider hover:bg-[#FFD600] transition-colors shadow-lg shadow-[#FFC107]/20"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Ver Produtos
            </button>
            <button
              className="border-2 border-[#FFC107] text-[#FFC107] px-8 py-3.5 font-bold text-sm uppercase tracking-wider hover:bg-[#FFC107] hover:text-[#1A1A1A] transition-colors"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Ofertas do Dia
            </button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-6"
          >
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-2.5">
                <div className="w-10 h-10 bg-[#FFC107] flex items-center justify-center">
                  <badge.icon className="w-5 h-5 text-[#1A1A1A]" />
                </div>
                <span className="text-sm text-white font-bold uppercase tracking-wide" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  {badge.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom hazard stripe */}
      <div className="absolute bottom-0 left-0 right-0 h-2" style={{
        background: 'repeating-linear-gradient(135deg, #FFC107, #FFC107 10px, #1A1A1A 10px, #1A1A1A 20px)'
      }} />
    </section>
  );
}
