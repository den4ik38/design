import designerPortrait from "@/assets/designer.jpg";

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-elegant">
              <img
                src={designerPortrait}
                alt="Дизайнер интерьера"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-golden-accent/20 rounded-lg -z-10 hidden md:block" />
          </div>

          {/* Content */}
          <div className="space-y-6 animate-slide-up">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
                Обо мне
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground leading-tight">
                Создаю пространства,
                <br />
                <span className="text-golden-accent">в которых хочется жить</span>
              </h2>
            </div>

            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Здравствуйте! Меня зовут Фаина , и я дизайнер интерьера из Иркутска.
Когда я поняла, что хочу помогать создавать не просто красивые, но и по-настоящему гармоничные пространства, я прошла обучение в международной школе Иоланты Федотовой. Эта школа дала мне не только профессиональные знания, но и понимание, что хороший дизайн — это когда в помещении хорошо не только выглядит, но и живется.

              </p>
              <p>
                В работе с клиентами я ценю открытость и честность. Я не предлагаю шаблонных решений, потому что убеждена: у каждого человека свой путь и своя история, которые должны находить отражение в пространстве вокруг него.
              </p>
              <p>
                Буду рада помочь вам создать интерьер, в котором вы будете чувствовать себя "как дома" в самом глубоком смысле этого слова.
              </p>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};
