import { useState } from "react";
import { Search, ShoppingCart, Menu, X, Phone, Mail, User, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const categories = [
  "Eletrica",
  "Hidraulica",
  "Tintas",
  "Ferramentas",
  "Pisos",
  "Iluminacao",
  "Cimento",
  "Ferragens",
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartCount] = useState(3);
  const [catOpen, setCatOpen] = useState(false);

  const navLinks = ["Inicio", "Produtos", "Promocoes", "Contato"];

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar - black with yellow accents */}
      <div className="bg-[#1A1A1A] text-gray-300 text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="tel:1134567890" className="flex items-center gap-1.5 hover:text-[#FFC107] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#FFC107]" />
              <span className="hidden sm:inline">(11) 3456-7890</span>
            </a>
            <a href="mailto:contato@construmax.com.br" className="flex items-center gap-1.5 hover:text-[#FFC107] transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#FFC107]" />
              <span className="hidden sm:inline">contato@construmax.com.br</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#FFC107] hidden md:inline font-semibold text-xs uppercase tracking-wider">Frete gratis acima de R$ 299</span>
            <a href="#" className="flex items-center gap-1.5 hover:text-[#FFC107] transition-colors">
              <User className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Minha Conta</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main nav - dark with yellow border */}
      <div className="bg-[#222222] border-b-4 border-[#FFC107] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="w-11 h-11 bg-[#FFC107] flex items-center justify-center border-2 border-[#FFC107]">
              <span className="text-[#1A1A1A] text-xl font-black" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>C</span>
            </div>
            <div>
              <h1 className="text-xl font-black text-white leading-tight tracking-tight uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                ConstruMax
              </h1>
              <p className="text-[10px] text-[#FFC107] leading-tight uppercase tracking-widest font-semibold">
                Materiais de Construcao
              </p>
            </div>
          </div>

          {/* Categories dropdown - desktop */}
          <div className="hidden lg:block relative">
            <button
              onClick={() => setCatOpen(!catOpen)}
              className="flex items-center gap-1.5 bg-[#FFC107] text-[#1A1A1A] px-4 py-2.5 font-bold text-sm uppercase tracking-wide hover:bg-[#FFD600] transition-colors"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              <Menu className="w-4 h-4" />
              Categorias
              <ChevronDown className={`w-4 h-4 transition-transform ${catOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {catOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-1 w-56 bg-[#1A1A1A] border-2 border-[#FFC107] shadow-xl z-50"
                >
                  {categories.map((cat) => (
                    <a
                      key={cat}
                      href="#"
                      className="block px-4 py-2.5 text-sm text-gray-300 hover:bg-[#FFC107] hover:text-[#1A1A1A] font-medium transition-colors border-b border-[#333] last:border-b-0"
                    >
                      {cat}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Search bar */}
          <div className="hidden md:flex flex-1 max-w-lg">
            <div className="relative w-full flex">
              <input
                type="text"
                placeholder="Buscar produtos, marcas..."
                className="w-full bg-[#333] border-2 border-[#444] py-2.5 pl-4 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#FFC107] transition-colors"
              />
              <button className="bg-[#FFC107] text-[#1A1A1A] px-4 hover:bg-[#FFD600] transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Nav links - desktop */}
          <nav className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm font-bold text-gray-300 hover:text-[#FFC107] transition-colors uppercase tracking-wide"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Cart & Mobile toggle */}
          <div className="flex items-center gap-3">
            <button className="relative p-2 hover:bg-[#333] transition-colors">
              <ShoppingCart className="w-5 h-5 text-[#FFC107]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#E53935] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              className="lg:hidden p-2 hover:bg-[#333] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#1A1A1A] border-b-2 border-[#FFC107] shadow-lg overflow-hidden"
          >
            <div className="px-4 py-4">
              {/* Mobile search */}
              <div className="md:hidden mb-4">
                <div className="relative flex">
                  <input
                    type="text"
                    placeholder="Buscar produtos..."
                    className="w-full bg-[#333] border-2 border-[#444] py-2.5 pl-4 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#FFC107]"
                  />
                  <button className="bg-[#FFC107] text-[#1A1A1A] px-4">
                    <Search className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Mobile nav links */}
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-sm font-bold text-gray-300 hover:text-[#FFC107] hover:bg-[#2A2A2A] py-2.5 px-3 transition-colors uppercase tracking-wide border-l-4 border-transparent hover:border-[#FFC107]"
                  >
                    {link}
                  </a>
                ))}
                <div className="border-t-2 border-[#333] mt-2 pt-2">
                  <p className="text-xs font-bold text-[#FFC107] uppercase tracking-wider px-3 mb-2">Categorias</p>
                  {categories.map((cat) => (
                    <a
                      key={cat}
                      href="#"
                      className="text-sm text-gray-400 hover:text-[#FFC107] hover:bg-[#2A2A2A] py-2 px-3 block transition-colors border-l-4 border-transparent hover:border-[#FFC107]"
                    >
                      {cat}
                    </a>
                  ))}
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
