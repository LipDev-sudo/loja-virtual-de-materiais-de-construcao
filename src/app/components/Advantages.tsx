import { Truck, ShieldCheck, Headphones, Award } from "lucide-react";

const advantages = [
  {
    icon: Truck,
    title: "Entrega Rápida",
    description: "Receba seus materiais em até 48h para sua região",
  },
  {
    icon: ShieldCheck,
    title: "Pagamento Seguro",
    description: "Suas transações protegidas com criptografia",
  },
  {
    icon: Headphones,
    title: "Atendimento Especializado",
    description: "Equipe técnica pronta para ajudar no seu projeto",
  },
  {
    icon: Award,
    title: "Produtos de Qualidade",
    description: "Trabalhamos apenas com marcas reconhecidas",
  },
];

export function Advantages() {
  return (
    <section className="py-16 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl text-white mb-2">
            Por que comprar na ConstruMax?
          </h2>
          <p className="text-gray-400">Vantagens exclusivas para nossos clientes</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((adv) => (
            <div
              key={adv.title}
              className="bg-[#2a2a2a] border border-[#3a3a3a] rounded-xl p-6 text-center hover:border-[#f5c518]/50 transition-colors group"
            >
              <div className="w-14 h-14 bg-[#f5c518]/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#f5c518]/20 transition-colors">
                <adv.icon className="w-7 h-7 text-[#f5c518]" />
              </div>
              <h3 className="text-white mb-2">{adv.title}</h3>
              <p className="text-sm text-gray-400">{adv.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
