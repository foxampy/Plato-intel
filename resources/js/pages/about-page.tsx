import { NixieTubeAdvanced } from "../components/nixie-tube-advanced";
import { Building2, Users2, Award, Target } from "lucide-react";

export function AboutPage() {
  const stats = [
    { value: "2003", label: "ГОД ОСНОВАНИЯ" },
    { value: "340+", label: "ПРОЕКТОВ" },
    { value: "20+", label: "ЛЕТ ОПЫТА" },
    { value: "12", label: "МЕС ГАРАНТИИ" }
  ];

  const values = [
    {
      icon: Building2,
      title: "НАДЁЖНОСТЬ",
      description: "Поставляем оборудование только от проверенных производителей с полным пакетом документации."
    },
    {
      icon: Users2,
      title: "КЛИЕНТООРИЕНТИРОВАННОСТЬ",
      description: "Подбираем решения под ваши задачи, а не продаём то, что есть на складе."
    },
    {
      icon: Award,
      title: "КАЧЕСТВО",
      description: "Вся продукция соответствует ГОСТ и ТУ. Предоставляем сертификаты и паспорта."
    },
    {
      icon: Target,
      title: "ТОЧНОСТЬ",
      description: "Индивидуальный подход к каждому проекту. Техническая поддержка на всех этапах."
    }
  ];

  return (
    <section className="about-page">
      <div className="page-header">
        <h1 className="page-title">О КОМПАНИИ</h1>
        <p className="page-subtitle">
          PLATO-INTEL — надёжный поставщик электротехнического оборудования 
          для промышленности с 2003 года
        </p>
      </div>

      {/* Stats */}
      <div className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <NixieTubeAdvanced value={stat.value} label={stat.label} delay={idx * 200} size="medium" />
            </div>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="description-section">
        <div className="description-content">
          <h2>КТО МЫ</h2>
          <p>
            ООО «Плато-Интел» специализируется на поставках электротехнической продукции 
            для промышленных предприятий. В нашем каталоге — автоматические выключатели, 
            контакторы, реле, гидротолкатели, крановое оборудование от ведущих производителей.
          </p>
          <p>
            Работаем с государственными и частными предприятиями, электромонтажными 
            организациями, проектными институтами. Обеспечиваем полный цикл — 
            от подбора оборудования до доставки и сервисного обслуживания.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="values-section">
        <h2>НАШИ ЦЕННОСТИ</h2>
        <div className="values-grid">
          {values.map((value, idx) => {
            const Icon = value.icon;
            return (
              <div key={idx} className="value-card">
                <div className="value-icon">
                  <Icon size={32} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .about-page {
          padding: 120px 5% 80px;
          background: var(--background-primary);
          min-height: calc(100vh - 80px);
        }

        .page-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 64px;
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

        .stats-section {
          max-width: 1200px;
          margin: 0 auto 80px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 24px;
        }

        .stat-card {
          padding: 32px 24px;
          background: var(--surface);
          border-radius: 16px;
          text-align: center;
          box-shadow: 
            6px 6px 12px var(--shadow-dark),
            -2px -2px 8px var(--shadow-light);
        }

        .description-section {
          max-width: 800px;
          margin: 0 auto 80px;
          padding: 48px;
          background: var(--surface);
          border-radius: 16px;
          box-shadow: 
            6px 6px 12px var(--shadow-dark),
            -2px -2px 8px var(--shadow-light);
        }

        .description-content h2 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 28px;
          letter-spacing: 0.08em;
          color: var(--text-primary);
          margin: 0 0 24px 0;
          text-transform: uppercase;
        }

        .description-content p {
          font-family: 'PT Sans', sans-serif;
          font-size: 16px;
          color: var(--text-secondary);
          line-height: 1.8;
          margin: 0 0 16px 0;
        }

        .description-content p:last-child {
          margin-bottom: 0;
        }

        .values-section {
          max-width: 1200px;
          margin: 0 auto;
        }

        .values-section h2 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 32px;
          letter-spacing: 0.08em;
          color: var(--text-primary);
          text-align: center;
          margin: 0 0 48px 0;
          text-transform: uppercase;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
        }

        .value-card {
          padding: 32px;
          background: var(--surface);
          border-radius: 16px;
          text-align: center;
          box-shadow: 
            6px 6px 12px var(--shadow-dark),
            -2px -2px 8px var(--shadow-light);
          transition: all 0.3s;
        }

        .value-card:hover {
          transform: translateY(-4px);
          box-shadow: 
            8px 8px 16px var(--shadow-dark),
            -3px -3px 12px var(--shadow-light);
        }

        .value-icon {
          color: #ffd7a8;
          filter: drop-shadow(0 0 8px #ffaa00) 
                  drop-shadow(0 0 16px #ff8800);
          margin-bottom: 16px;
        }

        .value-card h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 18px;
          letter-spacing: 0.08em;
          color: var(--text-primary);
          margin: 0 0 12px 0;
          text-transform: uppercase;
        }

        .value-card p {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 768px) {
          .about-page {
            padding: 72px 16px 40px;
          }
          
          .page-header {
            margin-bottom: 32px;
          }
          
          .page-title {
            font-size: 24px;
            margin-bottom: 8px;
          }
          
          .page-subtitle {
            font-size: 13px;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
          
          .stat-card {
            padding: 16px 8px;
          }
          
          .stats-section {
            margin-bottom: 32px;
          }

          .description-section {
            padding: 20px;
            margin-bottom: 32px;
          }
          
          .description-content h2 {
            font-size: 18px;
            margin-bottom: 12px;
          }
          
          .description-content p {
            font-size: 13px;
            line-height: 1.6;
          }

          .values-section h2 {
            font-size: 18px;
            margin-bottom: 24px;
          }
          
          .values-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
          
          .value-card {
            padding: 16px 12px;
          }
          
          .value-icon svg {
            width: 24px;
            height: 24px;
          }
          
          .value-card h3 {
            font-size: 11px;
            margin-bottom: 4px;
          }
          
          .value-card p {
            font-size: 10px;
            line-height: 1.4;
          }
        }
        
        @media (max-width: 480px) {
          .values-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
}
