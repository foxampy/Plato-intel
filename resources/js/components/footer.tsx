export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-column">
          <div className="footer-logo">
            <div className="footer-lamp">
              <svg viewBox="0 0 70 90" className="footer-lamp-svg">
                <defs>
                  <radialGradient id="footerFlame" cx="50%" cy="55%" r="45%">
                    <stop offset="0%" stopColor="#ffd7a8" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#ffaa00" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#ff6600" stopOpacity="0.3" />
                  </radialGradient>
                  <radialGradient id="footerMetalGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#ffcc66" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#cc4400" stopOpacity="0.6" />
                  </radialGradient>
                </defs>
                {/* Упрощенное основание */}
                <rect x="22" y="72" width="26" height="10" rx="2" fill="#5a5a5a" />
                <ellipse cx="35" cy="62" rx="14" ry="4" fill="#6a6a6a" />
                {/* Стеклянный плафон */}
                <path d="M18 62 Q18 20 35 15 Q52 20 52 62 Z" fill="url(#footerFlame)" />
                {/* Ободки */}
                <ellipse cx="35" cy="16" rx="16" ry="4" fill="#6a6a6a" />
                <ellipse cx="35" cy="62" rx="18" ry="4" fill="none" stroke="#5a5a5a" strokeWidth="2" />
                {/* Двигатель внутри - компактный */}
                <g transform="translate(35, 40)">
                  <rect x="-10" y="-8" width="20" height="16" rx="2" fill="url(#footerMetalGlow)" />
                  <rect x="-3" y="-14" width="6" height="10" rx="1" fill="#ffdd88" />
                  <circle cx="0" cy="8" r="4" fill="#ff9933" />
                  <line x1="-8" y1="-4" x2="-8" y2="4" stroke="#ffaa44" strokeWidth="1" />
                  <line x1="8" y1="-4" x2="8" y2="4" stroke="#ffaa44" strokeWidth="1" />
                </g>
                {/* Блик */}
                <ellipse cx="30" cy="28" rx="3" ry="4" fill="#ffffff" opacity="0.2" />
              </svg>
            </div>
            <div className="footer-logo-text">
              <span className="logo-text">PLATO-INTEL</span>
              <span className="logo-domain">.by</span>
            </div>
          </div>
          <p className="footer-description">
            Надёжный поставщик электротехнического оборудования для промышленности с 2003 года
          </p>
        </div>
        
        <div className="footer-column">
          <h4 className="footer-heading">КАТАЛОГ</h4>
          <ul className="footer-links">
            <li><a href="#" className="footer-link">Автоматические выключатели</a></li>
            <li><a href="#" className="footer-link">Магнитные пускатели</a></li>
            <li><a href="#" className="footer-link">Контакторы</a></li>
            <li><a href="#" className="footer-link">Гидротолкатели</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h4 className="footer-heading">УСЛУГИ</h4>
          <ul className="footer-links">
            <li><a href="#" className="footer-link">Подбор оборудования</a></li>
            <li><a href="#" className="footer-link">Доставка по РБ и СНГ</a></li>
            <li><a href="#" className="footer-link">Гарантийное обслуживание</a></li>
            <li><a href="#" className="footer-link">Техническая поддержка</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h4 className="footer-heading">КОНТАКТЫ</h4>
          <ul className="footer-links">
            <li className="footer-link">г. Минск, ул. Промышленная, 15</li>
            <li><a href="tel:+375291234567" className="footer-link">+375 (29) 123-45-67</a></li>
            <li><a href="mailto:info@plato-intel.by" className="footer-link">info@plato-intel.by</a></li>
            <li className="footer-link">Пн-Пт: 9:00 - 18:00</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-copyright">
            © 2003-2026 PLATO-INTEL.BY — Все права защищены
          </div>
        </div>
      </div>

      <style>{`
        .site-footer {
          background: var(--background-primary);
          border-top: 1px solid var(--grid-lines);
          position: relative;
        }

        .site-footer::before {
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

        .footer-container {
          position: relative;
          max-width: 1400px;
          margin: 0 auto;
          padding: 60px 5%;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 60px;
        }

        .footer-column {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }
        
        .footer-lamp {
          width: 32px;
          height: 42px;
          flex-shrink: 0;
          filter: drop-shadow(0 0 8px rgba(255, 154, 77, 0.3));
        }
        
        .footer-lamp-svg {
          width: 100%;
          height: 100%;
        }
        
        .footer-logo-text {
          display: flex;
          align-items: baseline;
          gap: 4px;
        }

        .logo-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 24px;
          letter-spacing: 0.1em;
          color: var(--text-primary);
        }

        .logo-domain {
          font-family: 'JetBrains Mono', monospace;
          font-size: 16px;
          color: var(--gri-glow);
        }

        .footer-description {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
        }

        .footer-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 14px;
          letter-spacing: 0.08em;
          color: var(--text-primary);
          text-transform: uppercase;
          margin: 0;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-link {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-secondary);
          text-decoration: none;
          line-height: 1.5;
          transition: color 0.3s;
        }

        a.footer-link:hover {
          color: var(--text-primary);
        }

        .footer-bottom {
          border-top: 1px solid var(--grid-lines);
          position: relative;
        }

        .footer-bottom .footer-container {
          padding: 24px 5%;
          display: block;
        }

        .footer-copyright {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          color: var(--text-secondary);
          text-align: center;
        }

        @media (max-width: 1024px) {
          .footer-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
          }
        }

        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: repeat(2, 1fr);
            padding: 32px 16px;
            gap: 24px;
          }
          
          .footer-logo {
            margin-bottom: 8px;
          }
          
          .footer-lamp {
            width: 24px;
            height: 32px;
          }
          
          .logo-text {
            font-size: 18px;
          }
          
          .logo-domain {
            font-size: 14px;
          }
          
          .footer-description {
            font-size: 11px;
          }
          
          .footer-heading {
            font-size: 11px;
            margin-bottom: 12px;
          }
          
          .footer-links {
            gap: 8px;
          }
          
          .footer-link {
            font-size: 12px;
          }

          .footer-bottom .footer-container {
            padding: 16px;
          }
          
          .footer-copyright {
            font-size: 10px;
          }
        }
        
        @media (max-width: 480px) {
          .footer-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }
      `}</style>
    </footer>
  );
}
