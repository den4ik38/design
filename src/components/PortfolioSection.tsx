import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpeg";
import portfolio2 from "@/assets/portfolio-2.jpeg";
import portfolio3 from "@/assets/portfolio-3.jpeg";
import portfolio4 from "@/assets/portfolio-4.jpeg";
import portfolio5 from "@/assets/portfolio-5.jpeg";
import portfolio6 from "@/assets/portfolio-6.jpeg";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const portfolioItems = [
  {
    id: 1,
    title: "Спальня в стиле Гранж",
    preview: portfolio1,
    images: [portfolio1, "/grang/grang2.jpeg", "/grang/grang3.jpeg", "/grang/grang4.jpeg", "/grang/grang5.jpeg"],
  },
  {
    id: 2,
    title: "Квартира в средиземноморском стиле",
    preview: portfolio2,
    images: [portfolio2, "/middlesea/middlesea1.jpeg", "/middlesea/middlesea2.jpeg", "/middlesea/middlesea3.jpeg", "/middlesea/middlesea4.jpeg", "/middlesea/middlesea5.jpeg", "/middlesea/middlesea6.jpeg", "/middlesea/middlesea7.jpeg", "/middlesea/middlesea8.jpeg", "/middlesea/middlesea9.jpeg", "/middlesea/middlesea10.jpeg", "/middlesea/middlesea11.jpeg"],
  },
  {
    id: 3,
    title: "Квартира в классическом стиле",
    preview: portfolio3,
    images: [portfolio3, "/classic/classic1.jpeg", "/classic/classic2.jpeg", "/classic/classic3.jpeg", "/classic/classic4.jpeg", "/classic/classic5.jpeg", "/classic/classic6.jpeg", "/classic/classic9.jpeg", "/classic/classic10.jpeg", "/classic/classic11.jpeg", "/classic/classic12.jpeg", "/classic/classic13.jpeg", "/classic/classic14.jpeg", "/classic/classic15.jpeg", "/classic/classic16.jpeg", "/classic/classic17.jpeg"],
  },
  {
    id: 4,
    title: "Детская комната — стиль Мемфис",
    preview: portfolio4,
    images: [portfolio4, "/memphis/memphis3.jpeg", "/memphis/memphis4.jpeg", "/memphis/memphis6.jpeg", "/memphis/memphis7.jpeg", "/memphis/memphis8.jpeg", "/memphis/memphis9.jpeg"],
  },
  {
    id: 5,
    title: "Кухня гостиная — Арт деко",
    preview: portfolio5,
    images: [portfolio5, "/artdeko/artdeko1.jpeg", "/artdeko/artdeko3.jpeg", "/artdeko/artdeko4.jpeg", "/artdeko/artdeko5.jpeg"],
  },
  {
    id: 6,
    title: "Квартира — Минимализм",
    preview: portfolio6,
    images: [portfolio6, "/minimalism/minimalism1.jpeg", "/minimalism/minimalism2.jpeg", "/minimalism/minimalism3.jpeg", "/minimalism/minimalism4.jpeg", "/minimalism/minimalism5.jpeg", "/minimalism/minimalism7.jpeg", "/minimalism/minimalism10.jpeg", "/minimalism/minimalism11.jpeg", "/minimalism/minimalism12.jpeg", "/minimalism/minimalism13.jpeg"],
  },
];

export const PortfolioSection = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  // 👉 новое состояние — выбранный проект
  const [selectedProject, setSelectedProject] = useState<null | typeof portfolioItems[0]>(null);

  // 👉 индекс внутри галереи проекта
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handlePrevious = () => {
    if (!selectedProject) return;
    const total = selectedProject.images.length;
    setSelectedImageIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    if (!selectedProject) return;
    const total = selectedProject.images.length;
    setSelectedImageIndex((prev) => (prev + 1) % total);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrevious();
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "Escape") setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="section-padding bg-muted/30">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-sm uppercase tracking-wider text-muted-foreground font-medium mb-3">
            Портфолио
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground mb-6">
            Реализованные проекты
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Каждый проект — это уникальная история создания гармоничного
            пространства, отражающего индивидуальность владельца.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative aspect-[4/5] overflow-hidden rounded-lg shadow-elegant cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => {
                setSelectedProject(item);
                setSelectedImageIndex(0); // всегда начинаем с первого изображения проекта
              }}
            >
              <img
                src={item.preview}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-deep-graphite/90 via-deep-graphite/30 to-transparent transition-opacity duration-300 ${
                  hoveredItem === item.id ? "opacity-100" : "opacity-0"
                }`}
              />

              {/* Title */}
              <div
                className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-300 ${
                  hoveredItem === item.id
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* View More (Optional) */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Хотите увидеть больше работ? Свяжитесь со мной для получения полного
            портфолио.
          </p>
        </div>
      </div>

      {/* Modal Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent
          className="max-w-[95vw] max-h-[95vh] p-0 bg-background/95 backdrop-blur-sm border-border/50"
          onKeyDown={handleKeyDown}
        >
          <DialogClose className="absolute right-4 top-4 z-50 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none bg-background/80 backdrop-blur-sm p-2">
            <X className="h-5 w-5" />
            <span className="sr-only">Закрыть</span>
          </DialogClose>

          {selectedProject && (
            <div className="relative flex items-center justify-center p-4 md:p-8">
              {/* Previous Button */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 z-10 h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background"
                onClick={handlePrevious}
              >
                <ChevronLeft className="h-5 w-5" />
                <span className="sr-only">Предыдущее фото</span>
              </Button>

              {/* Image */}
              <div className="flex flex-col items-center gap-4 max-w-6xl">
                <img
                  src={selectedProject.images[selectedImageIndex]}
                  alt={selectedProject.title}
                  className="max-h-[80vh] w-auto object-contain rounded-lg"
                />
                <div className="text-center">
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-foreground">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {selectedImageIndex + 1} / {selectedProject.images.length}
                  </p>
                </div>
              </div>

              {/* Next Button */}
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 z-10 h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background"
                onClick={handleNext}
              >
                <ChevronRight className="h-5 w-5" />
                <span className="sr-only">Следующее фото</span>
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
