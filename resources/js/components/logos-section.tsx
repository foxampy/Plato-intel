import { useEffect, useRef } from "react";

const manufacturers = [
  { name: "ABB", featured: true },
  { name: "SCHNEIDER", featured: true },
  { name: "SIEMENS", featured: true },
  { name: "LEGRAND", featured: false },
  { name: "EATON", featured: true },
  { name: "CHINT", featured: false },
  { name: "IEK", featured: false },
  { name: "TDM", featured: false },
  { name: "EKF", featured: true },
  { name: "КЭАЗ", featured: false },
  { name: "КОНТАКТОР", featured: false },
  { name: "ЭТАЛ", featured: false }
];

export function LogosSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPos = 0;
    const scrollSpeed = 0.5;

    const animate = () => {
      scrollPos += scrollSpeed;
      if (scrollPos >= scrollContainer.scrollWidth / 2) {
        scrollPos = 0;
      }
      scrollContainer.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Дублируем массив для бесконечной прокрутки
  const allManufacturers = [...manufacturers, ...manufacturers];

  return (
    <section className="logos-section">
      <div className="section-container">
        <h2 className="section-title">ПРОИЗВОДИТЕЛИ С КОТОРЫМИ МЫ РАБОТАЕМ</h2>
        
        <div className="logos-carousel-container">
          <div className="logos-carousel" ref={scrollRef}>
            {allManufacturers.map((manufacturer, idx) => (
              <div 
                key={idx} 
                className={`manufacturer-card ${manufacturer.featured ? 'featured' : ''}`}
              >
                <span className={`manufacturer-name ${manufacturer.featured ? 'nixie-glow' : ''}`}>
                  {manufacturer.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .logos-section {
          padding: 60px 0;
          background: var(--background-primary);
          position: relative;
          overflow: hidden;
        }

        .logos-section::before {
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
          padding: 0 5%;
        }

        .section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(24px, 3vw, 32px);
          letter-spacing: 0.08em;
          color: var(--text-primary);
          text-align: center;
          margin: 0 0 32px 0;
          text-transform: uppercase;
        }

        .logos-carousel-container {
          position: relative;
          overflow: hidden;
        }

        .logos-carousel-container::before,
        .logos-carousel-container::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 80px;
          z-index: 2;
          pointer-events: none;
        }

        .logos-carousel-container::before {
          left: 0;
          background: linear-gradient(to right, var(--background-primary), transparent);
        }

        .logos-carousel-container::after {
          right: 0;
          background: linear-gradient(to left, var(--background-primary), transparent);
        }

        .logos-carousel {
          display: flex;
          gap: 16px;
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding: 8px 0;
        }

        .logos-carousel::-webkit-scrollbar {
          display: none;
        }

        .manufacturer-card {
          flex-shrink: 0;
          padding: 16px 24px;
          background: var(--surface);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 120px;
          box-shadow: 
            4px 4px 8px var(--shadow-dark),
            -1px -1px 4px var(--shadow-light);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid transparent;
        }

        .manufacturer-card:hover {
          transform: translateY(-2px);
          box-shadow: 
            6px 6px 12px var(--shadow-dark),
            -2px -2px 6px var(--shadow-light);
          border-color: rgba(255, 154, 77, 0.3);
        }

        .manufacturer-card.featured {
          border: 1px solid rgba(255, 154, 77, 0.3);
          background: linear-gradient(135deg, var(--surface) 0%, var(--surface-highlight) 100%);
        }

        .manufacturer-card.featured:hover {
          border-color: rgba(255, 154, 77, 0.6);
          box-shadow: 
            6px 6px 12px var(--shadow-dark),
            -2px -2px 6px var(--shadow-light),
            0 0 20px rgba(255, 154, 77, 0.2);
        }

        .manufacturer-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 14px;
          letter-spacing: 0.12em;
          color: var(--text-primary);
          text-align: center;
          white-space: nowrap;
        }

        .manufacturer-name.nixie-glow {
          font-family: 'Nixie One', cursive;
          color: #ffd7a8;
          text-shadow: 
            0 0 5px #ffaa00,
            0 0 10px #ff8800;
        }

        .manufacturer-card:hover .manufacturer-name.nixie-glow {
          text-shadow: 
            0 0 8px #ffaa00,
            0 0 15px #ff8800,
            0 0 20px #ff6600;
        }

        @media (max-width: 768px) {
          .logos-section {
            padding: 40px 0;
          }

          .section-container {
            padding: 0 16px;
          }

          .section-title {
            font-size: 18px;
            margin-bottom: 24px;
          }

          .manufacturer-card {
            padding: 12px 16px;
            min-width: 100px;
          }

          .manufacturer-name {
            font-size: 12px;
          }

          .logos-carousel-container::before,
          .logos-carousel-container::after {
            width: 40px;
          }
        }
      `}</style>
    </section>
  );
}
