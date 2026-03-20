import { Truck, MapPin, Clock, Package, CheckCircle } from "lucide-react";

export function DeliveryPage() {
  const deliveryMethods = [
    {
      icon: Truck,
      title: "ДОСТАВКА ПО МИНСКУ",
      price: "Бесплатно",
      time: "1-2 дня",
      description: "При заказе от 500 BYN. Курьер до двери или самовывоз со склада."
    },
    {
      icon: MapPin,
      title: "ПО РЕСПУБЛИКЕ БЕЛАРУСЬ",
      price: "От 25 BYN",
      time: "2-5 дней",
      description: "Через Белпочту, Европочту или курьерскую доставку."
    },
    {
      icon: Package,
      title: "В СТРАНЫ СНГ",
      price: "По запросу",
      time: "5-14 дней",
      description: "Доставка транспортными компаниями: Деловые Линии, Байкал-Сервис."
    }
  ];

  const features = [
    "Склад в Минске — отгрузка в день заказа",
    "Упаковка для транспортировки",
    "Страхование груза",
    "Отслеживание доставки"
  ];

  return (
    <section className="delivery-page">
      <div className="page-header">
        <h1 className="page-title">ДОСТАВКА</h1>
        <p className="page-subtitle">Доставляем оборудование по всей Беларуси и СНГ</p>
      </div>

      <div className="content-wrapper">
        {/* Delivery Methods */}
        <div className="methods-grid">
          {deliveryMethods.map((method, idx) => {
            const Icon = method.icon;
            return (
              <div key={idx} className="method-card">
                <div className="method-icon">
                  <Icon size={28} />
                </div>
                <h3 className="method-title">{method.title}</h3>
                <div className="method-meta">
                  <span className="method-price">{method.price}</span>
                  <span className="method-divider">•</span>
                  <span className="method-time">
                    <Clock size={12} />
                    {method.time}
                  </span>
                </div>
                <p className="method-desc">{method.description}</p>
              </div>
            );
          })}
        </div>

        {/* Features */}
        <div className="features-box">
          <h3 className="features-title">ПОЧЕМУ С НАМИ УДОБНО</h3>
          <ul className="features-list">
            {features.map((feature, idx) => (
              <li key={idx} className="feature-item">
                <CheckCircle size={16} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Warehouse */}
        <div className="warehouse-card">
          <div className="warehouse-info">
            <h3>СКЛАД В МИНСКЕ</h3>
            <p>г. Минск, ул. Промышленная, 15</p>
            <p>Пн-Пт: 9:00 — 18:00</p>
          </div>
          <button className="warehouse-btn">ПОСМОТРЕТЬ НА КАРТЕ</button>
        </div>
      </div>

      <style>{`
        .delivery-page {
          padding: 100px 5% 60px;
          background: var(--background-primary);
          min-height: calc(100vh - 80px);
        }

        .page-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .page-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(28px, 4vw, 40px);
          letter-spacing: 0.08em;
          color: var(--text-primary);
          margin: 0 0 12px 0;
        }

        .page-subtitle {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-secondary);
          margin: 0;
        }

        .content-wrapper {
          max-width: 720px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .methods-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
        }

        .method-card {
          padding: 20px;
          background: var(--surface);
          border-radius: 12px;
          box-shadow: 
            4px 4px 8px var(--shadow-dark),
            -1px -1px 4px var(--shadow-light);
        }

        .method-icon {
          color: #ffd7a8;
          filter: drop-shadow(0 0 6px #ffaa00);
          margin-bottom: 12px;
        }

        .method-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 14px;
          letter-spacing: 0.06em;
          color: var(--text-primary);
          margin: 0 0 10px 0;
        }

        .method-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
        }

        .method-price {
          font-family: 'JetBrains Mono', monospace;
          font-size: 14px;
          color: var(--accent-green);
          font-weight: 600;
        }

        .method-divider {
          color: var(--grid-lines);
        }

        .method-time {
          display: flex;
          align-items: center;
          gap: 4px;
          font-family: 'PT Sans', sans-serif;
          font-size: 12px;
          color: var(--text-secondary);
        }

        .method-desc {
          font-family: 'PT Sans', sans-serif;
          font-size: 12px;
          color: var(--text-secondary);
          line-height: 1.5;
          margin: 0;
        }

        .features-box {
          padding: 24px;
          background: var(--surface);
          border-radius: 12px;
          box-shadow: 
            4px 4px 8px var(--shadow-dark),
            -1px -1px 4px var(--shadow-light);
        }

        .features-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 14px;
          letter-spacing: 0.06em;
          color: var(--text-primary);
          margin: 0 0 16px 0;
          text-align: center;
        }

        .features-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'PT Sans', sans-serif;
          font-size: 13px;
          color: var(--text-secondary);
        }

        .feature-item svg {
          color: var(--accent-green);
          flex-shrink: 0;
        }

        .warehouse-card {
          padding: 20px 24px;
          background: linear-gradient(135deg, var(--surface) 0%, var(--surface-highlight) 100%);
          border: 1px solid rgba(255, 154, 77, 0.2);
          border-radius: 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
          box-shadow: 
            4px 4px 8px var(--shadow-dark),
            -1px -1px 4px var(--shadow-light);
        }

        .warehouse-info h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 14px;
          letter-spacing: 0.06em;
          color: var(--text-primary);
          margin: 0 0 6px 0;
        }

        .warehouse-info p {
          font-family: 'PT Sans', sans-serif;
          font-size: 13px;
          color: var(--text-secondary);
          margin: 0;
          line-height: 1.5;
        }

        .warehouse-btn {
          padding: 10px 20px;
          background: var(--gri-glow);
          border: none;
          border-radius: 8px;
          color: var(--background-primary);
          font-family: 'Bebas Neue', sans-serif;
          font-size: 12px;
          letter-spacing: 0.06em;
          cursor: pointer;
          white-space: nowrap;
          box-shadow: 0 4px 12px rgba(255, 154, 77, 0.3);
          transition: all 0.3s;
        }

        .warehouse-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(255, 154, 77, 0.4);
        }

        @media (max-width: 768px) {
          .delivery-page {
            padding: 72px 16px 40px;
          }
          
          .page-title {
            font-size: 22px;
          }
          
          .page-subtitle {
            font-size: 13px;
          }

          .methods-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          
          .method-card {
            padding: 16px;
          }
          
          .method-title {
            font-size: 13px;
          }
          
          .method-price {
            font-size: 13px;
          }
          
          .method-desc {
            font-size: 11px;
          }

          .features-box {
            padding: 16px;
          }
          
          .features-title {
            font-size: 12px;
            margin-bottom: 12px;
          }
          
          .features-list {
            grid-template-columns: 1fr;
            gap: 8px;
          }
          
          .feature-item {
            font-size: 12px;
          }

          .warehouse-card {
            flex-direction: column;
            text-align: center;
            padding: 20px;
            gap: 16px;
          }
          
          .warehouse-info h3 {
            font-size: 13px;
          }
          
          .warehouse-info p {
            font-size: 12px;
          }

          .warehouse-btn {
            width: 100%;
            padding: 10px;
          }
        }
      `}</style>
    </section>
  );
}
