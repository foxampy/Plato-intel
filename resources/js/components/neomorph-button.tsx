import { ReactNode } from "react";

interface NeomorphButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
}

export function NeomorphButton({ 
  children, 
  variant = "primary", 
  onClick,
  className = ""
}: NeomorphButtonProps) {
  return (
    <button 
      onClick={onClick}
      className={`neomorph-button ${variant} ${className}`}
    >
      {children}
      
      <style>{`
        .neomorph-button {
          position: relative;
          padding: 16px 32px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 16px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }

        .neomorph-button.primary {
          background: linear-gradient(135deg, var(--surface) 0%, var(--surface-highlight) 100%);
          color: var(--text-primary);
          box-shadow: 
            6px 6px 12px var(--shadow-dark),
            -2px -2px 8px var(--shadow-light);
        }

        .neomorph-button.primary:hover {
          box-shadow: 
            4px 4px 8px var(--shadow-dark),
            -1px -1px 4px var(--shadow-light),
            0 0 20px rgba(74, 222, 128, 0.2);
        }

        .neomorph-button.primary:active {
          box-shadow: 
            inset 4px 4px 8px rgba(0,0,0,0.4),
            inset -2px -2px 6px rgba(255,255,255,0.03);
          color: var(--accent-green);
        }

        .neomorph-button.secondary {
          background: transparent;
          color: var(--text-primary);
          border: 1px solid var(--grid-lines);
          box-shadow: none;
        }

        .neomorph-button.secondary:hover {
          border-color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.03);
        }

        .neomorph-button.secondary:active {
          background: rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </button>
  );
}
