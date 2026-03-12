import { ImageWithFallback } from "./figma/ImageWithFallback";

const bannerImage =
  "https://images.unsplash.com/photo-1770823556202-2eba715a415b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYnVpbGRpbmclMjBtYXRlcmlhbHN8ZW58MXx8fHwxNzczMTQxNTAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export function HeroBanner() {
  return (
    <section className="relative min-h-[420px] md:min-h-[500px] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={bannerImage}
          alt="Materiais de construção"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/95 via-[#1a1a1a]/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 w-full">
        <div className="max-w-xl">
          <span className="inline-block bg-[#f5c518] text-[#1a1a1a] text-xs px-3 py-1 rounded-full mb-4 tracking-wide uppercase">
            Ofertas imperdíveis
          </span>
          <h1 className="text-3xl md:text-5xl text-white mb-4 leading-tight">
            Tudo para sua obra <br />
            <span className="text-[#f5c518]">em um só lugar</span>
          </h1>
          <p className="text-gray-300 mb-8 max-w-md">
            Encontre os melhores materiais de construção com preços imbatíveis.
            Qualidade garantida para o seu projeto.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="bg-[#f5c518] text-[#1a1a1a] px-8 py-3 rounded-lg hover:bg-[#e0b315] transition-colors shadow-lg">
              Ver Produtos
            </button>
            <button className="border border-white/30 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
              Ofertas do Dia
            </button>
          </div>
        </div>
      </div>

      {/* Decorative stripe */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f5c518] via-[#f5c518]/50 to-transparent" />
    </section>
  );
}
