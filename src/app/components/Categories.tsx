import { ImageWithFallback } from "./figma/ImageWithFallback";

const categories = [
  {
    name: "Cimento",
    image:
      "https://images.unsplash.com/photo-1762380368593-a0d4c49af47f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZW1lbnQlMjBiYWclMjBjb25zdHJ1Y3Rpb24lMjBtYXRlcmlhbHxlbnwxfHx8fDE3NzMxOTYyMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    count: 48,
  },
  {
    name: "Ferramentas",
    image:
      "https://images.unsplash.com/photo-1759200165738-6366977a73c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB0b29scyUyMGhhcmR3YXJlJTIwc3RvcmV8ZW58MXx8fHwxNzczMTk2MjI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    count: 124,
  },
  {
    name: "Tintas",
    image:
      "https://images.unsplash.com/photo-1763741226847-f5ef0c846506?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGNhbnMlMjBjb2xvcmZ1bCUyMGhhcmR3YXJlfGVufDF8fHx8MTc3MzE5NjIyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    count: 86,
  },
  {
    name: "Materiais Elétricos",
    image:
      "https://images.unsplash.com/photo-1767514536570-83d70c024247?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwd2lyaW5nJTIwbWF0ZXJpYWxzfGVufDF8fHx8MTc3MzE5NjIyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    count: 67,
  },
  {
    name: "Hidráulica",
    image:
      "https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHVtYmluZyUyMHBpcGVzJTIwZml0dGluZ3N8ZW58MXx8fHwxNzczMTk2MjI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    count: 53,
  },
  {
    name: "Ferragens",
    image:
      "https://images.unsplash.com/photo-1691729085328-6b878517a61e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb29yJTIwaGFyZHdhcmUlMjBoaW5nZXMlMjBsb2Nrc3xlbnwxfHx8fDE3NzMxOTYyMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    count: 91,
  },
];

export function Categories() {
  return (
    <section className="py-16 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl text-[#1a1a1a] mb-2">
            Categorias Principais
          </h2>
          <p className="text-gray-500">
            Navegue pelas nossas categorias e encontre o que precisa
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href="#"
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-square overflow-hidden">
                <ImageWithFallback
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-3 text-center">
                <h3 className="text-sm text-[#1a1a1a]">{cat.name}</h3>
                <p className="text-xs text-gray-400 mt-0.5">{cat.count} produtos</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
