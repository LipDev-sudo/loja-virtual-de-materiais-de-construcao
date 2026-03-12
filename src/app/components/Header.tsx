import { useState } from "react";
import { Search, ShoppingCart, Menu, X } from "lucide-react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartCount] = useState(3);

  const navLinks = ["Início", "Produtos", "Categorias", "Promoções", "Contato"];

  return (
    <header className="bg-[#1a1a1a] text-white sticky top-0 z-50 shadow-lg">
      {/* Top bar */}
      <div className="bg-[#f5c518] text-[#1a1a1a] text-sm py-1.5 text-center">
        <span>🚚 Frete grátis para compras acima de R$ 299 | Parcele em até 10x sem juros</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-10 h-10 bg-[#f5c518] rounded-lg flex items-center justify-center">
            <span className="text-[#1a1a1a] text-xl">🏗️</span>
          </div>
          <div>
            <h1 className="text-lg text-[#f5c518] leading-tight">ConstruMax</h1>
            <p className="text-[10px] text-gray-400 leading-tight">Materiais de Construção</p>
          </div>
        </div>

        {/* Nav desktop */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-gray-300 hover:text-[#f5c518] transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Search */}
        <div className="hidden md:flex flex-1 max-w-md">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Buscar produtos..."
              className="w-full bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg py-2 pl-4 pr-10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#f5c518] transition-colors"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          </div>
        </div>

        {/* Cart & Mobile */}
        <div className="flex items-center gap-3">
          <button className="relative p-2 hover:bg-[#2a2a2a] rounded-lg transition-colors">
            <ShoppingCart className="w-5 h-5 text-white" />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-[#f5c518] text-[#1a1a1a] text-[10px] w-4.5 h-4.5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <button
            className="lg:hidden p-2 hover:bg-[#2a2a2a] rounded-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#2a2a2a] border-t border-[#3a3a3a] px-4 py-3">
          <div className="md:hidden mb-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar produtos..."
                className="w-full bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg py-2 pl-4 pr-10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#f5c518]"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            </div>
          </div>
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-gray-300 hover:text-[#f5c518] py-2 px-3 rounded-lg hover:bg-[#1a1a1a] transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
