import { useState } from "react";
import { ShoppingCart, Star, Heart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const products = [
  {
    id: 1,
    name: "Cimento CP-II 50kg",
    price: 38.9,
    oldPrice: 45.0,
    rating: 4.8,
    reviews: 234,
    image:
      "https://images.unsplash.com/photo-1762380368593-a0d4c49af47f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZW1lbnQlMjBiYWclMjBjb25zdHJ1Y3Rpb24lMjBtYXRlcmlhbHxlbnwxfHx8fDE3NzMxOTYyMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    badge: "Mais vendido",
  },
  {
    id: 2,
    name: "Furadeira Elétrica 750W",
    price: 289.9,
    oldPrice: 349.9,
    rating: 4.6,
    reviews: 189,
    image:
      "https://images.unsplash.com/photo-1755168648692-ef8937b7e63e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMGRyaWxsJTIwcG93ZXIlMjB0b29sfGVufDF8fHx8MTc3MzEyMzAxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    badge: "-17%",
  },
  {
    id: 3,
    name: "Tinta Acrílica Branca 18L",
    price: 189.9,
    oldPrice: 229.9,
    rating: 4.7,
    reviews: 156,
    image:
      "https://images.unsplash.com/photo-1673297821205-e0575bbc2ab7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGFjcnlsaWMlMjBwYWludCUyMGJ1Y2tldHxlbnwxfHx8fDE3NzMxOTYyMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    badge: null,
  },
  {
    id: 4,
    name: "Chave de Fenda Profissional",
    price: 24.9,
    oldPrice: null,
    rating: 4.5,
    reviews: 98,
    image:
      "https://images.unsplash.com/photo-1770657986086-c1f20eef30ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzY3Jld2RyaXZlciUyMHRvb2x8ZW58MXx8fHwxNzczMTk2MjI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    badge: null,
  },
  {
    id: 5,
    name: "Kit Ferramentas 129 Peças",
    price: 459.9,
    oldPrice: 599.9,
    rating: 4.9,
    reviews: 312,
    image:
      "https://images.unsplash.com/photo-1715322554946-1b22a9800aec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b29sa2l0JTIwc2V0JTIwaGFyZHdhcmV8ZW58MXx8fHwxNzczMTk2MjI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    badge: "-23%",
  },
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
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl text-[#1a1a1a] mb-1">
              Produtos em Destaque
            </h2>
            <p className="text-gray-500">Os mais procurados pelos nossos clientes</p>
          </div>
          <a
            href="#"
            className="hidden md:inline-flex text-[#f5c518] hover:text-[#e0b315] text-sm transition-colors"
          >
            Ver todos →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-square bg-gray-50 overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <span className="absolute top-2 left-2 bg-[#f5c518] text-[#1a1a1a] text-[11px] px-2 py-0.5 rounded-md">
                    {product.badge}
                  </span>
                )}
                <button
                  onClick={() => toggleFav(product.id)}
                  className="absolute top-2 right-2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      favorites.includes(product.id)
                        ? "fill-red-500 text-red-500"
                        : "text-gray-400"
                    }`}
                  />
                </button>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="text-sm text-[#1a1a1a] mb-1 line-clamp-2 min-h-[2.5rem]">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-3.5 h-3.5 fill-[#f5c518] text-[#f5c518]" />
                  <span className="text-xs text-gray-600">{product.rating}</span>
                  <span className="text-xs text-gray-400">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="mb-3">
                  {product.oldPrice && (
                    <span className="text-xs text-gray-400 line-through block">
                      R$ {product.oldPrice.toFixed(2).replace(".", ",")}
                    </span>
                  )}
                  <span className="text-lg text-[#1a1a1a]">
                    R$ {product.price.toFixed(2).replace(".", ",")}
                  </span>
                  <span className="text-[11px] text-gray-400 block">
                    até 10x de R${" "}
                    {(product.price / 10).toFixed(2).replace(".", ",")}
                  </span>
                </div>

                {/* Button */}
                <button className="w-full bg-[#f5c518] text-[#1a1a1a] py-2.5 rounded-lg hover:bg-[#e0b315] transition-colors flex items-center justify-center gap-2 text-sm">
                  <ShoppingCart className="w-4 h-4" />
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="md:hidden text-center mt-6">
          <a
            href="#"
            className="text-[#f5c518] hover:text-[#e0b315] text-sm transition-colors"
          >
            Ver todos os produtos →
          </a>
        </div>
      </div>
    </section>
  );
}
