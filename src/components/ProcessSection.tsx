import {
  MessageCircle,
  Ruler,
  Palette,
  Monitor,
  ShoppingBag,
  CheckCircle2,
  Home,
  Clock,
  Shield,
  Award,
  FileText,
  Users,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Знакомство",
    description:
      "Обсуждаем ваши пожелания, образ жизни, бюджет. Выезжаю на объект для первичного осмотра.",
  },
  {
    number: "02",
    icon: Ruler,
    title: "Замеры",
    description:
      "Провожу детальные замеры помещения, фиксирую все особенности планировки и коммуникаций.",
  },
  {
    number: "03",
    icon: Palette,
    title: "Концепция",
    description:
      "Разрабатываю концепцию дизайна, подбираю стиль, цветовую палитру и настроение интерьера.",
  },
  {
    number: "04",
    icon: Monitor,
    title: "Визуализация",
    description:
      "Создаю фотореалистичные 3D-визуализации, чтобы вы увидели результат до начала работ.",
  },
  {
    number: "05",
    icon: ShoppingBag,
    title: "Комплектация",
    description:
      "Подбираю все материалы, мебель и декор.",
  },
  {
    number: "06",
    icon: CheckCircle2,
    title: "Чертежи",
    description:
      "Полный комплект чертежей и документации для строителей",
  },
];

const benefits = [
  {
    icon: Home,
    title: "Готовый проект",
    description: "Полный комплект чертежей и документации для строителей",
  },
  {
    icon: Monitor,
    title: "3D-визуализации",
    description: "Увидите результат до начала ремонта",
  },
  {
    icon: FileText,
    title: "Смета и спецификации",
    description: "Четкий список материалов с артикулами и ценами",
  },
  {
    icon: Clock,
    title: "Экономия времени",
    description: "Не нужно самостоятельно искать решения и материалы",
  },
  {
    icon: Shield,
    title: "Контроль бюджета",
    description: "Избежите лишних трат и переделок",
  },
  {
    icon: Award,
    title: "Уникальный интерьер",
    description: "Дизайн, который отражает вашу индивидуальность",
  },
];

export const ProcessSection = () => {
  return (
    <section id="process" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-sm uppercase tracking-wider text-muted-foreground font-medium mb-3">
            Как я работаю
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground mb-6">
            Схема работы
          </h2>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className="relative animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                {/* Icon and Number */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-golden-accent/10">
                    <step.icon className="h-6 w-6 text-golden-accent" />
                  </div>
                  <span className="text-5xl font-serif font-bold text-golden-accent/20">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connector Line (Desktop) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-full w-full h-0.5 bg-gradient-to-r from-golden-accent/30 to-transparent -translate-x-8" />
              )}
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="border-t border-border pt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
              Что вы получите
            </h3>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Работая со мной, вы получаете не просто красивые картинки, а
              комплексное решение всех задач по созданию интерьера.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="flex gap-4 p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-golden-accent/10">
                    <benefit.icon className="h-6 w-6 text-golden-accent" />
                  </div>
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold text-foreground">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-foreground/70">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
