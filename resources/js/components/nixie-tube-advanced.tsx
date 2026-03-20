import { useEffect, useState, useRef } from "react";

interface NixieTubeAdvancedProps {
  value: string;
  label: string;
  delay?: number;
  animate?: boolean;
  size?: "small" | "medium" | "large";
}

export function NixieTubeAdvanced({ 
  value, 
  label, 
  delay = 0, 
  animate = true,
  size = "medium"
}: NixieTubeAdvancedProps) {
  const [isIgnited, setIsIgnited] = useState(false);
  const [displayValue, setDisplayValue] = useState("0");
  const [isRolling, setIsRolling] = useState(false);
  const [flickerIntensity, setFlickerIntensity] = useState(1);
  const targetRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  // Все возможные цифры для отображения в фоне
  const allDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  // Размеры для разных вариантов
  const sizeConfig = {
    small: { digit: 36, container: 100, padding: 16 },
    medium: { digit: 56, container: 140, padding: 20 },
    large: { digit: 72, container: 180, padding: 28 }
  };

  useEffect(() => {
    if (!animate) {
      setIsIgnited(true);
      setDisplayValue(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            
            setTimeout(() => {
              // Эффект зажигания с мерцанием
              let flickerCount = 0;
              const flickerInterval = setInterval(() => {
                setFlickerIntensity(Math.random() * 0.5 + 0.5);
                flickerCount++;
                if (flickerCount > 5) {
                  clearInterval(flickerInterval);
                  setFlickerIntensity(1);
                }
              }, 50);

              setIsIgnited(true);
              setIsRolling(true);
              
              // Прокрутка цифр
              const targetNum = parseInt(value.replace(/\D/g, '')) || 0;
              if (targetNum === 0) {
                setDisplayValue(value);
                setIsRolling(false);
                return;
              }

              let currentNum = 0;
              const duration = 2000;
              const steps = Math.min(30, targetNum);
              const increment = Math.ceil(targetNum / steps);
              
              const interval = setInterval(() => {
                currentNum += increment;
                if (currentNum >= targetNum) {
                  currentNum = targetNum;
                  setDisplayValue(value);
                  setIsRolling(false);
                  clearInterval(interval);
                } else {
                  setDisplayValue(currentNum.toString());
                }
              }, duration / steps);
            }, delay);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => observer.disconnect();
  }, [value, delay, animate]);

  // Микро-мерцание для живости
  useEffect(() => {
    if (!isIgnited || isRolling) return;

    const microFlicker = setInterval(() => {
      setFlickerIntensity(Math.random() * 0.08 + 0.92);
    }, 2000 + Math.random() * 3000);

    return () => clearInterval(microFlicker);
  }, [isIgnited, isRolling]);

  const cfg = sizeConfig[size];

  return (
    <div className="nixie-advanced-wrapper" ref={targetRef}>
      <div 
        className={`nixie-advanced-container ${isIgnited ? 'ignited' : ''} ${isRolling ? 'rolling' : ''}`}
        style={{
          minWidth: `${cfg.container}px`,
          height: `${cfg.container}px`,
          padding: `${cfg.padding}px ${cfg.padding + 4}px`
        }}
      >
        {/* Глубокий темный фон с градиентом */}
        <div className="bulb-background"></div>
        
        {/* Стеклянная колба с искажениями */}
        <div className="glass-envelope">
          <div className="glass-specular"></div>
          <div className="glass-edge-blur"></div>
        </div>
        
        {/* Спящие катоды - все цифры в фоне */}
        <div className="sleeping-cathodes">
          {allDigits.map((d, i) => (
            <svg 
              key={i} 
              className="cathode-digit" 
              viewBox="0 0 100 140"
              style={{
                position: 'absolute',
                width: `${cfg.digit}px`,
                height: `${cfg.digit * 1.4}px`,
                opacity: 0.05 + i * 0.005
              }}
            >
              <text 
                x="50" 
                y="110" 
                textAnchor="middle" 
                fontFamily="Nixie One, cursive" 
                fontSize="100"
                fill="#4a4a4a"
                strokeWidth="1"
                stroke="#4a4a4a"
              >
                {d}
              </text>
            </svg>
          ))}
        </div>
        
        {/* Металлическая сетка анода */}
        <div className="anode-mesh"></div>
        
        {/* Активная светящаяся цифра */}
        <div className="active-digit-layer">
          {displayValue.split('').map((digit, idx) => (
            <div key={idx} className="digit-wrapper">
              {/* SVG для эффекта "раскаленной нити" */}
              <svg 
                className="glowing-filament" 
                viewBox="0 0 100 140"
                style={{
                  width: `${cfg.digit}px`,
                  height: `${cfg.digit * 1.4}px`,
                  opacity: flickerIntensity
                }}
              >
                {/* Внешний слой свечения */}
                <defs>
                  <filter id={`glow-outer-${idx}`}>
                    <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                  <filter id={`glow-inner-${idx}`}>
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Задний слой - широкое оранжевое свечение */}
                <text 
                  x="50" 
                  y="110" 
                  textAnchor="middle" 
                  fontFamily="Nixie One, cursive" 
                  fontSize="100"
                  fill="#ff4400"
                  filter={`url(#glow-outer-${idx})`}
                  opacity="0.4"
                >
                  {digit}
                </text>
                
                {/* Средний слой - оранжевое гало */}
                <text 
                  x="50" 
                  y="110" 
                  textAnchor="middle" 
                  fontFamily="Nixie One, cursive" 
                  fontSize="100"
                  fill="#ff8800"
                  filter={`url(#glow-inner-${idx})`}
                  opacity="0.7"
                >
                  {digit}
                </text>
                
                {/* Основная цифра */}
                <text 
                  x="50" 
                  y="110" 
                  textAnchor="middle" 
                  fontFamily="Nixie One, cursive" 
                  fontSize="100"
                  fill="#ffd7a8"
                  strokeWidth="0.5"
                  stroke="#ffaa00"
                >
                  {digit}
                </text>
                
                {/* Яркое ядро */}
                <text 
                  x="50" 
                  y="110" 
                  textAnchor="middle" 
                  fontFamily="Nixie One, cursive" 
                  fontSize="100"
                  fill="rgba(255, 255, 255, 0.5)"
                  strokeWidth="0.3"
                  stroke="rgba(255, 255, 255, 0.8)"
                >
                  {digit}
                </text>
              </svg>
              
              {/* Пульсирующее газовое облако */}
              <div className="gas-cloud"></div>
              
              {/* Отражение на соседних катодах */}
              <div className="cathode-reflection"></div>
            </div>
          ))}
        </div>
        
        {/* Электроды */}
        <div className="electrode anode"></div>
        <div className="electrode cathode"></div>
      </div>
      
      <div className="nixie-label">{label}</div>

      <style>{`
        .nixie-advanced-wrapper {
          display: flex;
          flex-direction: column;
          gap: 16px;
          align-items: center;
        }

        .nixie-advanced-container {
          position: relative;
          width: auto;
          background: linear-gradient(135deg, #050608 0%, #0a0c12 50%, #050608 100%);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 
            8px 8px 20px rgba(0, 0, 0, 0.9),
            -3px -3px 10px rgba(255, 255, 255, 0.02),
            inset 0 2px 8px rgba(0,0,0,0.8);
          overflow: hidden;
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .bulb-background {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse at center,
            rgba(20, 22, 30, 1) 0%,
            rgba(5, 6, 8, 1) 70%
          );
          border-radius: 14px;
        }

        .glass-envelope {
          position: absolute;
          inset: 8px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.03);
          pointer-events: none;
          z-index: 10;
        }

        .glass-specular {
          position: absolute;
          top: 8px;
          left: 12px;
          width: 25%;
          height: 45%;
          background: linear-gradient(
            135deg, 
            rgba(255, 255, 255, 0.12) 0%, 
            transparent 60%
          );
          border-radius: 50%;
          filter: blur(12px);
        }

        .glass-edge-blur {
          position: absolute;
          inset: -2px;
          border-radius: 12px;
          box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.8);
        }

        .sleeping-cathodes {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
        }

        .cathode-digit {
          filter: blur(0.5px);
        }

        .anode-mesh {
          position: absolute;
          inset: 12px;
          background-image: 
            repeating-linear-gradient(
              0deg,
              rgba(120, 120, 120, 0.06) 0px,
              transparent 0.5px,
              transparent 2.5px,
              rgba(120, 120, 120, 0.06) 3px
            ),
            repeating-linear-gradient(
              90deg,
              rgba(120, 120, 120, 0.06) 0px,
              transparent 0.5px,
              transparent 2.5px,
              rgba(120, 120, 120, 0.06) 3px
            );
          border-radius: 10px;
          pointer-events: none;
          z-index: 5;
        }

        .active-digit-layer {
          position: relative;
          display: flex;
          gap: 6px;
          z-index: 4;
          opacity: 0;
          transform: scale(0.85);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nixie-advanced-container.ignited .active-digit-layer {
          opacity: 1;
          transform: scale(1);
        }

        .digit-wrapper {
          position: relative;
        }

        .glowing-filament {
          position: relative;
          z-index: 2;
          filter: drop-shadow(0 0 3px #ffaa00)
                  drop-shadow(0 0 8px #ff8800)
                  drop-shadow(0 0 16px #ff6600);
        }

        .gas-cloud {
          position: absolute;
          inset: -30px;
          background: radial-gradient(
            circle at center,
            rgba(255, 136, 0, 0.25) 0%,
            rgba(255, 102, 0, 0.12) 40%,
            transparent 70%
          );
          filter: blur(20px);
          opacity: 0;
          z-index: 1;
          animation: gas-pulse 3s infinite ease-in-out;
        }

        .nixie-advanced-container.ignited .gas-cloud {
          opacity: 1;
        }

        .cathode-reflection {
          position: absolute;
          inset: -15px;
          background: radial-gradient(
            circle at center,
            rgba(255, 154, 77, 0.15) 0%,
            transparent 60%
          );
          filter: blur(10px);
          opacity: 0;
          z-index: 0;
        }

        .nixie-advanced-container.ignited .cathode-reflection {
          opacity: 1;
        }

        .electrode {
          position: absolute;
          width: 4px;
          background: linear-gradient(180deg, #555, #222);
          border-radius: 2px;
          box-shadow: 
            inset 0 1px 2px rgba(255,255,255,0.15),
            0 1px 3px rgba(0,0,0,0.8);
          z-index: 11;
        }

        .electrode.anode {
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 12px;
        }

        .electrode.cathode {
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 12px;
        }

        .nixie-label {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 11px;
          letter-spacing: 0.1em;
          color: var(--text-secondary);
          text-align: center;
          text-transform: uppercase;
        }

        /* Анимация зажигания с теплым включением */
        @keyframes warm-ignition {
          0% { 
            opacity: 0;
            filter: drop-shadow(0 0 0 transparent);
          }
          10% { 
            opacity: 0.3;
            filter: drop-shadow(0 0 2px #ffaa00);
          }
          15% { 
            opacity: 0.1;
          }
          25% { 
            opacity: 0.5;
            filter: drop-shadow(0 0 4px #ff8800);
          }
          30% { 
            opacity: 0.2;
          }
          40% { 
            opacity: 0.7;
          }
          50% { 
            opacity: 0.4;
          }
          65% { 
            opacity: 0.9;
          }
          100% { 
            opacity: 1;
            filter: drop-shadow(0 0 3px #ffaa00)
                    drop-shadow(0 0 8px #ff8800)
                    drop-shadow(0 0 16px #ff6600);
          }
        }

        .nixie-advanced-container.ignited .glowing-filament {
          animation: warm-ignition 0.8s ease-out;
        }

        @keyframes gas-pulse {
          0%, 100% { 
            opacity: 0.8;
            transform: scale(1);
          }
          50% { 
            opacity: 1;
            transform: scale(1.05);
          }
        }

        @keyframes roll-flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        .nixie-advanced-container.rolling .glowing-filament {
          animation: roll-flicker 0.15s infinite;
        }

        @media (max-width: 768px) {
          .nixie-advanced-wrapper {
            gap: 8px;
          }
          
          .nixie-advanced-container {
            min-width: 70px !important;
            height: 70px !important;
            padding: 10px 12px !important;
            border-radius: 10px;
          }
          
          .glowing-filament {
            width: 32px !important;
            height: 44px !important;
          }
          
          .cathode-digit {
            width: 32px !important;
            height: 44px !important;
          }
          
          .nixie-label {
            font-size: 9px;
            letter-spacing: 0.06em;
          }
          
          .electrode {
            width: 2px;
            height: 6px !important;
          }
          
          .glass-specular {
            top: 4px;
            left: 6px;
            width: 20%;
            height: 35%;
          }
        }
        
        @media (max-width: 480px) {
          .nixie-advanced-container {
            min-width: 55px !important;
            height: 55px !important;
            padding: 6px 8px !important;
            border-radius: 8px;
          }
          
          .glowing-filament {
            width: 24px !important;
            height: 34px !important;
          }
          
          .cathode-digit {
            width: 24px !important;
            height: 34px !important;
          }
          
          .active-digit-layer {
            gap: 2px;
          }
          
          .nixie-label {
            font-size: 8px;
          }
        }
      `}</style>
    </div>
  );
}
