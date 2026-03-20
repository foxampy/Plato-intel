import { 
  Zap, Power, Thermometer, Cpu, Gauge, Wrench, Magnet, ToggleLeft,
  Search, Filter, ArrowRight
} from "lucide-react";

interface CatalogPageProps {
  onSelectCategory: (category: string) => void;
}

const categories = [
  { 
    icon: Zap, 
    title: "Автоматические выключатели", 
    id: "circuit-breakers",
    count: 120,
    description: "ВА-57, ВА-88, АЕ-20, А3790 и другие серии"
  },
  { 
    icon: Power, 
    title: "Магнитные пускатели", 
    id: "starters",
    count: 85,
    description: "ПМЛ, ПМЕ, ПМ12, зарубежные аналоги"
  },
  { 
    icon: Thermometer, 
    title: "Тепловые реле", 
    id: "thermal-relays",
    count: 64,
    description: "РТЛ, РТТ, РТЛн для защиты электродвигателей"
  },
  { 
    icon: Cpu, 
    title: "Контакторы", 
    id: "contactors",
    count: 96,
    description: "КТИ, КТН, КМИ, КТУ до 630А"
  },
  { 
    icon: Gauge, 
    title: "Гидротолкатели", 
    id: "hydro-thrusters",
    count: 32,
    description: "ТЭ-30, ТЭ-50, ТЭ-80 для кранов"
  },
  { 
    icon: Wrench, 
    title: "Крановые тормоза", 
    id: "crane-brakes",
    count: 28,
    description: "ТКГ, ТКП, ТКТ в различных модификациях"
  },
  { 
    icon: Magnet, 
    title: "Электромагниты", 
    id: "electromagnets",
    count: 45,
    description: "МО, МИС, ЭМ-33, ЭМ-44"
  },
  { 
    icon: ToggleLeft, 
    title: "Концевые выключатели", 
    id: "limit-switches",
    count: 78,
    description: "ВП, ВПК, ВП15 для систем управления"
  }
];

