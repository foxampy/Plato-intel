import { Zap, Power, Thermometer, Cpu, Gauge, Wrench, Magnet, ToggleLeft, Info } from "lucide-react";

interface ProductsSectionProps {
  onSelectCategory: (category: string) => void;
}

const products = [
  { icon: Zap, title: "Автоматические выключатели", id: "circuit-breakers" },
  { icon: Power, title: "Магнитные пускатели", id: "starters" },
  { icon: Thermometer, title: "Тепловые реле", id: "thermal-relays" },
  { icon: Cpu, title: "Контакторы", id: "contactors" },
  { icon: Gauge, title: "Гидротолкатели", id: "hydro-thrusters" },
  { icon: Wrench, title: "Крановые тормоза", id: "crane-brakes" },
  { icon: Magnet, title: "Электромагниты", id: "electromagnets" },
  { icon: ToggleLeft, title: "Концевые выключатели", id: "limit-switches" }
];

export function ProductsSection({ onSelectCategory }: ProductsSectionProps) {
  return (
    <section className="products-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">КАТАЛОГ ОБОРУДОВАНИЯ</h2>
          <p className="section-description">
            Выберите категорию оборудования для просмотра доступных моделей
          </p>
        </div>

        <div className="products-grid">
          {products.map((product, idx) => {
            const Icon = product.icon;
            return (
              <div 
                key={idx} 
                className="product-card"
                onClick={() => onSelectCategory(product.id)}
              >
                <div className="product-icon">
                  <Icon size={32} />
                </div>
                <h3 className="product-title">{product.title}</h3>
                <button 
                  className="info-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    alert(`Категория: ${product.title}\n\nЗдесь представлена продукция высшего качества от проверенных производителей. Гарантия до 12 месяцев.`);
                  }}
                >
                  <Info size={16} />
                </button>
                <div className="card-glow"></div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .products-section {
          padding: 120px 5%;
          background: var(--background-secondary);
          position: relative;
        }

        .products-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(var(--grid-lines) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid-lines) 1px, transparent 1px);
          background-size: 8.333% 100%, 100% 8.333%;
          opacity: 0.3;
          pointer-events: none;
        }

        .section-container {
          position: relative;
          max-width: 1400px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 64px;
        }

        .section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(32px, 4vw, 48px);
          letter-spacing: 0.08em;
          color: var(--text-primary);
          margin: 0 0 16px 0;
          text-transform: uppercase;
        }

        .section-description {
          font-family: 'PT Sans', sans-serif;
          font-size: 16px;
          color: var(--text-secondary);
          margin: 0;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 32px;
        }

        .product-card {
          position: relative;
          padding: 40px 24px;
          background: var(--surface);
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          box-shadow:
            6px 6px 12px var(--shadow-dark),
            -2px -2px 8px var(--shadow-light);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }

        .product-card:hover {
          transform: translateY(-4px);
          box-shadow:
            8px 8px 16px var(--shadow-dark),
            -3px -3px 12px var(--shadow-light);
        }

        .product-card:hover .card-glow {
          opacity: 1;
        }

        .product-card:hover .product-icon {
          filter: drop-shadow(0 0 12px #ffaa00)
                  drop-shadow(0 0 24px #ff8800)
                  drop-shadow(0 0 36px #ff6600)
                  drop-shadow(0 0 48px #ff4400);
        }

        .product-icon {
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--background-primary);
          border-radius: 12px;
          box-shadow: inset 4px 4px 8px rgba(0,0,0,0.4);
          color: #ffd7a8;
          filter: drop-shadow(0 0 8px #ffaa00)
                  drop-shadow(0 0 16px #ff8800)
                  drop-shadow(0 0 24px #ff6600);
          transition: all 0.3s;
        }

        .product-title {
          font-family: 'PT Sans', sans-serif;
          font-size: 16px;
          color: var(--text-primary);
          text-align: center;
          margin: 0;
          position: relative;
          z-index: 2;
        }

        .info-btn {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--background-primary);
          border: 1px solid var(--grid-lines);
          border-radius: 6px;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.3s;
          opacity: 0;
        }

        .product-card:hover .info-btn {
          opacity: 1;
        }

        .info-btn:hover {
          color: var(--gri-glow);
          border-color: var(--gri-glow);
        }

        .card-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at center,
            rgba(255, 154, 77, 0.15) 0%,
            transparent 70%
          );
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .products-section {
            padding: 40px 16px;
          }
          
          .section-header {
            margin-bottom: 24px;
          }
          
          .section-title {
            font-size: 24px;
            margin-bottom: 8px;
          }
          
          .section-description {
            font-size: 13px;
          }

          .products-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
          
          .product-card {
            padding: 20px 12px;
          }
          
          .product-icon {
            width: 48px;
            height: 48px;
          }
          
          .product-icon svg {
            width: 24px;
            height: 24px;
          }
          
          .product-title {
            font-size: 12px;
          }
          
          .info-btn {
            opacity: 1;
            width: 24px;
            height: 24px;
            top: 8px;
            right: 8px;
          }
        }
        
        @media (max-width: 480px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
          }
          
          .product-card {
            padding: 16px 8px;
            border-radius: 8px;
          }
          
          .product-icon {
            width: 40px;
            height: 40px;
            border-radius: 8px;
            margin-bottom: 8px;
          }
          
          .product-title {
            font-size: 11px;
          }
        }
      `}</style>
    </section>
  );
}
