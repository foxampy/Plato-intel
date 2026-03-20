export function LogoVariantsSection() {
  const logoVariants = [
    {
      id: 1,
      title: "ОСНОВНОЙ ЛОГОТИП",
      subtitle: "Классическая лампа накаливания",
      primary: true
    },
    {
      id: 2,
      title: "МИНИМАЛИСТИЧНЫЙ",
      subtitle: "Только контур лампы",
      primary: false
    },
    {
      id: 3,
      title: "ВИНТАЖНЫЙ",
      subtitle: "Стиль старых ламп Эдисона",
      primary: false
    },
    {
      id: 4,
      title: "ИКОНКА",
      subtitle: "Для фавикона и соцсетей",
      primary: false
    },
    {
      id: 5,
      title: "С ПОДПИСЬЮ",
      subtitle: "Лампа с названием компании",
      primary: false
    },
    {
      id: 6,
      title: "ВЕРТИКАЛЬНЫЙ",
      subtitle: "Для баннеров и бланков",
      primary: false
    }
  ];

  return (
    <section className="logo-variants-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">ВАРИАНТЫ ЛОГОТИПА</h2>
          <p className="section-description">
            Концепция логотипов в стиле винтажных ламп накаливания — символ энергии, света и инноваций
          </p>
        </div>

        <div className="logo-grid">
          {logoVariants.map((variant, idx) => (
            <div
              key={variant.id}
              className={`logo-variant-card ${variant.primary ? 'primary' : ''}`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="logo-display">
                <div className="logo-placeholder">
                  {variant.id === 1 && (
                    <svg viewBox="0 0 200 280" className="logo-svg bulb-primary">
                      <defs>
                        <radialGradient id="bulb1Glow" cx="50%" cy="35%" r="50%">
                          <stop offset="0%" stopColor="#ffd7a8" stopOpacity="0.95" />
                          <stop offset="40%" stopColor="#ffaa00" stopOpacity="0.7" />
                          <stop offset="100%" stopColor="#ff6600" stopOpacity="0.15" />
                        </radialGradient>
                        <filter id="bulb1Blur">
                          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                          <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>
                      {/* Glass bulb */}
                      <ellipse cx="100" cy="110" rx="70" ry="85" fill="url(#bulb1Glow)" filter="url(#bulb1Blur)" />
                      {/* Filament - vintage style */}
                      <path d="M75 110 Q80 70 90 60 Q100 50 110 60 Q120 70 125 110" stroke="#ff8800" strokeWidth="2.5" fill="none" opacity="0.9" />
                      <path d="M80 110 Q85 75 93 68" stroke="#ffaa00" strokeWidth="1.5" fill="none" opacity="0.7" />
                      <path d="M120 110 Q115 75 107 68" stroke="#ffaa00" strokeWidth="1.5" fill="none" opacity="0.7" />
                      {/* Support wires */}
                      <line x1="90" y1="60" x2="90" y2="140" stroke="#cc8800" strokeWidth="1.5" opacity="0.6" />
                      <line x1="110" y1="60" x2="110" y2="140" stroke="#cc8800" strokeWidth="1.5" opacity="0.6" />
                      {/* Base */}
                      <rect x="85" y="190" width="30" height="35" fill="#8B7355" rx="2" />
                      <rect x="82" y="220" width="36" height="8" fill="#6B5344" rx="1" />
                      {/* Contact */}
                      <ellipse cx="100" cy="232" rx="8" ry="4" fill="#4a3a2a" />
                      {/* Text */}
                      <text x="100" y="265" textAnchor="middle" fontFamily="Bebas Neue" fontSize="28" fill="#ffd7a8" letterSpacing="4">PLATO</text>
                      <text x="100" y="280" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill="#ff9a4d" letterSpacing="2">INTEL</text>
                    </svg>
                  )}

                  {variant.id === 2 && (
                    <svg viewBox="0 0 200 280" className="logo-svg bulb-minimal">
                      {/* Outline only */}
                      <ellipse cx="100" cy="110" rx="70" ry="85" fill="none" stroke="#ffd7a8" strokeWidth="2" opacity="0.8" />
                      <path d="M75 110 Q80 70 90 60 Q100 50 110 60 Q120 70 125 110" stroke="#ffaa00" strokeWidth="1.5" fill="none" opacity="0.6" />
                      <rect x="85" y="190" width="30" height="35" fill="none" stroke="#ffd7a8" strokeWidth="2" opacity="0.8" rx="2" />
                      <rect x="82" y="220" width="36" height="8" fill="none" stroke="#ffd7a8" strokeWidth="2" opacity="0.8" rx="1" />
                      <text x="100" y="265" textAnchor="middle" fontFamily="Bebas Neue" fontSize="28" fill="#e0e0e0" letterSpacing="4">PLATO</text>
                    </svg>
                  )}

                  {variant.id === 3 && (
                    <svg viewBox="0 0 200 280" className="logo-svg bulb-vintage">
                      <defs>
                        <radialGradient id="bulb3Glow" cx="50%" cy="40%" r="50%">
                          <stop offset="0%" stopColor="#ffcc88" stopOpacity="0.9" />
                          <stop offset="50%" stopColor="#ff9944" stopOpacity="0.6" />
                          <stop offset="100%" stopColor="#cc6600" stopOpacity="0.2" />
                        </radialGradient>
                      </defs>
                      {/* Edison style bulb */}
                      <ellipse cx="100" cy="110" rx="70" ry="85" fill="url(#bulb3Glow)" opacity="0.8" />
                      {/* Edison filament - decorative */}
                      <path d="M70 100 L80 80 L90 100 L100 70 L110 100 L120 80 L130 100" stroke="#ff8800" strokeWidth="2" fill="none" opacity="0.8" />
                      <line x1="80" y1="80" x2="80" y2="140" stroke="#cc8800" strokeWidth="1" opacity="0.5" />
                      <line x1="120" y1="80" x2="120" y2="140" stroke="#cc8800" strokeWidth="1" opacity="0.5" />
                      {/* Brass base */}
                      <rect x="85" y="190" width="30" height="35" fill="#B8860B" rx="2" />
                      <rect x="82" y="220" width="36" height="8" fill="#8B6914" rx="1" />
                      <ellipse cx="100" cy="232" rx="8" ry="4" fill="#4a3a2a" />
                      <text x="100" y="265" textAnchor="middle" fontFamily="Bebas Neue" fontSize="28" fill="#B8860B" letterSpacing="4">PLATO</text>
                    </svg>
                  )}

                  {variant.id === 4 && (
                    <svg viewBox="0 0 100 120" className="logo-svg bulb-icon">
                      <defs>
                        <radialGradient id="bulb4Glow" cx="50%" cy="40%" r="50%">
                          <stop offset="0%" stopColor="#ffd7a8" stopOpacity="0.95" />
                          <stop offset="100%" stopColor="#ff6600" stopOpacity="0.2" />
                        </radialGradient>
                      </defs>
                      <ellipse cx="50" cy="50" rx="35" ry="42" fill="url(#bulb4Glow)" />
                      <path d="M35 50 Q40 25 50 20 Q60 25 65 50" stroke="#ffaa00" strokeWidth="2" fill="none" opacity="0.8" />
                      <rect x="42" y="90" width="16" height="18" fill="#8B7355" rx="1" />
                      <rect x="40" y="105" width="20" height="5" fill="#6B5344" rx="0.5" />
                    </svg>
                  )}

                  {variant.id === 5 && (
                    <svg viewBox="0 0 240 200" className="logo-svg bulb-signed">
                      <defs>
                        <radialGradient id="bulb5Glow" cx="50%" cy="40%" r="50%">
                          <stop offset="0%" stopColor="#ffd7a8" stopOpacity="0.9" />
                          <stop offset="100%" stopColor="#ff6600" stopOpacity="0.15" />
                        </radialGradient>
                      </defs>
                      <ellipse cx="70" cy="80" rx="55" ry="65" fill="url(#bulb5Glow)" />
                      <path d="M50 80 Q55 50 62 42 Q70 35 78 42 Q85 50 90 80" stroke="#ff8800" strokeWidth="2" fill="none" opacity="0.8" />
                      <rect x="58" y="140" width="24" height="28" fill="#8B7355" rx="2" />
                      <rect x="55" y="165" width="30" height="7" fill="#6B5344" rx="1" />
                      <text x="140" y="85" fontFamily="Bebas Neue" fontSize="42" fill="#ffd7a8" letterSpacing="2">PLATO</text>
                      <text x="140" y="115" fontFamily="JetBrains Mono" fontSize="14" fill="#ff9a4d" letterSpacing="3">INTEL</text>
                      <text x="140" y="145" fontFamily="PT Sans" fontSize="12" fill="#888">Электротехника</text>
                    </svg>
                  )}

                  {variant.id === 6 && (
                    <svg viewBox="0 0 140 320" className="logo-svg bulb-vertical">
                      <defs>
                        <radialGradient id="bulb6Glow" cx="50%" cy="35%" r="50%">
                          <stop offset="0%" stopColor="#ffd7a8" stopOpacity="0.95" />
                          <stop offset="100%" stopColor="#ff6600" stopOpacity="0.15" />
                        </radialGradient>
                      </defs>
                      <ellipse cx="70" cy="90" rx="55" ry="68" fill="url(#bulb6Glow)" />
                      <path d="M50 90 Q55 55 62 48 Q70 40 78 48 Q85 55 90 90" stroke="#ff8800" strokeWidth="2" fill="none" opacity="0.8" />
                      <line x1="62" y1="48" x2="62" y2="120" stroke="#cc8800" strokeWidth="1" opacity="0.5" />
                      <line x1="78" y1="48" x2="78" y2="120" stroke="#cc8800" strokeWidth="1" opacity="0.5" />
                      <rect x="58" y="155" width="24" height="30" fill="#8B7355" rx="2" />
                      <rect x="55" y="182" width="30" height="8" fill="#6B5344" rx="1" />
                      <ellipse cx="70" cy="194" rx="6" ry="3" fill="#4a3a2a" />
                      <text x="70" y="235" textAnchor="middle" fontFamily="Bebas Neue" fontSize="32" fill="#ffd7a8" letterSpacing="3">PLATO</text>
                      <text x="70" y="255" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="11" fill="#ff9a4d" letterSpacing="2">INTEL</text>
                      <text x="70" y="285" textAnchor="middle" fontFamily="PT Sans" fontSize="10" fill="#888" letterSpacing="1">ЭЛЕКТРОТЕХНИКА</text>
                    </svg>
                  )}
                </div>

                {variant.primary && (
                  <div className="primary-badge">
                    <span>ОСНОВНОЙ</span>
                  </div>
                )}
              </div>

              <div className="variant-info">
                <h3 className="variant-title">{variant.title}</h3>
                <p className="variant-subtitle">{variant.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="download-section">
          <button className="download-button">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 14L5 9H8V3H12V9H15L10 14Z" fill="currentColor"/>
              <path d="M17 15V17H3V15H1V17C1 18.1 1.9 19 3 19H17C18.1 19 19 18.1 19 17V15H17Z" fill="currentColor"/>
            </svg>
            <span>СКАЧАТЬ БРЕНДБУК</span>
          </button>
        </div>
      </div>

      <style>{`
        .logo-variants-section {
          padding: 120px 5%;
          background: var(--background-secondary);
          position: relative;
          overflow: hidden;
        }

        .logo-variants-section::before {
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
          max-width: 700px;
          margin: 0 auto;
        }

        .logo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
          margin-bottom: 64px;
        }

        .logo-variant-card {
          background: var(--surface);
          border-radius: 16px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          box-shadow:
            6px 6px 12px var(--shadow-dark),
            -2px -2px 8px var(--shadow-light);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
          transform: translateY(20px);
          animation: card-appear 0.6s ease-out forwards;
        }

        .logo-variant-card:hover {
          transform: translateY(-4px);
          box-shadow:
            8px 8px 16px var(--shadow-dark),
            -3px -3px 12px var(--shadow-light);
        }

        .logo-variant-card.primary {
          grid-column: span 2;
          background: linear-gradient(135deg, var(--surface) 0%, var(--surface-highlight) 100%);
          border: 1px solid rgba(255, 154, 77, 0.3);
        }

        .logo-variant-card.primary:hover {
          border-color: rgba(255, 154, 77, 0.5);
          box-shadow:
            8px 8px 16px var(--shadow-dark),
            -3px -3px 12px var(--shadow-light),
            0 0 40px rgba(255, 154, 77, 0.25);
        }

        .logo-display {
          position: relative;
          background: var(--background-primary);
          border-radius: 12px;
          padding: 32px 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 220px;
          box-shadow: inset 4px 4px 8px rgba(0,0,0,0.4);
        }

        .logo-placeholder {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-svg {
          max-height: 200px;
          width: auto;
        }

        .bulb-primary {
          max-height: 240px;
          animation: bulb-pulse 3s infinite ease-in-out;
        }

        .bulb-vintage {
          animation: vintage-glow 4s infinite ease-in-out;
        }

        @keyframes bulb-pulse {
          0%, 100% {
            filter: drop-shadow(0 0 8px #ffaa00) drop-shadow(0 0 16px #ff8800);
          }
          50% {
            filter: drop-shadow(0 0 12px #ffaa00) drop-shadow(0 0 24px #ff8800) drop-shadow(0 0 32px #ff6600);
          }
        }

        @keyframes vintage-glow {
          0%, 100% {
            filter: drop-shadow(0 0 6px #ffcc88);
          }
          50% {
            filter: drop-shadow(0 0 10px #ffcc88) drop-shadow(0 0 18px #ff9944);
          }
        }

        .primary-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          padding: 6px 12px;
          background: rgba(255, 154, 77, 0.2);
          border: 1px solid var(--gri-glow);
          border-radius: 6px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 11px;
          letter-spacing: 0.08em;
          color: var(--gri-glow);
          text-shadow: 0 0 8px var(--gri-glow);
        }

        .variant-info {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .variant-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 20px;
          letter-spacing: 0.08em;
          color: var(--text-primary);
          margin: 0;
          text-transform: uppercase;
        }

        .variant-subtitle {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-secondary);
          margin: 0;
        }

        .download-section {
          display: flex;
          justify-content: center;
          padding-top: 32px;
          border-top: 1px solid var(--grid-lines);
        }

        .download-button {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 32px;
          background: linear-gradient(135deg, var(--surface) 0%, var(--surface-highlight) 100%);
          border: 1px solid rgba(255, 154, 77, 0.3);
          border-radius: 12px;
          color: var(--text-primary);
          font-family: 'Bebas Neue', sans-serif;
          font-size: 16px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          box-shadow:
            6px 6px 12px var(--shadow-dark),
            -2px -2px 8px var(--shadow-light);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .download-button:hover {
          transform: translateY(-2px);
          border-color: var(--gri-glow);
          color: var(--gri-glow);
          box-shadow:
            8px 8px 16px var(--shadow-dark),
            -3px -3px 12px var(--shadow-light),
            0 0 30px rgba(255, 154, 77, 0.2);
        }

        @keyframes card-appear {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 968px) {
          .logo-variant-card.primary {
            grid-column: span 1;
          }
        }

        @media (max-width: 768px) {
          .logo-variants-section {
            padding: 80px 20px;
          }

          .logo-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
      `}</style>
    </section>
  );
}