export function CatalogPage({ onSelectCategory }: CatalogPageProps) {
  return (
    <section className="catalog-page">
      <div className="page-header">
        <h1 className="page-title">КАТАЛОГ ОБОРУДОВАНИЯ</h1>
        <p className="page-subtitle">
          Полный ассортимент электротехнической продукции для промышленности
        </p>
      </div>

      {/* Search Bar */}
      <div className="search-section">
        <div className="search-bar">
          <Search size={20} className="search-icon" />
          <input 
            type="text" 
            placeholder="Поиск по артикулу, названию или производителю..."
            className="search-input"
          />
        </div>
        <button className="filter-btn">
          <Filter size={18} />
          <span>Фильтры</span>
        </button>
      </div>

      {/* Categories Grid */}
      <div className="categories-grid">
        {categories.map((category, idx) => {
          const Icon = category.icon;
          return (
            <div 
              key={idx} 
              className="category-card"
              onClick={() => onSelectCategory(category.id)}
            >
              <div className="category-icon">
                <Icon size={40} />
              </div>
              <div className="category-content">
                <h3 className="category-title">{category.title}</h3>
                <p className="category-description">{category.description}</p>
                <div className="category-footer">
                  <span className="category-count">{category.count} позиций</span>
                  <span className="category-arrow">
                    <ArrowRight size={16} />
                  </span>
                </div>
              </div>
              <div className="card-glow"></div>
            </div>
          );
        })}
      </div>

      {/* Info Banner */}
      <div className="info-banner">
        <div className="info-content">
          <h3>НЕ НАШЛИ НУЖНОЕ ОБОРУДОВАНИЕ?</h3>
          <p>
            Оставьте заявку — подберём аналоги или поставим под заказ. 
            Работаем с 50+ производителями из РБ, РФ, Китая, Европы.
          </p>
        </div>
        <button className="info-btn">ЗАПРОСИТЬ ПОДБОР</button>
      </div>

      <style>{`
        .catalog-page {
          padding: 120px 5% 80px;
          background: var(--background-primary);
          min-height: calc(100vh - 80px);
        }

        .page-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 48px;
        }

        .page-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(36px, 5vw, 56px);
          letter-spacing: 0.08em;
          color: var(--text-primary);
          margin: 0 0 24px 0;
          text-transform: uppercase;
        }

        .page-subtitle {
          font-family: 'PT Sans', sans-serif;
          font-size: 18px;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
        }

        .search-section {
          max-width: 900px;
          margin: 0 auto 48px;
          display: flex;
          gap: 16px;
        }

        .search-bar {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 20px;
          background: var(--surface);
          border: 1px solid var(--grid-lines);
          border-radius: 12px;
          box-shadow: 
            inset 2px 2px 4px rgba(0,0,0,0.3),
            inset -1px -1px 3px rgba(255,255,255,0.02);
        }

        .search-icon {
          color: var(--text-secondary);
        }

        .search-input {
          flex: 1;
          background: transparent;
          border: none;
          color: var(--text-primary);
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          outline: none;
        }

        .search-input::placeholder {
          color: var(--text-secondary);
        }

        .filter-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 16px 24px;
          background: var(--surface);
          border: 1px solid var(--grid-lines);
          border-radius: 12px;
          color: var(--text-primary);
          font-family: 'Bebas Neue', sans-serif;
          font-size: 14px;
          letter-spacing: 0.08em;
          cursor: pointer;
          box-shadow: 
            4px 4px 8px var(--shadow-dark),
            -1px -1px 4px var(--shadow-light);
          transition: all 0.3s;
        }

        .filter-btn:hover {
          border-color: var(--gri-glow);
          color: var(--gri-glow);
        }

        .categories-grid {
          max-width: 1200px;
          margin: 0 auto 48px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
        }

        .category-card {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 20px;
          padding: 28px;
          background: var(--surface);
          border-radius: 16px;
          cursor: pointer;
          box-shadow: 
            6px 6px 12px var(--shadow-dark),
            -2px -2px 8px var(--shadow-light);
          transition: all 0.3s;
          overflow: hidden;
        }

        .category-card:hover {
          transform: translateY(-4px);
          box-shadow: 
            8px 8px 16px var(--shadow-dark),
            -3px -3px 12px var(--shadow-light);
        }

        .category-card:hover .card-glow {
          opacity: 1;
        }

        .category-icon {
          flex-shrink: 0;
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--background-primary);
          border-radius: 12px;
          color: #ffd7a8;
          filter: drop-shadow(0 0 8px #ffaa00) 
                  drop-shadow(0 0 16px #ff8800);
        }

        .category-content {
          flex: 1;
        }

        .category-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 18px;
          letter-spacing: 0.08em;
          color: var(--text-primary);
          margin: 0 0 8px 0;
          text-transform: uppercase;
        }

        .category-description {
          font-family: 'PT Sans', sans-serif;
          font-size: 13px;
          color: var(--text-secondary);
          margin: 0 0 16px 0;
          line-height: 1.5;
        }

        .category-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .category-count {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          color: var(--gri-glow);
        }

        .category-arrow {
          color: var(--text-secondary);
          transition: all 0.3s;
        }

        .category-card:hover .category-arrow {
          color: var(--gri-glow);
          transform: translateX(4px);
        }

        .card-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at center,
            rgba(255, 154, 77, 0.1) 0%,
            transparent 70%
          );
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
        }

        .info-banner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 32px 48px;
          background: linear-gradient(135deg, var(--surface) 0%, var(--surface-highlight) 100%);
          border: 1px solid rgba(255, 154, 77, 0.2);
          border-radius: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 32px;
          box-shadow: 
            6px 6px 12px var(--shadow-dark),
            -2px -2px 8px var(--shadow-light);
        }

        .info-content h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 18px;
          letter-spacing: 0.08em;
          color: var(--text-primary);
          margin: 0 0 8px 0;
          text-transform: uppercase;
        }

        .info-content p {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-secondary);
          margin: 0;
        }

        .info-btn {
          flex-shrink: 0;
          padding: 14px 28px;
          background: var(--gri-glow);
          border: none;
          border-radius: 8px;
          color: var(--background-primary);
          font-family: 'Bebas Neue', sans-serif;
          font-size: 14px;
          letter-spacing: 0.08em;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(255, 154, 77, 0.4);
          transition: all 0.3s;
        }

        .info-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(255, 154, 77, 0.5);
        }

        @media (max-width: 768px) {
          .catalog-page {
            padding: 72px 16px 40px;
          }
          
          .page-title {
            font-size: 24px;
          }
          
          .page-subtitle {
            font-size: 13px;
          }

          .search-section {
            flex-direction: row;
            gap: 8px;
          }
          
          .search-bar {
            padding: 10px 14px;
          }
          
          .search-input {
            font-size: 13px;
          }
          
          .filter-btn {
            padding: 10px 14px;
            font-size: 11px;
          }

          .categories-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          
          .category-card {
            padding: 16px;
            gap: 12px;
          }
          
          .category-icon {
            width: 40px;
            height: 40px;
          }
          
          .category-icon svg {
            width: 20px;
            height: 20px;
          }
          
          .category-title {
            font-size: 14px;
          }
          
          .category-description {
            font-size: 11px;
            margin-bottom: 8px;
          }
          
          .category-count {
            font-size: 11px;
          }

          .info-banner {
            flex-direction: column;
            text-align: center;
            padding: 20px;
            gap: 16px;
          }
          
          .info-content h3 {
            font-size: 14px;
          }
          
          .info-content p {
            font-size: 12px;
          }
          
          .info-btn {
            width: 100%;
            padding: 12px;
          }
        }
      `}</style>
    </section>
  );
}
