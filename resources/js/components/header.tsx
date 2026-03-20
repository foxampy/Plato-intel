import { useState } from "react";
import { Phone, Info, Menu, X } from "lucide-react";

type Page = "home" | "about" | "catalog" | "delivery" | "payment" | "contacts";

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onOpenInfo: (title: string, description: string) => void;
}

const navItems: { id: Page; label: string }[] = [
  { id: "home", label: "ГЛАВНАЯ" },
  { id: "about", label: "О КОМПАНИИ" },
  { id: "catalog", label: "КАТАЛОГ" },
  { id: "delivery", label: "ДОСТАВКА" },
  { id: "payment", label: "ОПЛАТА" },
  { id: "contacts", label: "КОНТАКТЫ" },
];

export function Header({ currentPage, onNavigate, onOpenInfo }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo-module">
          <div className="logo" onClick={() => handleNavigate("home")} style={{ cursor: "pointer" }}>
            <div className="logo-lamp">
              <svg viewBox="0 0 70 90" className="lamp-svg">
                <defs>
                  {/* Основное свечение пламени */}
                  <radialGradient id="flameCore" cx="50%" cy="55%" r="45%">
                    <stop offset="0%" stopColor="#fff5e6" stopOpacity="1" />
                    <stop offset="20%" stopColor="#ffd7a8" stopOpacity="0.95" />
                    <stop offset="50%" stopColor="#ffaa00" stopOpacity="0.8" />
                    <stop offset="80%" stopColor="#ff6600" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#ff4400" stopOpacity="0.2" />
                  </radialGradient>
                  {/* Свечение накала металла */}
                  <radialGradient id="metalGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#ffdd88" stopOpacity="1" />
                    <stop offset="40%" stopColor="#ff9933" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#cc4400" stopOpacity="0.6" />
                  </radialGradient>
                  {/* Блик стекла */}
                  <linearGradient id="glassShine" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#ffffff" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.2" />
                  </linearGradient>
                  {/* Фильтр свечения - уменьшен */}
                  <filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  {/* Фильтр для металлических частей */}
                  <filter id="metalShadow">
                    <feDropShadow dx="1" dy="2" stdDeviation="1" floodColor="#000" floodOpacity="0.5"/>
                  </filter>
                </defs>
                
                {/* Основание лампы - металлическое (чугунное) */}
                <path d="M20 72 L22 82 L48 82 L50 72 Z" fill="#4a4a4a" filter="url(#metalShadow)" />
                <rect x="18" y="68" width="34" height="8" rx="2" fill="#5a5a5a" filter="url(#metalShadow)" />
                {/* Ребра жесткости на основании */}
                <line x1="25" y1="68" x2="24" y2="82" stroke="#3a3a3a" strokeWidth="1.5" />
                <line x1="35" y1="68" x2="35" y2="82" stroke="#3a3a3a" strokeWidth="1.5" />
                <line x1="45" y1="68" x2="46" y2="82" stroke="#3a3a3a" strokeWidth="1.5" />
                
                {/* Корпус/держатель лампы */}
                <path d="M23 62 L25 68 L45 68 L47 62 Z" fill="#6a6a6a" filter="url(#metalShadow)" />
                <ellipse cx="35" cy="62" rx="14" ry="4" fill="#7a7a7a" />
                
                {/* Стеклянный плафон - внешний контур */}
                <path d="M15 62 Q15 15 35 10 Q55 15 55 62 Z" fill="url(#flameCore)" opacity="0.9" />
                <path d="M15 62 Q15 15 35 10 Q55 15 55 62 Z" fill="url(#glassShine)" />
                
                {/* Ободок плафона сверху */}
                <ellipse cx="35" cy="14" rx="18" ry="5" fill="none" stroke="#5a5a5a" strokeWidth="2" />
                <ellipse cx="35" cy="14" rx="16" ry="4" fill="#6a6a6a" />
                
                {/* Ободок плафона снизу */}
                <ellipse cx="35" cy="62" rx="20" ry="5" fill="none" stroke="#5a5a5a" strokeWidth="2" />
                
                {/* ГОРЯЩИЙ ДВИГАТЕЛЬ ВНУТРИ */}
                <g transform="translate(35, 38)" filter="url(#glowFilter)">
                  {/* Корпус двигателя - накаленный */}
                  <rect x="-12" y="-10" width="24" height="20" rx="3" fill="url(#metalGlow)" />
                  
                  {/* Поршень - накаленный */}
                  <rect x="-4" y="-16" width="8" height="12" rx="1" fill="#ffdd88" />
                  <rect x="-6" y="-8" width="12" height="4" rx="1" fill="#ffaa44" />
                  
                  {/* Шатун */}
                  <line x1="0" y1="-4" x2="0" y2="8" stroke="#ffcc66" strokeWidth="3" strokeLinecap="round" />
                  
                  {/* Коленвал */}
                  <circle cx="0" cy="10" r="5" fill="#ff9933" />
                  <circle cx="0" cy="10" r="2" fill="#663311" />
                  
                  {/* Цилиндр - детали */}
                  <rect x="-10" y="-8" width="20" height="2" fill="#ff8800" opacity="0.8" />
                  <rect x="-10" y="2" width="20" height="2" fill="#ff8800" opacity="0.8" />
                  
                  {/* Ребра охлаждения двигателя */}
                  <line x1="-14" y1="-6" x2="-14" y2="6" stroke="#ffaa44" strokeWidth="1.5" />
                  <line x1="14" y1="-6" x2="14" y2="6" stroke="#ffaa44" strokeWidth="1.5" />
                  <line x1="-12" y1="-4" x2="-12" y2="4" stroke="#ff9933" strokeWidth="1" />
                  <line x1="12" y1="-4" x2="12" y2="4" stroke="#ff9933" strokeWidth="1" />
                </g>
                
                {/* Эффект пульсации пламени - внешнее свечение */}
                <ellipse cx="35" cy="38" rx="18" ry="22" fill="none" stroke="#ffaa00" strokeWidth="0.5" opacity="0.3">
                  <animate attributeName="opacity" values="0.3;0.4;0.3" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="rx" values="18;19;18" dur="2s" repeatCount="indefinite" />
                </ellipse>
                
                {/* Блики на стекле */}
                <ellipse cx="28" cy="25" rx="4" ry="6" fill="#ffffff" opacity="0.3" transform="rotate(-20 28 25)" />
                <circle cx="45" cy="45" r="2" fill="#ffffff" opacity="0.2" />
                
                {/* Крепежные болты на основании */}
                <circle cx="22" cy="75" r="1.5" fill="#333" />
                <circle cx="48" cy="75" r="1.5" fill="#333" />
              </svg>
            </div>
            <div className="logo-text-container">
              <span className="logo-text">PLATO</span>
              <span className="logo-separator">-</span>
              <span className="logo-subtext">INTEL</span>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="main-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${currentPage === item.id ? "active" : ""}`}
              onClick={() => onNavigate(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="contacts-module">
          <button 
            className="info-button"
            onClick={() => onOpenInfo("Навигация", "Используйте меню для перехода по разделам сайта. Каждый раздел содержит подробную информацию о наших продуктах и услугах.")}
            title="Информация"
          >
            <Info size={20} />
          </button>
          <a href="tel:+375296155672" className="phone-link">
            +375 (29) 615-56-72
          </a>
          <button className="call-button">
            <Phone size={18} />
            <span>ЗВОНОК</span>
          </button>
          
          {/* Burger Menu Button */}
          <button 
            className="burger-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`mobile-nav-link ${currentPage === item.id ? "active" : ""}`}
              onClick={() => handleNavigate(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="mobile-contacts">
          <a href="tel:+375296155672" className="mobile-phone">
            +375 (29) 615-56-72
          </a>
        </div>
      </div>

      <style>{`
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          background: var(--background-secondary);
          box-shadow:
            4px 4px 12px var(--shadow-dark),
            -2px -2px 8px var(--shadow-light);
          z-index: 1000;
          transition: all 0.3s;
        }

        .header-container {
          max-width: 1400px;
          margin: 0 auto;
          height: 100%;
          padding: 0 5%;
          display: grid;
          grid-template-columns: 280px 1fr 320px;
          gap: 40px;
          align-items: center;
        }

        .logo-module {
          display: flex;
          align-items: center;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo-lamp {
          width: 55px;
          height: 75px;
          flex-shrink: 0;
          filter: drop-shadow(0 0 6px rgba(255, 154, 77, 0.25));
        }

        .lamp-svg {
          width: 100%;
          height: 100%;
          animation: lamp-flicker 4s infinite ease-in-out;
        }

        /* Анимация мерцания пламени газовой лампы - уменьшенная интенсивность */
        @keyframes lamp-flicker {
          0%, 100% {
            filter: drop-shadow(0 0 4px #ffaa00) drop-shadow(0 0 8px #ff8800);
          }
          25% {
            filter: drop-shadow(0 0 5px #ffaa00) drop-shadow(0 0 10px #ff8800);
          }
          50% {
            filter: drop-shadow(0 0 6px #ffaa00) drop-shadow(0 0 12px #ff8800);
          }
          75% {
            filter: drop-shadow(0 0 5px #ffaa00) drop-shadow(0 0 10px #ff8800);
          }
        }

        .logo-text-container {
          display: flex;
          align-items: baseline;
          gap: 2px;
        }

        .logo-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 32px;
          letter-spacing: 0.1em;
          color: var(--text-primary);
        }

        .logo-separator {
          font-family: 'JetBrains Mono', monospace;
          font-size: 20px;
          color: var(--gri-glow);
        }

        .logo-subtext {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 24px;
          letter-spacing: 0.12em;
          color: var(--gri-glow);
        }

        .main-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          flex-wrap: wrap;
        }

        .nav-link {
          padding: 8px 12px;
          background: transparent;
          border: none;
          border-radius: 6px;
          color: var(--text-secondary);
          font-family: 'Bebas Neue', sans-serif;
          font-size: 12px;
          letter-spacing: 0.06em;
          cursor: pointer;
          transition: all 0.3s;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .nav-link:hover {
          color: var(--text-primary);
          background: rgba(255, 154, 77, 0.1);
        }

        .nav-link.active {
          color: var(--gri-glow);
          background: rgba(255, 154, 77, 0.15);
          box-shadow: 0 0 8px rgba(255, 154, 77, 0.2);
        }

        .contacts-module {
          display: flex;
          align-items: center;
          gap: 12px;
          justify-content: flex-end;
        }

        .info-button {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--surface);
          border: 1px solid var(--grid-lines);
          border-radius: 8px;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.3s;
        }

        .info-button:hover {
          color: var(--gri-glow);
          border-color: var(--gri-glow);
          box-shadow: 0 0 12px rgba(255, 154, 77, 0.3);
        }

        .phone-link {
          font-family: 'JetBrains Mono', monospace;
          font-size: 14px;
          color: var(--text-primary);
          text-decoration: none;
          transition: color 0.3s;
        }

        .phone-link:hover {
          color: var(--gri-glow);
        }

        .call-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: linear-gradient(135deg, var(--surface) 0%, var(--surface-highlight) 100%);
          border: none;
          border-radius: 8px;
          color: var(--accent-green);
          font-family: 'Bebas Neue', sans-serif;
          font-size: 14px;
          letter-spacing: 0.08em;
          cursor: pointer;
          box-shadow:
            3px 3px 6px var(--shadow-dark),
            -1px -1px 4px var(--shadow-light);
          transition: all 0.3s;
        }

        .call-button:hover {
          box-shadow:
            2px 2px 4px var(--shadow-dark),
            -1px -1px 3px var(--shadow-light),
            0 0 15px rgba(74, 222, 128, 0.3);
        }

        .call-button:active {
          box-shadow:
            inset 2px 2px 4px rgba(0,0,0,0.3),
            inset -1px -1px 3px rgba(255,255,255,0.02);
        }

        .burger-button {
          display: none;
          width: 44px;
          height: 44px;
          align-items: center;
          justify-content: center;
          background: var(--surface);
          border: 1px solid var(--grid-lines);
          border-radius: 8px;
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.3s;
        }

        .burger-button:hover {
          border-color: var(--gri-glow);
          color: var(--gri-glow);
        }

        /* Mobile Menu */
        .mobile-menu {
          display: none;
          position: absolute;
          top: 80px;
          left: 0;
          right: 0;
          background: var(--background-secondary);
          padding: 20px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.3);
          transform: translateY(-100%);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          z-index: 999;
        }

        .mobile-menu.open {
          transform: translateY(0);
          opacity: 1;
          visibility: visible;
        }

        .mobile-nav {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .mobile-nav-link {
          padding: 16px 20px;
          background: var(--surface);
          border: 1px solid var(--grid-lines);
          border-radius: 8px;
          color: var(--text-secondary);
          font-family: 'Bebas Neue', sans-serif;
          font-size: 14px;
          letter-spacing: 0.08em;
          cursor: pointer;
          transition: all 0.3s;
          text-align: left;
          text-transform: uppercase;
        }

        .mobile-nav-link:hover {
          background: rgba(255, 154, 77, 0.1);
          color: var(--text-primary);
        }

        .mobile-nav-link.active {
          background: rgba(255, 154, 77, 0.15);
          color: var(--gri-glow);
          border-color: var(--gri-glow);
        }

        .mobile-contacts {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid var(--grid-lines);
        }

        .mobile-phone {
          display: block;
          padding: 16px;
          background: var(--surface);
          border-radius: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 16px;
          color: var(--gri-glow);
          text-align: center;
          text-decoration: none;
        }

        @media (max-width: 1200px) {
          .header-container {
            grid-template-columns: 240px 1fr auto;
            gap: 20px;
          }

          .nav-link {
            font-size: 11px;
            padding: 6px 10px;
          }
        }

        @media (max-width: 968px) {
          .header-container {
            grid-template-columns: 1fr auto;
            gap: 12px;
          }

          .main-nav {
            display: none;
          }

          .burger-button {
            display: flex;
          }

          .mobile-menu {
            display: block;
          }
        }

        @media (max-width: 768px) {
          .site-header {
            height: 56px;
          }
          
          .header-container {
            padding: 0 16px;
            gap: 8px;
          }

          .mobile-menu {
            top: 56px;
          }

          .logo-lamp {
            width: 38px;
            height: 52px;
          }
          
          .logo-text-container {
            gap: 1px;
          }

          .logo-text {
            font-size: 20px;
          }
          
          .logo-separator {
            font-size: 14px;
          }

          .logo-subtext {
            font-size: 14px;
          }
          
          .info-button {
            width: 36px;
            height: 36px;
          }
          
          .info-button svg {
            width: 18px;
            height: 18px;
          }

          .phone-link {
            display: none;
          }

          .call-button {
            padding: 8px 12px;
          }
          
          .call-button span {
            display: none;
          }
          
          .call-button svg {
            width: 18px;
            height: 18px;
          }

          .burger-button {
            width: 36px;
            height: 36px;
          }

          .burger-button svg {
            width: 20px;
            height: 20px;
          }
        }
      `}</style>
    </header>
  );
}
