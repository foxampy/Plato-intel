import { Palette, Globe, Database, Bot, Brain, Search, TrendingUp } from "lucide-react";

const products = [
  {
    icon: Palette,
    number: "01",
    title: "Ребрендинг и визуальная стилистика",
    description: "Разработка уникальной узнаваемой айдентики, визуальной стилистики и брендбука для выделения на рынке"
  },
  {
    icon: Globe,
    number: "02",
    title: "Обновление сайта с брендингом",
    description: "Новостное полотно (нишевое, региональное, международное), исследования и разработки, блог специалистов. Система каталога с сопутствующими товарами, альтернативным оборудованием, расходниками, функция параллельного сравнения"
  },
  {
    icon: Database,
    number: "03",
    title: "CRM сквозная",
    description: "CRM-система с уведомлениями в Telegram и специальным сайтом для управления клиентами и сделками"
  },
  {
    icon: Bot,
    number: "04",
    title: "Telegram-бот",
    description: "Бот с меню, ассистентом, ИИ-менеджером, записью пользователя в CRM и воронкой продаж"
  },
  {
    icon: Brain,
    number: "05",
    title: "ИИ-менеджер",
    description: "Обучаемый на каталоге, чатах и общей информации рынка. Отвечает 24/7, квалифицирует лидов"
  },
  {
    icon: Search,
    number: "06",
    title: "Автоматизированная система поиска",
    description: "Поиск тендеров, аварий (возможные заказчики для смены оборудования), топ-менеджеров предприятий из списка периодически нуждающихся"
  },
  {
    icon: TrendingUp,
    number: "07",
    title: "SEO-продвижение",
    description: "Настройка SEO и поиск специалиста для ежемесячного продвижения, рост трафика 20-30%/год"
  }
];

export function ProductsOfferSection() {
  return (
    <section className="products-offer-section">
      <div className="section-container">
        <h2 className="section-title">ПРОДУКТЫ КОТОРЫЕ МЫ ПРЕДЛАГАЕМ</h2>
        <p className="section-subtitle">
          Комплексное цифровое преобразование для роста вашего бизнеса
        </p>
        
        <div className="products-grid">
          {products.map((product, idx) => {
            const Icon = product.icon;
            return (
              <div 
                key={idx} 
                className="product-card"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="product-header">
                  <div className="product-icon">
                    <Icon size={28} />
                  </div>
                  <span className="product-number">{product.number}</span>
                </div>
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .products-offer-section {
          padding: 120px 5%;
          background: var(--background-secondary);
          position: relative;
          overflow: hidden;
        }

        .products-offer-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(var(--grid-lines) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid-lines) 1px, transparent 1px);
          background-size: 8.333% 100%, 100% 8.333%;
          opacity: 0.2;
          pointer-events: none;
        }

        .section-container {
          position: relative;
          max-width: 1400px;
          margin: 0 auto;
        }

        .section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(32px, 4vw, 48px);
          letter-spacing: 0.08em;
          color: var(--text-primary);
          text-align: center;
          margin: 0 0 16px 0;
          text-transform: uppercase;
        }

        .section-subtitle {
          font-family: 'PT Sans', sans-serif;
          font-size: 18px;
          color: var(--text-secondary);
          text-align: center;
          margin: 0 0 64px 0;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 24px;
        }

        .product-card {
          padding: 32px;
          background: var(--surface);
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          box-shadow: 
            6px 6px 12px var(--shadow-dark),
            -2px -2px 8px var(--shadow-light);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
          transform: translateY(20px);
          animation: card-appear 0.6s ease-out forwards;
          border: 1px solid transparent;
        }

        .product-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 154, 77, 0.3);
          box-shadow: 
            8px 8px 16px var(--shadow-dark),
            -3px -3px 12px var(--shadow-light),
            0 0 30px rgba(255, 154, 77, 0.15);
        }

        .product-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .product-icon {
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--background-primary);
          border-radius: 12px;
          color: var(--gri-glow);
          box-shadow: inset 4px 4px 8px rgba(0,0,0,0.4);
        }

        .product-number {
          font-family: 'JetBrains Mono', monospace;
          font-size: 14px;
          color: var(--text-secondary);
          opacity: 0.5;
        }

        .product-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 20px;
          letter-spacing: 0.06em;
          color: var(--text-primary);
          margin: 0;
          text-transform: uppercase;
          line-height: 1.3;
        }

        .product-description {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          line-height: 1.6;
          color: var(--text-secondary);
          margin: 0;
        }

        @keyframes card-appear {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 968px) {
          .products-grid {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          }
        }

        @media (max-width: 768px) {
          .products-offer-section {
            padding: 80px 20px;
          }

          .section-title {
            font-size: 24px;
          }

          .section-subtitle {
            font-size: 14px;
            margin-bottom: 40px;
          }

          .products-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .product-card {
            padding: 24px;
          }

          .product-title {
            font-size: 16px;
          }

          .product-description {
            font-size: 13px;
          }
        }
      `}</style>
    </section>
  );
}
