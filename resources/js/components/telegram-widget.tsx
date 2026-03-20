import { MessageCircle } from "lucide-react";

export function TelegramWidget() {
  return (
    <a
      href="https://t.me/yourusername"
      target="_blank"
      rel="noopener noreferrer"
      className="telegram-widget"
    >
      <div className="telegram-icon">
        <MessageCircle size={24} />
      </div>
      <span className="telegram-text">Связаться с менеджером</span>

      <style>{`
        .telegram-widget {
          position: fixed;
          bottom: 32px;
          right: 32px;
          z-index: 1000;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 24px;
          background: var(--gri-glow);
          border-radius: 8px;
          text-decoration: none;
          box-shadow:
            0 4px 20px rgba(255, 154, 77, 0.4),
            0 0 40px rgba(255, 154, 77, 0.2);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          animation: widget-appear 0.5s ease-out;
        }

        .telegram-widget:hover {
          transform: translateY(-3px);
          box-shadow:
            0 6px 28px rgba(255, 154, 77, 0.5),
            0 0 50px rgba(255, 154, 77, 0.3);
        }

        .telegram-widget:active {
          transform: translateY(-1px);
        }

        .telegram-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--background-primary);
          flex-shrink: 0;
        }

        .telegram-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 14px;
          letter-spacing: 0.06em;
          color: var(--background-primary);
          text-transform: uppercase;
          white-space: nowrap;
        }

        @keyframes widget-appear {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .telegram-widget {
            bottom: 20px;
            right: 20px;
            padding: 12px 18px;
          }

          .telegram-text {
            font-size: 12px;
          }
        }

        @media (max-width: 480px) {
          .telegram-widget {
            padding: 10px 14px;
            gap: 8px;
          }

          .telegram-icon svg {
            width: 20px;
            height: 20px;
          }

          .telegram-text {
            font-size: 11px;
          }
        }
      `}</style>
    </a>
  );
}
