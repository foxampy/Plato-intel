import { NixieTubeAdvanced } from "./nixie-tube-advanced";
import { NeomorphButton } from "./neomorph-button";

export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="grid-overlay"></div>
      
      <div className="hero-container">
        <div className="left-module">
          <h1 className="hero-headline">
            ЭЛЕКТРОТЕХНИЧЕСКОЕ ОБОРУДОВАНИЕ ДЛЯ ПРОМЫШЛЕННОСТИ
          </h1>
          
          <p className="hero-subheadline">
            Реле, пускатели, контакторы, гидротолкатели — поставки по РБ и СНГ
          </p>
          
          <div className="gri-counters">
            <NixieTubeAdvanced value="20+" label="ЛЕТ НА РЫНКЕ" delay={200} />
            <NixieTubeAdvanced value="12" label="МЕСЯЦЕВ ГАРАНТИИ" delay={600} />
            <NixieTubeAdvanced value="340+" label="ЗАКРЫТЫХ ПРОЕКТОВ" delay={1000} />
          </div>
          
          <div className="cta-buttons">
            <NeomorphButton variant="primary">
              ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
            </NeomorphButton>
            <NeomorphButton variant="secondary">
              СКАЧАТЬ КАТАЛОГ
            </NeomorphButton>
          </div>
        </div>
        
        <div className="right-module">
          <div className="info-card">
            <h3 className="card-title">НУЖНА ПОМОЩЬ В ПОДБОРЕ?</h3>
            <p className="card-text">
              Наши инженеры подберут оборудование под ваши требования и помогут с техническими вопросами
            </p>
            <div className="card-stats">
              <div className="stat-item">
                <div className="stat-number nixie-style">24/7</div>
                <div className="stat-label">Поддержка</div>
              </div>
              <div className="stat-item">
                <div className="stat-number nixie-style">15 мин</div>
                <div className="stat-label">Ответ</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          padding: 100px 5%;
          background: var(--background-primary);
          overflow: hidden;
        }

        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(var(--grid-lines) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid-lines) 1px, transparent 1px);
          background-size: 8.333% 100%, 100% 8.333%;
          opacity: 0.4;
          pointer-events: none;
        }

        .hero-container {
          position: relative;
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 60% 40%;
          gap: 60px;
          align-items: center;
        }

        .left-module {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .hero-headline {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(36px, 5vw, 64px);
          letter-spacing: 0.08em;
          color: var(--text-primary);
          line-height: 1.2;
          text-transform: uppercase;
          margin: 0;
        }

        .hero-subheadline {
          font-family: 'PT Sans', sans-serif;
          font-size: 18px;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
        }

        .gri-counters {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 24px;
          margin-top: 16px;
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          margin-top: 16px;
        }

        .right-module {
          display: flex;
          flex-direction: column;
          gap: 48px;
          align-items: center;
        }

        .info-card {
          width: 100%;
          padding: 32px;
          background: var(--surface);
          border-radius: 16px;
          border: 1px solid rgba(255, 154, 77, 0.2);
          box-shadow: 
            6px 6px 12px var(--shadow-dark),
            -2px -2px 8px var(--shadow-light);
        }

        .card-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 24px;
          letter-spacing: 0.08em;
          color: var(--text-primary);
          margin: 0 0 16px 0;
          text-transform: uppercase;
        }

        .card-text {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          line-height: 1.6;
          color: var(--text-secondary);
          margin: 0 0 24px 0;
        }

        .card-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-family: 'JetBrains Mono', monospace;
          font-size: 28px;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .stat-number.nixie-style {
          font-family: 'Nixie One', cursive;
          color: #ffd7a8;
          text-shadow: 
            0 0 5px #ffaa00,
            0 0 10px #ff8800,
            0 0 15px #ff6600;
          animation: nixie-flicker 4s infinite;
        }

        @keyframes nixie-flicker {
          0%, 90%, 100% { opacity: 1; }
          93% { opacity: 0.9; }
          96% { opacity: 0.95; }
        }

        .stat-label {
          font-family: 'PT Sans', sans-serif;
          font-size: 12px;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .product-silhouette {
          width: 100%;
          max-width: 300px;
        }

        .silhouette-svg {
          width: 100%;
          height: auto;
        }

        .device-outline {
          animation: outline-pulse 4s infinite;
        }

        .indicator {
          animation: indicator-blink 2s infinite;
        }

        .indicator:nth-child(3) {
          animation-delay: 0.3s;
        }

        .indicator:nth-child(4) {
          animation-delay: 0.6s;
        }

        @keyframes outline-pulse {
          0%, 100% { opacity: 0.3; stroke: var(--gri-glow); }
          50% { opacity: 0.5; stroke: var(--gri-core); }
        }

        @keyframes indicator-blink {
          0%, 80%, 100% { opacity: 1; }
          85%, 95% { opacity: 0.3; }
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 80px;
          }
          
          .right-module {
            max-width: 500px;
            margin: 0 auto;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 80px 16px 40px;
            min-height: auto;
          }
          
          .hero-container {
            gap: 24px;
          }
          
          .left-module {
            gap: 16px;
          }
          
          .hero-headline {
            font-size: 28px;
            line-height: 1.1;
          }
          
          .hero-subheadline {
            font-size: 14px;
          }
          
          .gri-counters {
            grid-template-columns: repeat(3, 1fr);
            gap: 4px;
            margin-top: 8px;
          }
          
          .cta-buttons {
            flex-direction: row;
            gap: 12px;
            margin-top: 8px;
          }
          
          .cta-buttons button {
            flex: 1;
            font-size: 12px;
            padding: 12px 16px;
          }
          
          .right-module {
            gap: 16px;
          }
          
          .info-card {
            padding: 20px;
          }
          
          .card-title {
            font-size: 16px;
            margin-bottom: 12px;
          }
          
          .card-text {
            font-size: 13px;
            margin-bottom: 16px;
          }
          
          .card-stats {
            gap: 16px;
          }
          
          .stat-number {
            font-size: 20px;
          }
        }
        
        @media (max-width: 480px) {
          .hero-section {
            padding: 72px 12px 32px;
          }
          
          .hero-headline {
            font-size: 24px;
          }
          
          .gri-counters {
            grid-template-columns: repeat(3, 1fr);
            gap: 4px;
          }
          
          .cta-buttons {
            flex-direction: column;
          }
          
          .cta-buttons button {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}