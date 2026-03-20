import { NixieTubeAdvanced } from "./nixie-tube-advanced";
import { Search, GitCompare, Bot, MessageSquare, Package, User, ChevronRight, TrendingUp, Clock, Target, BarChart3, Users, CheckCircle2 } from "lucide-react";

export function PresentationSection() {
  const features = [
    {
      icon: Search,
      title: "УМНЫЙ ПОИСК",
      description: "Галетный переключатель: по производителю, назначению, артикулу. Как на щите управления."
    },
    {
      icon: GitCompare,
      title: "СРАВНЕНИЕ",
      description: "До 4 товаров одновременно. Характеристики в таблице, различия подсвечены."
    },
    {
      icon: Bot,
      title: "ИИ-КОНСУЛЬТАНТ",
      description: "Обучен на документации. Работает 24/7. Знает разницу между ВА-57 и ВА-55."
    },
    {
      icon: MessageSquare,
      title: "TELEGRAM-БОТ",
      description: "Каталог в мессенджере. Уведомления о заказах, повторные закупки."
    },
    {
      icon: Package,
      title: "СОПУТСТВУЮЩИЕ ТОВАРЫ",
      description: "Расходники, альтернативы, готовые решения, расширенная гарантия."
    },
    {
      icon: User,
      title: "ЛИЧНЫЙ КАБИНЕТ",
      description: "История заказов, избранное, документы. Повторные покупки в один клик."
    }
  ];

  const targetAudience = [
    {
      role: "ИНЖЕНЕР-ЭЛЕКТРИК",
      needs: "Быстрый поиск по артикулу, точные характеристики, сравнение аналогов, все документы."
    },
    {
      role: "ГЛАВНЫЙ ИНЖЕНЕР",
      needs: "Проверка поставщика, портфолио проектов, рекомендации. Сайт говорит о профессионализме."
    },
    {
      role: "СНАБЖЕНЕЦ",
      needs: "Цены, наличие на складе, сроки поставки. Минимум времени на рутину."
    }
  ];

  const commercialProposal = {
    stages: [
      {
        title: "ЭТАП 1: ФУНДАМЕНТ",
        duration: "2 месяца",
        items: [
          { name: "Новый сайт в уникальном стиле", effect: "SEO-ready, 8+ страниц, адаптив" },
          { name: "ИИ-менеджер 24/7", effect: "Обучен на товарах, интегрирован в CRM" },
          { name: "Телеграм-бот с каталогом", effect: "Дублирует сайт, рассылки, уведомления" },
          { name: "CRM-система", effect: "Клиенты, сделки, задачи, аналитика" },
          { name: "Система сопутствующих товаров", effect: "Апселл, кросс-селл, бандлы" }
        ]
      },
      {
        title: "ЭТАП 2: РАЗВИТИЕ",
        duration: "постоянно",
        items: [
          { name: "Автоматизированное SEO", effect: "Рост трафика 20-30%/год без ручного труда" },
          { name: "Сквозная аналитика", effect: "Понимание ROI каждого канала" }
        ]
      }
    ],
    benefits: [
      { icon: Users, text: "ИИ отвечает на вопросы — менеджер только на сложное" },
      { icon: CheckCircle2, text: "Все заявки в CRM со статусами и напоминаниями" },
      { icon: BarChart3, text: "Полная аналитика: источник → страница → заявка → сделка" },
      { icon: Clock, text: "ИИ работает 24/7, клиент получает ответ мгновенно" }
    ]
  };

  return (
    <section className="presentation-section">
      <div className="section-container">
        
        {/* О проекте */}
        <div className="pres-block intro-block">
          <h2 className="block-title">ЦИФРОВАЯ ТРАНСФОРМАЦИЯ</h2>
          <div className="intro-content">
            <p className="intro-text">
              Комплексное обновление цифровой инфраструктуры <strong>ООО «Плато-Интел»</strong>. 
              Не просто сайт — а полная автоматизация: от первого клика клиента до закрытия сделки.
              Разработано специально для B2B-рынка электротехники с учётом специфики аудитории 40-55 лет.
            </p>
          </div>
        </div>

        {/* Почему такой дизайн */}
        <div className="pres-block design-block">
          <h3 className="block-subtitle">КОНЦЕПЦИЯ: ТЁПЛЫЙ ИНДУСТРИАЛЬНЫЙ НЕОМОРФИЗМ</h3>
          <div className="design-single">
            <p>
              Современный тактильный дизайн, понятный инженерам 40-50 лет, с узнаваемыми элементами 
              советской инженерии. <strong>Газоразрядные индикаторы (ГРИ)</strong> вызывают ностальгию 
              без слабости, ассоциируются с надёжностью. <strong>Неоморфизм</strong> даёт тактильность 
              и выпуклые панели. <strong>Конструктивизм</strong> обеспечивает структуру, геометрию 
              и промышленную эстетику.
            </p>
          </div>
        </div>

        {/* Что умеет сайт */}
        <div className="pres-block features-block">
          <h2 className="block-title">ЧТО УМЕЕТ СИСТЕМА</h2>
          <div className="features-grid">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="feature-card">
                  <div className="feature-icon-wrapper">
                    <div className="gri-icon">
                      <Icon size={32} />
                    </div>
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Для кого */}
        <div className="pres-block audience-block">
          <h2 className="block-title">ДЛЯ КОГО ЭТОТ ПРОЕКТ</h2>
          <div className="audience-grid">
            {targetAudience.map((audience, idx) => (
              <div key={idx} className="audience-card">
                <h3 className="audience-role">{audience.role}</h3>
                <p className="audience-needs">{audience.needs}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Коммерческое предложение */}
        <div className="pres-block proposal-block">
          <h2 className="block-title">КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ</h2>
          
          <div className="stages-container">
            {commercialProposal.stages.map((stage, idx) => (
              <div key={idx} className="stage-card">
                <div className="stage-header">
                  <h3 className="stage-title">{stage.title}</h3>
                  <span className="stage-duration">{stage.duration}</span>
                </div>
                <div className="stage-items">
                  {stage.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="stage-item">
                      <div className="stage-item-dot"></div>
                      <div className="stage-item-content">
                        <span className="stage-item-name">{item.name}</span>
                        <span className="stage-item-effect">{item.effect}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="benefits-section">
            <h3 className="benefits-title">КАК ЭТО РАЗГРУЖАЕТ РАБОТУ</h3>
            <div className="benefits-grid">
              {commercialProposal.benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div key={idx} className="benefit-item">
                    <div className="benefit-icon">
                      <Icon size={24} />
                    </div>
                    <span className="benefit-text">{benefit.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Стоимость */}
        <div className="pres-block pricing-block">
          <h2 className="block-title">СТОИМОСТЬ ПРОЕКТА</h2>
          
          <div className="pricing-comparison">
            <div className="pricing-card market">
              <div className="pricing-header">
                <h3>РЫНОК БЕЛАРУСИ</h3>
                <p className="pricing-range">8,500 - 19,500 BYN</p>
              </div>
              <ul className="pricing-breakdown">
                <li>Сайт с каталогом: 3,000-8,000</li>
                <li>ИИ-чат-бот: 1,200-2,000</li>
                <li>Telegram-бот: 800-1,500</li>
                <li>CRM-система: 2,000-5,000</li>
                <li>Аналитика: 1,500-3,000</li>
              </ul>
            </div>

            <div className="pricing-card offer">
              <div className="pricing-badge">НАШЕ ПРЕДЛОЖЕНИЕ</div>
              <div className="pricing-header">
                <h3>ПОЛНЫЙ КОМПЛЕКС</h3>
                <div className="pricing-main">
                  <div className="nixie-price">
                    <NixieTubeAdvanced value="6900" label="BYN" size="large" delay={200} />
                  </div>
                </div>
              </div>
              <div className="savings">
                <p>Экономия от <strong>40% до 65%</strong></p>
              </div>
              <ul className="pricing-includes">
                <li><ChevronRight size={16} /> Уникальный дизайн</li>
                <li><ChevronRight size={16} /> Полная автоматизация</li>
                <li><ChevronRight size={16} /> Все включено</li>
              </ul>
            </div>
          </div>

          <div className="pricing-details">
            <div className="detail-card">
              <h4>ПРЕДОПЛАТА 30%</h4>
              <div className="nixie-inline">
                <NixieTubeAdvanced value="2070" label="BYN" size="small" delay={400} />
              </div>
              <p>Покрывает дизайн-концепцию, прототипирование и старт работ</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="pres-block cta-block">
          <p className="cta-text">
            Оставьте контакт — мы покажем прототип, обсудим детали, подготовим индивидуальное предложение
          </p>
          <button className="cta-button">
            ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ
          </button>
        </div>

      </div>

      <style>{`
        .presentation-section {
          padding: 120px 5%;
          background: var(--background-primary);
          position: relative;
        }

        .section-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 80px;
        }

        .pres-block {
          position: relative;
        }

        .block-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(36px, 5vw, 56px);
          letter-spacing: 0.08em;
          color: var(--text-primary);
          margin: 0 0 40px 0;
          text-align: center;
          text-transform: uppercase;
        }

        .block-subtitle {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(24px, 3vw, 32px);
          letter-spacing: 0.08em;
          color: var(--gri-glow);
          margin: 0 0 32px 0;
          text-transform: uppercase;
          text-shadow: 0 0 10px var(--gri-glow);
        }

        .intro-content {
          max-width: 900px;
          margin: 0 auto;
        }

        .intro-text {
          font-family: 'PT Sans', sans-serif;
          font-size: 20px;
          line-height: 1.8;
          color: var(--text-secondary);
          margin: 0;
        }

        .intro-text strong {
          color: var(--text-primary);
          font-weight: 700;
        }

        .design-single {
          max-width: 800px;
          margin: 0 auto;
          padding: 40px;
          background: var(--surface);
          border-radius: 16px;
          box-shadow: 
            6px 6px 12px var(--shadow-dark),
            -2px -2px 8px var(--shadow-light);
        }

        .design-single p {
          font-family: 'PT Sans', sans-serif;
          font-size: 16px;
          line-height: 1.8;
          color: var(--text-secondary);
          margin: 0;
        }

        .design-single strong {
          color: var(--gri-glow);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
        }

        .feature-card {
          padding: 32px;
          background: var(--surface);
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          box-shadow: 
            6px 6px 12px var(--shadow-dark),
            -2px -2px 8px var(--shadow-light);
          transition: all 0.3s;
        }

        .feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 
            8px 8px 16px var(--shadow-dark),
            -3px -3px 12px var(--shadow-light);
        }

        .feature-icon-wrapper {
          display: flex;
          justify-content: center;
        }

        .gri-icon {
          color: #ffd7a8;
          filter: drop-shadow(0 0 8px #ffaa00) 
                  drop-shadow(0 0 16px #ff8800) 
                  drop-shadow(0 0 24px #ff6600);
          animation: gri-icon-pulse 3s infinite ease-in-out;
        }

        @keyframes gri-icon-pulse {
          0%, 100% { 
            filter: drop-shadow(0 0 8px #ffaa00) 
                    drop-shadow(0 0 16px #ff8800) 
                    drop-shadow(0 0 24px #ff6600);
          }
          50% { 
            filter: drop-shadow(0 0 12px #ffaa00) 
                    drop-shadow(0 0 24px #ff8800) 
                    drop-shadow(0 0 36px #ff6600);
          }
        }

        @keyframes nixie-pulse {
          0%, 90%, 100% { opacity: 1; }
          93% { opacity: 0.9; }
          96% { opacity: 0.95; }
        }

        .feature-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 18px;
          letter-spacing: 0.08em;
          color: var(--text-primary);
          margin: 0;
          text-transform: uppercase;
        }

        .feature-description {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          line-height: 1.6;
          color: var(--text-secondary);
          margin: 0;
        }

        .audience-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
        }

        .audience-card {
          padding: 32px;
          background: linear-gradient(135deg, var(--surface) 0%, var(--surface-highlight) 100%);
          border: 1px solid rgba(255, 154, 77, 0.2);
          border-radius: 16px;
          box-shadow: 
            6px 6px 12px var(--shadow-dark),
            -2px -2px 8px var(--shadow-light);
        }

        .audience-role {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 20px;
          letter-spacing: 0.08em;
          color: var(--gri-glow);
          margin: 0 0 16px 0;
          text-transform: uppercase;
        }

        .audience-needs {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          line-height: 1.6;
          color: var(--text-secondary);
          margin: 0;
        }

        /* Proposal Section Styles */
        .proposal-block {
          background: linear-gradient(135deg, var(--background-secondary) 0%, var(--background-primary) 100%);
          padding: 48px;
          border-radius: 24px;
          border: 1px solid rgba(255, 154, 77, 0.1);
        }

        .stages-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 32px;
          margin-bottom: 48px;
        }

        .stage-card {
          background: var(--surface);
          border-radius: 16px;
          padding: 32px;
          box-shadow: 
            6px 6px 12px var(--shadow-dark),
            -2px -2px 8px var(--shadow-light);
        }

        .stage-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--grid-lines);
        }

        .stage-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 20px;
          letter-spacing: 0.08em;
          color: var(--text-primary);
          margin: 0;
          text-transform: uppercase;
        }

        .stage-duration {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          color: var(--gri-glow);
          padding: 4px 12px;
          background: rgba(255, 154, 77, 0.1);
          border-radius: 20px;
        }

        .stage-items {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .stage-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .stage-item-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--gri-glow);
          margin-top: 6px;
          flex-shrink: 0;
        }

        .stage-item-content {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .stage-item-name {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .stage-item-effect {
          font-family: 'PT Sans', sans-serif;
          font-size: 12px;
          color: var(--text-secondary);
        }

        .benefits-section {
          margin-top: 32px;
        }

        .benefits-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 18px;
          letter-spacing: 0.08em;
          color: var(--text-primary);
          text-align: center;
          margin: 0 0 24px 0;
          text-transform: uppercase;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        .benefit-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px;
          background: var(--surface);
          border-radius: 12px;
          box-shadow: 
            4px 4px 8px var(--shadow-dark),
            -1px -1px 4px var(--shadow-light);
        }

        .benefit-icon {
          color: var(--accent-green);
          filter: drop-shadow(0 0 8px rgba(74, 222, 128, 0.4));
          flex-shrink: 0;
        }

        .benefit-text {
          font-family: 'PT Sans', sans-serif;
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .pricing-comparison {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 40px;
          margin-bottom: 48px;
        }

        .pricing-card {
          padding: 40px;
          background: var(--surface);
          border-radius: 16px;
          box-shadow: 
            6px 6px 12px var(--shadow-dark),
            -2px -2px 8px var(--shadow-light);
        }

        .pricing-card.offer {
          background: linear-gradient(135deg, var(--surface) 0%, var(--surface-highlight) 100%);
          border: 2px solid var(--gri-glow);
          position: relative;
          box-shadow: 
            6px 6px 12px var(--shadow-dark),
            -2px -2px 8px var(--shadow-light),
            0 0 40px rgba(255, 154, 77, 0.3);
        }

        .pricing-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          padding: 6px 20px;
          background: var(--gri-glow);
          color: var(--background-primary);
          font-family: 'Bebas Neue', sans-serif;
          font-size: 13px;
          letter-spacing: 0.08em;
          border-radius: 20px;
          box-shadow: 0 0 20px var(--gri-glow);
        }

        .pricing-header h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 24px;
          letter-spacing: 0.08em;
          color: var(--text-primary);
          margin: 0 0 16px 0;
          text-align: center;
        }

        .pricing-range {
          font-family: 'JetBrains Mono', monospace;
          font-size: 28px;
          color: var(--text-secondary);
          text-align: center;
          margin: 0 0 24px 0;
        }

        .pricing-main {
          display: flex;
          justify-content: center;
          margin: 24px 0;
        }

        .nixie-price {
          transform: scale(0.9);
        }

        .savings {
          text-align: center;
          margin: 24px 0;
          padding: 16px;
          background: rgba(255, 154, 77, 0.1);
          border-radius: 8px;
        }

        .savings p {
          font-family: 'PT Sans', sans-serif;
          font-size: 16px;
          color: var(--text-primary);
          margin: 0;
        }

        .savings strong {
          color: var(--gri-glow);
          font-size: 20px;
        }

        .pricing-breakdown,
        .pricing-includes {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .pricing-breakdown li {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-secondary);
          padding-left: 20px;
          position: relative;
        }

        .pricing-breakdown li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--text-secondary);
        }

        .pricing-includes li {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .pricing-includes li svg {
          color: var(--gri-glow);
          flex-shrink: 0;
        }

        .pricing-details {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 32px;
        }

        .detail-card {
          padding: 32px;
          background: var(--surface);
          border-radius: 16px;
          text-align: center;
          box-shadow: 
            6px 6px 12px var(--shadow-dark),
            -2px -2px 8px var(--shadow-light);
        }

        .detail-card h4 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 18px;
          letter-spacing: 0.08em;
          color: var(--text-primary);
          margin: 0 0 24px 0;
          text-transform: uppercase;
        }

        .nixie-inline {
          display: flex;
          justify-content: center;
          margin: 24px 0;
        }

        .detail-card p {
          font-family: 'PT Sans', sans-serif;
          font-size: 13px;
          line-height: 1.6;
          color: var(--text-secondary);
          margin: 0;
        }

        .forecast-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 32px;
        }

        .forecast-card {
          padding: 32px;
          background: var(--surface);
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          box-shadow: 
            6px 6px 12px var(--shadow-dark),
            -2px -2px 8px var(--shadow-light);
        }

        .forecast-icon {
          color: #ffd7a8;
          filter: drop-shadow(0 0 8px #ffaa00) 
                  drop-shadow(0 0 16px #ff8800);
        }

        .nixie-forecast {
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .cta-block {
          text-align: center;
          padding: 64px 32px;
          background: linear-gradient(135deg, var(--surface) 0%, var(--surface-highlight) 100%);
          border: 1px solid rgba(255, 154, 77, 0.3);
          border-radius: 24px;
          box-shadow: 
            8px 8px 16px var(--shadow-dark),
            -3px -3px 12px var(--shadow-light);
        }

        /* CTA Title removed */

        .cta-text {
          font-family: 'PT Sans', sans-serif;
          font-size: 18px;
          line-height: 1.6;
          color: var(--text-secondary);
          margin: 0 0 40px 0;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-button {
          padding: 20px 48px;
          background: var(--gri-glow);
          border: none;
          border-radius: 12px;
          color: var(--background-primary);
          font-family: 'Bebas Neue', sans-serif;
          font-size: 20px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          box-shadow: 
            0 8px 24px rgba(255, 154, 77, 0.4),
            0 0 40px rgba(255, 154, 77, 0.3);
          transition: all 0.3s;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 
            0 12px 32px rgba(255, 154, 77, 0.5),
            0 0 60px rgba(255, 154, 77, 0.4);
        }

        .cta-button:active {
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .presentation-section {
            padding: 40px 16px;
          }
          
          .section-container {
            gap: 40px;
          }
          
          .block-title {
            font-size: 28px;
            margin-bottom: 24px;
          }
          
          .block-subtitle {
            font-size: 18px;
            margin-bottom: 20px;
          }
          
          .intro-text {
            font-size: 14px;
            line-height: 1.6;
          }
          
          .design-single {
            padding: 24px;
          }
          
          .design-single p {
            font-size: 14px;
            line-height: 1.6;
          }

          .features-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
          
          .feature-card {
            padding: 16px 12px;
            border-radius: 10px;
          }
          
          .feature-title {
            font-size: 12px;
          }
          
          .feature-description {
            font-size: 11px;
          }
          
          .audience-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          
          .audience-card {
            padding: 20px;
          }
          
          .proposal-block {
            padding: 20px;
            border-radius: 16px;
          }

          .stages-container {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          
          .stage-card {
            padding: 20px;
          }
          
          .stage-header {
            margin-bottom: 16px;
            padding-bottom: 12px;
          }
          
          .stage-title {
            font-size: 14px;
          }
          
          .stage-item {
            gap: 8px;
          }
          
          .stage-item-name {
            font-size: 12px;
          }
          
          .stage-item-effect {
            font-size: 10px;
          }
          
          .benefits-section {
            margin-top: 20px;
          }
          
          .benefits-title {
            font-size: 13px;
            margin-bottom: 16px;
          }

          .benefits-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }
          
          .benefit-item {
            padding: 12px;
            gap: 8px;
          }
          
          .benefit-text {
            font-size: 10px;
            line-height: 1.3;
          }
          
          .benefit-icon svg {
            width: 16px;
            height: 16px;
          }

          .pricing-comparison {
            grid-template-columns: 1fr;
            gap: 20px;
            margin-bottom: 20px;
          }
          
          .pricing-card {
            padding: 24px 20px;
          }
          
          .pricing-header h3 {
            font-size: 16px;
          }
          
          .pricing-range {
            font-size: 20px;
          }
          
          .savings p {
            font-size: 13px;
          }
          
          .pricing-details {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
          
          .detail-card {
            padding: 20px;
          }
          
          .detail-card h4 {
            font-size: 12px;
          }
          
          .detail-card p {
            font-size: 10px;
          }
          
          .cta-block {
            padding: 32px 20px;
            border-radius: 16px;
          }
          
          /* CTA title removed */
          
          .cta-text {
            font-size: 13px;
            margin-bottom: 20px;
          }
          
          .cta-button {
            padding: 14px 32px;
            font-size: 14px;
          }
        }
        
        @media (max-width: 480px) {
          .design-single {
            padding: 20px;
          }
          
          .design-single p {
            font-size: 13px;
          }
          
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
          }
          
          .feature-card {
            padding: 12px 8px;
          }
          
          .benefits-grid {
            grid-template-columns: 1fr;
          }
          
          .pricing-details {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
