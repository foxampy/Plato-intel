import { Construction, Zap, Factory, Cog, Building, Tractor } from "lucide-react";

const industries = [
  { icon: Construction, title: "Крановое оборудование", featured: true },
  { icon: Zap, title: "Энергетика", featured: false },
  { icon: Factory, title: "Металлургия", featured: false },
  { icon: Cog, title: "Машиностроение", featured: false },
  { icon: Building, title: "ЖКХ", featured: false },
  { icon: Tractor, title: "Агропром", featured: false }
];

export function SolutionsSection() {
  return (
    <section className="solutions-section">
      <div className="section-container">
        <h2 className="section-title">ОТРАСЛЕВЫЕ РЕШЕНИЯ</h2>
        
        <div className="solutions-grid">
          {industries.map((industry, idx) => {
            const Icon = industry.icon;
            return (
              <div 
                key={idx} 
                className={`solution-card ${industry.featured ? 'featured' : ''}`}
              >
                <div className="solution-icon">
                  <Icon size={40} />
                </div>
                <h3 className="solution-title">{industry.title}</h3>
                <div className="solution-glow"></div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .solutions-section {
          padding: 120px 5%;
          background: var(--background-secondary);
          position: relative;
        }

        .solutions-section::before {
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

        .section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(32px, 4vw, 48px);
          letter-spacing: 0.08em;
          color: var(--text-primary);
          text-align: center;
          margin: 0 0 64px 0;
          text-transform: uppercase;
        }

        .solutions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 32px;
        }

        .solution-card {
          position: relative;
          padding: 32px 24px;
          background: var(--surface);
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 16px;
          min-height: 200px;
          box-shadow: 
            6px 6px 12px var(--shadow-dark),
            -2px -2px 8px var(--shadow-light);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }

        .solution-card.featured {
          grid-column: span 2;
          grid-row: span 2;
          min-height: 400px;
        }

        .solution-card:hover {
          transform: translateY(-4px);
          box-shadow: 
            8px 8px 16px var(--shadow-dark),
            -3px -3px 12px var(--shadow-light);
        }

        .solution-card:hover .solution-glow {
          opacity: 1;
        }

        .solution-card:hover .solution-icon {
          color: var(--gri-glow);
          transform: scale(1.1);
        }

        .solution-icon {
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--background-primary);
          border-radius: 12px;
          box-shadow: inset 4px 4px 8px rgba(0,0,0,0.4);
          margin-bottom: 20px;
          color: #ffd7a8;
          filter: drop-shadow(0 0 8px #ffaa00) 
                  drop-shadow(0 0 16px #ff8800) 
                  drop-shadow(0 0 24px #ff6600);
          transition: all 0.3s;
        }

        .solution-card:hover .solution-icon {
          filter: drop-shadow(0 0 12px #ffaa00) 
                  drop-shadow(0 0 24px #ff8800) 
                  drop-shadow(0 0 36px #ff6600)
                  drop-shadow(0 0 48px #ff4400);
          animation: icon-pulse-glow 0.6s;
        }

        @keyframes icon-pulse-glow {
          0%, 100% { 
            transform: scale(1);
            opacity: 1;
          }
          50% { 
            transform: scale(1.05);
            opacity: 0.95;
          }
        }

        .solution-title {
          font-family: 'PT Sans', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: var(--text-primary);
          text-align: center;
          margin: 0;
          position: relative;
          z-index: 2;
        }

        .solution-card.featured .solution-title {
          font-size: 24px;
        }

        .solution-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at center,
            rgba(255, 154, 77, 0.2) 0%,
            transparent 70%
          );
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
        }

        @media (max-width: 1024px) {
          .solutions-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .solution-card.featured {
            grid-column: span 2;
            grid-row: span 1;
            min-height: 250px;
          }
        }

        @media (max-width: 768px) {
          .solutions-section {
            padding: 40px 16px;
          }
          
          .section-title {
            font-size: 24px;
            margin-bottom: 32px;
          }

          .solutions-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
          
          .solution-card {
            padding: 20px 12px;
            min-height: auto;
            border-radius: 10px;
          }
          
          .solution-icon {
            width: 48px;
            height: 48px;
            margin-bottom: 8px;
          }
          
          .solution-icon svg {
            width: 24px;
            height: 24px;
          }

          .solution-card.featured {
            grid-column: span 2;
            grid-row: span 1;
            min-height: auto;
            padding: 24px;
          }
          
          .solution-title {
            font-size: 12px;
          }
          
          .solution-card.featured .solution-title {
            font-size: 14px;
          }
        }
        
        @media (max-width: 480px) {
          .solutions-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
          }
          
          .solution-card {
            padding: 16px 8px;
          }
          
          .solution-icon {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </section>
  );
}