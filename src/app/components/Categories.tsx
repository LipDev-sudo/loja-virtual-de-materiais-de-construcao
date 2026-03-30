import { motion } from "motion/react";
import { Zap, Droplets, Paintbrush, Wrench, LayoutGrid, Lightbulb, Hammer, Lock } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Category {
  name: string;
  icon: LucideIcon;
  count: number;
}

const categories: Category[] = [
  { name: "Eletrica", icon: Zap, count: 67 },
  { name: "Hidraulica", icon: Droplets, count: 53 },
  { name: "Tintas", icon: Paintbrush, count: 86 },
  { name: "Ferramentas", icon: Wrench, count: 124 },
  { name: "Pisos", icon: LayoutGrid, count: 45 },
  { name: "Iluminacao", icon: Lightbulb, count: 38 },
  { name: "Construcao", icon: Hammer, count: 91 },
  { name: "Ferragens", icon: Lock, count: 72 },
];

export function Categories() {
  return (
    <section className="py-16 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2
            className="text-2xl md:text-3xl font-black text-[#1A1A1A] mb-2 uppercase tracking-tight"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Categorias Principais
          </h2>
          <div className="w-20 h-1.5 mx-auto mb-3" style={{
            background: 'repeating-linear-gradient(90deg, #FFC107, #FFC107 8px, #1A1A1A 8px, #1A1A1A 12px)'
          }} />
          <p className="text-gray-500">
            Navegue pelas nossas categorias e encontre o que precisa
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {categories.map((cat, index) => (
            <motion.a
              key={cat.name}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group bg-white border-2 border-[#E0E0E0] p-6 text-center hover:border-[#FFC107] transition-all duration-300 hover:shadow-lg hover:shadow-[#FFC107]/10"
            >
              <div className="w-14 h-14 bg-[#1A1A1A] flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FFC107] transition-all duration-300">
                <cat.icon className="w-7 h-7 text-[#FFC107] group-hover:text-[#1A1A1A] transition-colors duration-300" />
              </div>
              <h3
                className="text-sm font-bold text-[#1A1A1A] uppercase tracking-wide mb-1"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {cat.name}
              </h3>
              <p className="text-xs text-gray-400">{cat.count} produtos</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
