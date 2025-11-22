import { Check, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const services = [
  { name: "Обмерный план помещения", base: true, optimal: true, premium: true },
  { name: "План демонтируемых перегородок", base: true, optimal: true, premium: true },
  { name: "План возводимых перегородок", base: true, optimal: true, premium: true },
  { name: "План и спецификация сантехники", base: true, optimal: true, premium: true },
  { name: "План дверей", base: true, optimal: true, premium: true },
  { name: "Планировочные решения (2–4 варианта)", base: true, optimal: true, premium: true },
  { name: "План расстановки мебели с размерами", base: true, optimal: true, premium: true },
  { name: "План напольных покрытий", base: true, optimal: true, premium: true },
  { name: "План теплого пола", base: true, optimal: true, premium: true },
  { name: "План потолков и потолочного декора", base: true, optimal: true, premium: true },
  { name: "План вентиляции", base: true, optimal: true, premium: true },
  { name: "План размещения осветительных приборов", base: true, optimal: true, premium: true },
  { name: "План расстановок розеток и выключателей + электровыводы", base: true, optimal: true, premium: true },
  { name: "Развертки всех стен", base: true, optimal: true, premium: true },
  { name: "Схема раскладки плитки", base: true, optimal: true, premium: true },
  { name: "Ведомость мебели и отделочных материалов", base: true, optimal: true, premium: true },

  { name: "Цветовая и стилeвая концепция (коллажи)", base: false, optimal: true, premium: true },
  { name: "3D визуализации", base: false, optimal: false, premium: true },
];

const tariffs = [
  { key: "base", name: "Базовый", price: "от 2 000 ₽/м²" },
  { key: "optimal", name: "Оптимальный", price: "от 2 500 ₽/м²", highlighted: true },
  { key: "premium", name: "Премиум", price: "от 3 000 ₽/м²" },
];

export const PricingSection = () => {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (!el) return;
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 80,
      behavior: "smooth",
    });
  };

  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container-narrow">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-sm uppercase tracking-wider text-muted-foreground font-medium mb-3">
            Тарифы
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground mb-6">
            Услуги и цены
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Сравните тарифы и выберите подходящий формат сотрудничества.
          </p>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-6 mb-10">
          {/* Base */}
          <Card className="p-6 shadow-elegant">
            <h3 className="text-2xl font-serif font-semibold mb-2">Базовый тариф</h3>
            <p className="text-muted-foreground mb-4">от 2 000 ₽/м²</p>
            <p className="text-sm text-foreground/70 mb-6">
              Подходит для маленьких квартир и студий.
            </p>

            <ul className="space-y-2 text-sm">
              {services
                .filter((s) => s.base)
                .map((s, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-golden-accent mt-0.5" />
                    {s.name}
                  </li>
                ))}
            </ul>

            <Button onClick={scrollToContact} className="w-full mt-6">
              Заказать
            </Button>
          </Card>

          {/* Optimal */}
          <Card className="p-6 shadow-elegant border-golden-accent/30 border">
            <h3 className="text-2xl font-serif font-semibold mb-2">Оптимальный тариф</h3>
            <p className="text-muted-foreground mb-4">от 2 500 ₽/м²</p>
            <p className="text-sm text-foreground/70 mb-6">
              Полноценный дизайн-проект.
            </p>

            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-golden-accent mt-0.5" />
                Всё, что входит в базовый тариф
              </li>

              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-golden-accent mt-0.5" />
                Разработка цветовой и стилевой концепции интерьера в виде коллажей
              </li>
            </ul>

            <Button onClick={scrollToContact} className="w-full mt-6">
              Заказать
            </Button>
          </Card>

          {/* Premium */}
          <Card className="p-6 shadow-elegant">
            <h3 className="text-2xl font-serif font-semibold mb-2">Премиум тариф</h3>
            <p className="text-muted-foreground mb-4">от 3 000 ₽/м²</p>
            <p className="text-sm text-foreground/70 mb-6">
              Для больших проектов и домов.
            </p>

            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-golden-accent mt-0.5" />
                Всё, что входит в базовый тариф
              </li>

              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-golden-accent mt-0.5" />
                3D визуализации
              </li>
            </ul>

            <Button onClick={scrollToContact} className="w-full mt-6">
              Заказать
            </Button>
          </Card>
        </div>


        <Card className="overflow-hidden shadow-elegant animate-fade-in hidden md:block">
          {/* Table Head */}
          <div className="grid grid-cols-4 bg-muted/40 border-b border-border text-center">
            <div className="p-6 text-xl font-serif font-semibold">
              Услуги
            </div>
            {tariffs.map((tariff) => (
              <div
                key={tariff.key}
                className={`p-6 border-l border-border ${
                  tariff.highlighted ? "bg-golden-accent/10" : ""
                }`}
              >
                <p className="text-xl font-serif font-semibold">{tariff.name}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {tariff.price}
                </p>
              </div>
            ))}
          </div>

          {/* Table Body */}
          <div className="divide-y divide-border">
            {services.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-4"
                style={{ animationDelay: `${i * 0.04}s` }}
              >
                {/* Left column — service name */}
                <div className="p-4 text-sm leading-relaxed text-left">
                  {row.name}
                </div>

                {/* Availability cells */}
                {tariffs.map((t) => (
                  <div
                    key={t.key}
                    className={`p-4 border-l border-border flex items-center justify-center ${
                      t.highlighted ? "bg-golden-accent/5" : ""
                    }`}
                  >
                    {row[t.key] ? (
                      <Check className="h-5 w-5 text-golden-accent" />
                    ) : (
                      <Minus className="h-5 w-5 text-muted-foreground/40" />
                    )}
                  </div>
                ))}
              </div>
            ))}

            {/* CTA Row (inside table) */}
            <div className="grid grid-cols-4 bg-muted/30">
              <div className="p-4 text-sm text-muted-foreground font-medium text-left">
                Оформить тариф
              </div>

              {tariffs.map((t) => (
                <div
                  key={t.key}
                  className={`p-6 border-l border-border flex justify-center ${
                    t.highlighted ? "bg-golden-accent/10" : ""
                  }`}
                >
                  <Button
                    onClick={scrollToContact}
                    variant={t.highlighted ? "default" : "outline"}
                    className="w-full max-w-[160px]"
                  >
                    Заказать
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <p className="text-sm text-muted-foreground text-center mt-8">
          Точная стоимость рассчитывается индивидуально после обсуждения проекта.  
          Консультация и выезд — бесплатно.
        </p>
      </div>
    </section>
  );
};
