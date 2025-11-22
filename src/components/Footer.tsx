export const Footer = () => {
  return (
    <footer className="bg-deep-graphite text-white py-12">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-2xl font-serif font-semibold mb-2">
              Faina Design
            </p>
            <p className="text-sm text-white/60">
              Интерьеры для жизни и вдохновения
            </p>
          </div>

          <div className="text-center md:text-right text-sm text-white/60">
            <p>© {new Date().getFullYear()} Все права защищены</p>
            <p className="mt-1">Иркутск, Россия</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
