import { X, Info } from "lucide-react";

interface InfoPopupProps {
  isOpen: boolean;
  onClose: () => void;
  content: {
    title: string;
    description: string;
  };
}

export function InfoPopup({ isOpen, onClose, content }: InfoPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="info-popup-overlay" onClick={onClose}>
      <div className="info-popup" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>
          <X size={18} />
        </button>
        
        <div className="popup-header">
          <Info size={24} />
          <h3>{content.title}</h3>
        </div>
        
        <p className="popup-description">{content.description}</p>
        
        <button className="popup-btn" onClick={onClose}>
          Понятно
        </button>
      </div>

      <style>{`
        .info-popup-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 20px;
        }

        .info-popup {
          position: relative;
          max-width: 400px;
          width: 100%;
          padding: 28px;
          background: var(--surface);
          border-radius: 16px;
          box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.5),
            0 0 40px rgba(255, 154, 77, 0.1);
        }

        .popup-close {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--background-primary);
          border: 1px solid var(--grid-lines);
          border-radius: 8px;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.3s;
        }

        .popup-close:hover {
          color: var(--gri-glow);
          border-color: var(--gri-glow);
        }

        .popup-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .popup-header svg {
          color: var(--gri-glow);
          filter: drop-shadow(0 0 8px #ffaa00);
        }

        .popup-header h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 18px;
          letter-spacing: 0.06em;
          color: var(--text-primary);
          margin: 0;
        }

        .popup-description {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0 0 24px 0;
        }

        .popup-btn {
          width: 100%;
          padding: 12px;
          background: var(--gri-glow);
          border: none;
          border-radius: 8px;
          color: var(--background-primary);
          font-family: 'Bebas Neue', sans-serif;
          font-size: 14px;
          letter-spacing: 0.06em;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(255, 154, 77, 0.3);
          transition: all 0.3s;
        }

        .popup-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 154, 77, 0.4);
        }

        @media (max-width: 480px) {
          .info-popup-overlay {
            padding: 16px;
          }

          .info-popup {
            padding: 24px;
          }
        }
      `}</style>
    </div>
  );
}
