import { useState } from "react";
import { ShoppingCart, Star, Heart, CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const products = [
  {
    id: 1,
    name: "Cimento CP-II 50kg",
    brand: "Votorantim",
    price: 38.9,
    oldPrice: 45.0,
    rating: 4.8,
    reviews: 234,
    image:
      "https://images.unsplash.com/photo-1762380368593-a0d4c49af47f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZW1lbnQlMjBiYWclMjBjb25zdHJ1Y3Rpb24lMjBtYXRlcmlhbHxlbnwxfHx8fDE3NzMxOTYyMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    badge: "Mais vendido",
    inStock: true,
  },
  {
    id: 2,
    name: "Furadeira Eletrica 750W",
    brand: "Bosch",
    price: 289.9,
    oldPrice: 349.9,
    rating: 4.6,
    reviews: 189,
    image:
      "https://images.unsplash.com/photo-1755168648692-ef8937b7e63e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMGRyaWxsJTIwcG93ZXIlMjB0b29sfGVufDF8fHx8MTc3MzEyMzAxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    badge: "-17%",
    inStock: true,
  },
  {
    id: 3,
    name: "Tinta Acrilica Branca 18L",
    brand: "Suvinil",
    price: 189.9,
    oldPrice: 229.9,
    rating: 4.7,
    reviews: 156,
    image:
      "https://images.unsplash.com/photo-1673297821205-e0575bbc2ab7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGFjcnlsaWMlMjBwYWludCUyMGJ1Y2tldHxlbnwxfHx8fDE3NzMxOTYyMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    badge: null,
    inStock: true,
  },
  {
    id: 4,
    name: "Chave de Fenda Profissional",
    brand: "Tramontina",
    price: 24.9,
    oldPrice: null,
    rating: 4.5,
    reviews: 98,
    image:
      "https://images.unsplash.com/photo-1770657986086-c1f20eef30ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzY3Jld2RyaXZlciUyMHRvb2x8ZW58MXx8fHwxNzczMTk2MjI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    badge: null,
    inStock: true,
  },
  {
    id: 5,
    name: "Kit Ferramentas 129 Pecas",
    brand: "DeWalt",
    price: 459.9,
    oldPrice: 599.9,
    rating: 4.9,
    reviews: 312,
    image:
      "https://images.unsplash.com/photo-1715322554946-1b22a9800aec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b29sa2l0JTIwc2V0JTIwaGFyZHdhcmV8ZW58MXx8fHwxNzczMTk2MjI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    badge: "-23%",
    inStock: true,
  },
];

const trustItems = [
  { icon: CheckCircle, label: "Entrega Garantida" },
  { icon: CheckCircle, label: "Melhor Preco" },
  { icon: CheckCircle, label: "Qualidade Certificada" },
];

export function FeaturedProducts() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFav = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-4"
        >
          <div>
            <h2
              className="text-2xl md:text-3xl font-black text-[#1A1A1A] mb-1 uppercase tracking-tight"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Produtos em Destaque
            </h2>
            <div className="w-20 h-1.5 mb-3" style={{
              background: 'repeating-linear-gradient(90deg, #FFC107, #FFC107 8px, #1A1A1A 8px, #1A1A1A 12px)'
            }} />
            <p className="text-gray-500">Os mais procurados pelos nossos clientes</p>

            {/* Trust badges inline */}
            <div className="flex flex-wrap gap-4 mt-3">
              {trustItems.map((item) => (
                <span key={item.label} className="flex items-center gap-1.5 text-xs font-semibold text-[#1A1A1A]">
                  <item.icon className="w-4 h-4 text-[#FFC107]" />
                  {item.label}
                </span>
              ))}
            </div>
          </div>
          <a
            href="#"
            className="hidden md:inline-flex items-center gap-1 bg-[#1A1A1A] text-[#FFC107] px-5 py-2.5 text-sm font-bold uppercase tracking-wide hover:bg-[#333] transition-colors"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Ver todos
          </a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group bg-white border-2 border-[#E0E0E0] overflow-hidden hover:border-[#FFC107] hover:shadow-xl hover:shadow-[#FFC107]/10 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-square bg-[#F5F5F5] overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <span className={`absolute top-0 left-0 text-[11px] font-black px-3 py-1 uppercase tracking-wide ${
                    product.badge.startsWith("-")
                      ? "bg-[#E53935] text-white"
                      : "bg-[#FFC107] text-[#1A1A1A]"
                  }`}>
                    {product.badge}
                  </span>
                )}
                <button
                  onClick={() => toggleFav(product.id)}
                  className="absolute top-2 right-2 w-9 h-9 bg-white border-2 border-[#E0E0E0] flex items-center justify-center hover:border-[#E53935] transition-colors"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      favorites.includes(product.id)
                        ? "fill-[#E53935] text-[#E53935]"
                        : "text-gray-400"
                    }`}
                  />
                </button>
                {product.inStock && (
                  <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 border border-[#059669]">
                    <div className="w-2 h-2 rounded-full bg-[#059669]" />
                    <span className="text-[10px] font-bold text-[#059669] uppercase">Em Estoque</span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-4">
                <span className="text-[10px] text-gray-400 uppercase tracking-widest font-medium">
                  {product.brand}
                </span>

                <h3
                  className="text-sm font-bold text-[#1A1A1A] mb-1 line-clamp-2 min-h-[2.5rem] mt-1"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  <Star className="w-3.5 h-3.5 fill-[#FFC107] text-[#FFC107]" />
                  <span className="text-xs font-bold text-[#1A1A1A]">{product.rating}</span>
                  <span className="text-xs text-gray-400">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="mb-4">
                  {product.oldPrice && (
                    <span className="text-xs text-gray-400 line-through block">
                      R$ {product.oldPrice.toFixed(2).replace(".", ",")}
                    </span>
                  )}
                  <span className={`text-xl font-black block ${product.oldPrice ? "text-[#E53935]" : "text-[#1A1A1A]"}`}>
                    R$ {product.price.toFixed(2).replace(".", ",")}
                  </span>
                  <span className="text-[11px] text-gray-400 block">
                    ate 10x de R${" "}
                    {(product.price / 10).toFixed(2).replace(".", ",")}
                  </span>
                </div>

                {/* Button */}
                <button
                  className="w-full bg-[#FFC107] text-[#1A1A1A] py-2.5 font-black text-sm uppercase tracking-wide hover:bg-[#FFD600] transition-colors flex items-center justify-center gap-2"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  <ShoppingCart className="w-4 h-4" />
                  Adicionar
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden text-center mt-8">
          <a
            href="#"
            className="inline-flex items-center gap-1 bg-[#1A1A1A] text-[#FFC107] px-6 py-3 text-sm font-bold uppercase tracking-wide hover:bg-[#333] transition-colors"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Ver todos os produtos
          </a>
        </div>
      </div>
    </section>
  );
}
