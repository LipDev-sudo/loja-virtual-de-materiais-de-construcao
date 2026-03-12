import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#111111] text-gray-400">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[#f5c518] rounded-lg flex items-center justify-center">
                <span className="text-[#1a1a1a]">🏗️</span>
              </div>
              <span className="text-lg text-white">ConstruMax</span>
            </div>
            <p className="text-sm mb-4">
              Sua loja completa de materiais de construção. Qualidade, variedade e
              os melhores preços desde 2005.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-[#2a2a2a] rounded-lg flex items-center justify-center hover:bg-[#f5c518] hover:text-[#1a1a1a] transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-[#2a2a2a] rounded-lg flex items-center justify-center hover:bg-[#f5c518] hover:text-[#1a1a1a] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-[#2a2a2a] rounded-lg flex items-center justify-center hover:bg-[#f5c518] hover:text-[#1a1a1a] transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2.5 text-sm">
              {["Sobre Nós", "Produtos", "Promoções", "Blog", "Trabalhe Conosco"].map(
                (link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-[#f5c518] transition-colors">
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#f5c518] mt-0.5 shrink-0" />
                <span>Av. Brasil, 1500 - Centro, São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#f5c518] shrink-0" />
                <span>(11) 3456-7890</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#f5c518] shrink-0" />
                <span>contato@construmax.com.br</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white mb-4">Horário de Funcionamento</h3>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#f5c518] mt-0.5 shrink-0" />
                <div>
                  <p>Seg a Sex: 07h às 18h</p>
                  <p>Sábados: 07h às 13h</p>
                  <p>Domingos e feriados: Fechado</p>
                </div>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-sm text-white mb-2">Receba ofertas exclusivas</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="flex-1 bg-[#2a2a2a] border border-[#3a3a3a] rounded-l-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#f5c518]"
                />
                <button className="bg-[#f5c518] text-[#1a1a1a] px-4 py-2 rounded-r-lg hover:bg-[#e0b315] transition-colors text-sm">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#2a2a2a] py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>&copy; 2026 ConstruMax - Todos os direitos reservados</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300 transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
