import { Truck, BadgeDollarSign, ShieldCheck, Headphones } from "lucide-react";
import { motion } from "motion/react";

const advantages = [
  {
    icon: Truck,
    title: "Frete Gratis",
    description: "Entrega gratuita para compras acima de R$ 299 em toda a regiao",
  },
  {
    icon: BadgeDollarSign,
    title: "Melhor Preco",
    description: "Garantia do menor preco. Encontrou mais barato? A gente cobre",
  },
  {
    icon: ShieldCheck,
    title: "Qualidade Certificada",
    description: "Trabalhamos apenas com marcas reconhecidas e certificadas no mercado",
  },
  {
    icon: Headphones,
    title: "Entrega Rapida",
    description: "Receba seus materiais em tempo recorde para nao parar sua obra",
  },
];

export function Advantages() {
  return (
    <section className="py-16 bg-[#1A1A1A] relative overflow-hidden">
      {/* Subtle diagonal stripes background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        background: 'repeating-linear-gradient(135deg, #FFC107, #FFC107 2px, transparent 2px, transparent 30px)'
      }} />

      {/* Top hazard stripe */}
      <div className="absolute top-0 left-0 right-0 h-1.5" style={{
        background: 'repeating-linear-gradient(135deg, #FFC107, #FFC107 10px, #1A1A1A 10px, #1A1A1A 20px)'
      }} />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2
            className="text-2xl md:text-3xl font-black text-white mb-2 uppercase tracking-tight"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Por que comprar na <span className="text-[#FFC107]">ConstruMax</span>?
          </h2>
          <div className="w-20 h-1.5 mx-auto mb-3" style={{
            background: 'repeating-linear-gradient(90deg, #FFC107, #FFC107 8px, transparent 8px, transparent 12px)'
          }} />
          <p className="text-gray-400">Vantagens exclusivas para nossos clientes</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((adv, index) => (
            <motion.div
              key={adv.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#222222] border-2 border-[#333] p-6 text-center hover:border-[#FFC107] transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-[#FFC107] flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FFD600] transition-all duration-300">
                <adv.icon className="w-8 h-8 text-[#1A1A1A] transition-colors duration-300" />
              </div>
              <h3
                className="text-white font-bold uppercase tracking-wide mb-2"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {adv.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">{adv.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom hazard stripe */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5" style={{
        background: 'repeating-linear-gradient(135deg, #FFC107, #FFC107 10px, #1A1A1A 10px, #1A1A1A 20px)'
      }} />
    </section>
  );
}
