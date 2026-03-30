import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Send } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="bg-[#111111] text-gray-400">
      {/* Newsletter strip */}
      <div className="bg-[#FFC107] py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Send className="w-6 h-6 text-[#1A1A1A]" />
            <div>
              <h3
                className="text-[#1A1A1A] font-black uppercase tracking-wide text-sm"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Receba Ofertas Exclusivas
              </h3>
              <p className="text-[#1A1A1A]/70 text-xs">Cadastre-se e ganhe 10% de desconto na primeira compra</p>
            </div>
          </div>
          <div className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 md:w-72 bg-white border-2 border-[#1A1A1A] px-4 py-2.5 text-sm text-[#1A1A1A] placeholder-gray-400 focus:outline-none"
            />
            <button
              className="bg-[#1A1A1A] text-[#FFC107] px-6 py-2.5 font-bold text-sm uppercase tracking-wide hover:bg-[#333] transition-colors border-2 border-[#1A1A1A]"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Enviar
            </button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {/* Institucional */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 bg-[#FFC107] flex items-center justify-center">
                <span className="text-[#1A1A1A] text-lg font-black" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>C</span>
              </div>
              <span
                className="text-xl font-black text-white uppercase tracking-tight"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                ConstruMax
              </span>
            </div>
            <p className="text-sm mb-5 leading-relaxed">
              Sua loja completa de materiais de construcao. Qualidade, variedade e os melhores precos desde 2005.
            </p>
            <h4
              className="text-[#FFC107] font-bold text-xs uppercase tracking-wider mb-3"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Institucional
            </h4>
            <ul className="space-y-2 text-sm">
              {["Sobre Nos", "Trabalhe Conosco", "Blog", "Politica de Privacidade"].map(
                (link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-[#FFC107] transition-colors">
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Categorias */}
          <div>
            <h4
              className="text-[#FFC107] font-bold text-xs uppercase tracking-wider mb-5 pb-2 border-b-2 border-[#FFC107]"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Categorias
            </h4>
            <ul className="space-y-2.5 text-sm">
              {["Eletrica", "Hidraulica", "Tintas", "Ferramentas", "Pisos", "Iluminacao", "Ferragens"].map(
                (link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-[#FFC107] transition-colors">
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Atendimento */}
          <div>
            <h4
              className="text-[#FFC107] font-bold text-xs uppercase tracking-wider mb-5 pb-2 border-b-2 border-[#FFC107]"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Atendimento
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FFC107] mt-0.5 shrink-0" />
                <span>Av. Brasil, 1500 - Centro, Sao Paulo - SP</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FFC107] shrink-0" />
                <span>(11) 3456-7890</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FFC107] shrink-0" />
                <span>contato@construmax.com.br</span>
              </li>
            </ul>
            <div className="mt-5 text-sm">
              <p className="text-[#FFC107] font-bold text-xs uppercase tracking-wider mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Horario</p>
              <p>Seg a Sex: 07h as 18h</p>
              <p>Sabados: 07h as 13h</p>
            </div>
          </div>

          {/* Redes Sociais */}
          <div>
            <h4
              className="text-[#FFC107] font-bold text-xs uppercase tracking-wider mb-5 pb-2 border-b-2 border-[#FFC107]"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Redes Sociais
            </h4>
            <p className="text-sm mb-4">Siga-nos e fique por dentro das novidades e promocoes.</p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-[#1A1A1A] border-2 border-[#333] flex items-center justify-center hover:bg-[#FFC107] hover:border-[#FFC107] hover:text-[#1A1A1A] transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#1A1A1A] border-2 border-[#333] flex items-center justify-center hover:bg-[#FFC107] hover:border-[#FFC107] hover:text-[#1A1A1A] transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#1A1A1A] border-2 border-[#333] flex items-center justify-center hover:bg-[#FFC107] hover:border-[#FFC107] hover:text-[#1A1A1A] transition-all duration-300"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>

            {/* Payment methods */}
            <div className="mt-6">
              <p className="text-[#FFC107] font-bold text-xs uppercase tracking-wider mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Formas de Pagamento</p>
              <div className="flex flex-wrap gap-2">
                {["Visa", "Master", "Pix", "Boleto"].map((method) => (
                  <span
                    key={method}
                    className="text-[10px] font-bold uppercase tracking-wide bg-[#1A1A1A] border border-[#333] px-2.5 py-1.5 text-gray-400"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t-2 border-[#333] py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>&copy; 2026 ConstruMax - Todos os direitos reservados</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#FFC107] transition-colors">
              Politica de Privacidade
            </a>
            <a href="#" className="hover:text-[#FFC107] transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
