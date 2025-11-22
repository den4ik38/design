import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const menuItems = [
  { label: "Обо мне", href: "#about" },
  { label: "Тарифы", href: "#pricing" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "Выбор стиля", href: "#styles" },
  { label: "Схема работы", href: "#process" },
  { label: "Контакты", href: "#contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container-narrow">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("#about")}
              className="text-xl md:text-2xl font-serif font-semibold text-foreground hover:text-golden-accent transition-colors"
            >
              Faina Design
            </button>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-8">
              {menuItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-golden-accent group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-deep-graphite/80 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <nav className="absolute top-20 left-0 right-0 bg-background border-b border-border shadow-elegant">
            <div className="container-narrow py-6 space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-lg font-medium text-foreground hover:text-golden-accent transition-colors py-2"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </>
  );
};
