import { useState } from "react";
import styleMinimalist from "@/assets/minimalism.jpeg";
import styleScandinavian from "@/assets/scandinavian.jpeg";
import styleLoft from "@/assets/loft.jpeg";
import styleModern from "@/assets/modern.jpeg";
import styleJapandi from "@/assets/japandi.jpeg";
import styleClassic from "@/assets/classic.jpeg";

const styles = [
  {
    id: "minimalism",
    name: "Минимализм",
    image: styleMinimalist,
    description:
      "Чистые линии, функциональность без излишеств. Каждый элемент имеет свое назначение, создавая ощущение простора и покоя.",
  },
  {
    id: "scandinavian",
    name: "Скандинавский",
    image: styleScandinavian,
    description:
      "Светлые тона, натуральные материалы, уют и хюгге. Идеальный баланс между минимализмом и домашним теплом.",
  },
  {
    id: "loft",
    name: "Лофт",
    image: styleLoft,
    description:
      "Индустриальная эстетика с открытыми коммуникациями, кирпичными стенами и металлическими акцентами. Урбанистичный шик.",
  },
  {
    id: "modern",
    name: "Современный",
    image: styleModern,
    description:
      "Актуальные тренды, технологичность, лаконичные формы. Стиль для тех, кто ценит инновации и прогрессивные решения.",
  },
  {
    id: "japandi",
    name: "Japandi",
    image: styleJapandi,
    description:
      "Синтез японской философии и скандинавского уюта. Гармония, натуральность и осознанное потребление в каждой детали.",
  },
  {
    id: "classic",
    name: "Классика",
    image: styleClassic,
    description:
      "Вневременная элегантность, изысканные детали, роскошные материалы. Стиль, который никогда не выходит из моды.",
  },
];

export const StylesSection = () => {
  const [hoveredStyle, setHoveredStyle] = useState<string | null>(null);

  return (
    <section id="styles" className="section-padding bg-muted/30">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-sm uppercase tracking-wider text-muted-foreground font-medium mb-3">
            Выбор стиля
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground mb-6">
            Найдите свой стиль
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Каждый стиль имеет свою философию и характер. Помогу определиться с
            направлением, которое идеально подойдет вашему образу жизни.
          </p>
        </div>

        {/* Styles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {styles.map((style, index) => (
            <div
              key={style.id}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredStyle(style.id)}
              onMouseLeave={() => setHoveredStyle(null)}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-elegant">
                <img
                  src={style.image}
                  alt={style.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-deep-graphite/90 via-deep-graphite/40 to-transparent transition-opacity duration-300 ${
                    hoveredStyle === style.id ? "opacity-100" : "opacity-80"
                  }`}
                />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-3">
                    {style.name}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed transition-all duration-300 ${
                      hoveredStyle === style.id
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    {style.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
