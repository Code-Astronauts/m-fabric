import { Button, Container, Section } from "@m-fabric/ui";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* ── Hero Section ── */}
      <Section className="relative overflow-hidden pt-32 sm:pt-40 lg:pt-48">
        {/* Background glow effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-accent-500/10 rounded-full blur-[100px] pointer-events-none" />

        <Container className="relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-500/30 bg-brand-600/10 text-brand-300 text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
            Доступно сейчас
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold tracking-tight mb-6 animate-slide-up">
            Создавайте{" "}
            <span className="bg-gradient-to-r from-brand-400 via-brand-300 to-accent-400 bg-clip-text text-transparent">
              будущее
            </span>
            <br />
            вместе с нами
          </h1>

          <p className="text-lg sm:text-xl text-surface-400 max-w-2xl mx-auto mb-10 animate-slide-up [animation-delay:0.1s]">
            Современные решения для вашего бизнеса. Быстро, качественно,
            с вниманием к каждой детали.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up [animation-delay:0.2s]">
            <Button variant="primary" size="lg">
              Начать бесплатно
            </Button>
            <Button variant="outline" size="lg">
              Узнать больше
            </Button>
          </div>
        </Container>
      </Section>

      {/* ── Features Section ── */}
      <Section id="features">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-surface-400 text-lg max-w-xl mx-auto">
              Ключевые преимущества, которые выделяют нас среди конкурентов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "⚡",
                title: "Скорость",
                description:
                  "Молниеносная производительность и оптимизированная загрузка для лучшего пользовательского опыта.",
              },
              {
                icon: "🛡️",
                title: "Надёжность",
                description:
                  "Проверенные решения с гарантией стабильности и безопасности ваших данных.",
              },
              {
                icon: "🎨",
                title: "Дизайн",
                description:
                  "Современный и элегантный интерфейс, продуманный до мельчайших деталей.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group relative p-8 rounded-2xl border border-surface-800 bg-surface-900/50 backdrop-blur-sm hover:border-brand-500/50 hover:bg-surface-800/50 transition-all duration-300"
              >
                {/* Card glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-brand-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-brand-600/10 border border-brand-500/20 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-surface-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── CTA Section ── */}
      <Section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-600/5 to-transparent pointer-events-none" />
        <Container className="relative z-10">
          <div className="text-center p-12 sm:p-16 rounded-3xl border border-surface-800 bg-surface-900/30 backdrop-blur-sm">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Готовы начать?
            </h2>
            <p className="text-surface-400 text-lg max-w-lg mx-auto mb-8">
              Присоединяйтесь к нам и откройте новые возможности для вашего
              бизнеса уже сегодня.
            </p>
            <Button variant="primary" size="lg">
              Связаться с нами
            </Button>
          </div>
        </Container>
      </Section>

      {/* ── Footer ── */}
      <footer className="py-8 border-t border-surface-800/50">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-surface-500 text-sm">
            <p>© 2026 M-Fabric. Все права защищены.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  );
}
