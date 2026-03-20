import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";

export function ContactsPage() {
  const contacts = [
    {
      icon: Phone,
      label: "ТЕЛЕФОН",
      value: "+375 (29) 615-56-72",
      href: "tel:+375296155672"
    },
    {
      icon: Mail,
      label: "EMAIL",
      value: "info@plato-intel.by",
      href: "mailto:info@plato-intel.by"
    },
    {
      icon: MapPin,
      label: "АДРЕС",
      value: "г. Минск, ул. Промышленная, 15",
      href: "#"
    },
    {
      icon: Clock,
      label: "РЕЖИМ РАБОТЫ",
      value: "Пн-Пт: 9:00 — 18:00",
      href: null
    }
  ];

  return (
    <section className="contacts-page">
      <div className="page-header">
        <h1 className="page-title">КОНТАКТЫ</h1>
        <p className="page-subtitle">Свяжитесь с нами удобным способом</p>
      </div>

      <div className="content-wrapper">
        {/* Contacts List */}
        <div className="contacts-list">
          {contacts.map((contact, idx) => {
            const Icon = contact.icon;
            const content = (
              <>
                <div className="contact-icon">
                  <Icon size={22} />
                </div>
                <div className="contact-info">
                  <span className="contact-label">{contact.label}</span>
                  <span className="contact-value">{contact.value}</span>
                </div>
              </>
            );

            return contact.href ? (
              <a key={idx} href={contact.href} className="contact-item">
                {content}
              </a>
            ) : (
              <div key={idx} className="contact-item">
                {content}
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="actions-row">
          <a href="tel:+375296155672" className="action-btn primary">
            <Phone size={16} />
            ПОЗВОНИТЬ
          </a>
          <a href="mailto:info@plato-intel.by" className="action-btn">
            <Mail size={16} />
            НАПИСАТЬ
          </a>
        </div>

        {/* Map Placeholder */}
        <div className="map-card">
          <div className="map-placeholder">
            <MapPin size={32} />
            <p>Карта проезда</p>
            <span>Минск, ул. Промышленная, 15</span>
          </div>
          <a 
            href="https://maps.google.com/?q=Минск+Промышленная+15" 
            target="_blank" 
            rel="noopener noreferrer"
            className="map-link"
          >
            Открыть в Google Maps
            <ExternalLink size={12} />
          </a>
        </div>
      </div>

      <style>{`
        .contacts-page {
          padding: 100px 5% 60px;
          background: var(--background-primary);
          min-height: calc(100vh - 80px);
        }

        .page-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .page-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(28px, 4vw, 40px);
          letter-spacing: 0.08em;
          color: var(--text-primary);
          margin: 0 0 12px 0;
        }

        .page-subtitle {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-secondary);
          margin: 0;
        }

        .content-wrapper {
          max-width: 480px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contacts-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 18px 20px;
          background: var(--surface);
          border-radius: 12px;
          text-decoration: none;
          box-shadow: 
            4px 4px 8px var(--shadow-dark),
            -1px -1px 4px var(--shadow-light);
          transition: all 0.3s;
        }

        .contact-item:hover {
          transform: translateX(4px);
          box-shadow: 
            6px 6px 12px var(--shadow-dark),
            -2px -2px 8px var(--shadow-light);
        }

        .contact-icon {
          color: #ffd7a8;
          filter: drop-shadow(0 0 6px #ffaa00);
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .contact-label {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 11px;
          letter-spacing: 0.08em;
          color: var(--text-secondary);
        }

        .contact-value {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-primary);
        }

        .actions-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .action-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px;
          background: var(--surface);
          border: 1px solid var(--grid-lines);
          border-radius: 10px;
          color: var(--text-primary);
          font-family: 'Bebas Neue', sans-serif;
          font-size: 13px;
          letter-spacing: 0.06em;
          text-decoration: none;
          cursor: pointer;
          box-shadow: 
            3px 3px 6px var(--shadow-dark),
            -1px -1px 3px var(--shadow-light);
          transition: all 0.3s;
        }

        .action-btn:hover {
          border-color: var(--gri-glow);
          color: var(--gri-glow);
        }

        .action-btn.primary {
          background: var(--gri-glow);
          border-color: var(--gri-glow);
          color: var(--background-primary);
          box-shadow: 0 4px 12px rgba(255, 154, 77, 0.3);
        }

        .action-btn.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(255, 154, 77, 0.4);
        }

        .map-card {
          background: var(--surface);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 
            4px 4px 8px var(--shadow-dark),
            -1px -1px 4px var(--shadow-light);
        }

        .map-placeholder {
          height: 160px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: linear-gradient(135deg, var(--background-secondary) 0%, var(--surface) 100%);
          color: var(--text-secondary);
        }

        .map-placeholder svg {
          color: var(--gri-glow);
          filter: drop-shadow(0 0 8px #ffaa00);
        }

        .map-placeholder p {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 14px;
          letter-spacing: 0.06em;
          color: var(--text-primary);
          margin: 0;
        }

        .map-placeholder span {
          font-family: 'PT Sans', sans-serif;
          font-size: 12px;
          color: var(--text-secondary);
        }

        .map-link {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 14px;
          color: var(--gri-glow);
          font-family: 'PT Sans', sans-serif;
          font-size: 13px;
          text-decoration: none;
          transition: all 0.3s;
        }

        .map-link:hover {
          background: rgba(255, 154, 77, 0.1);
        }

        @media (max-width: 768px) {
          .contacts-page {
            padding: 72px 16px 40px;
          }
          
          .page-title {
            font-size: 22px;
          }
          
          .contact-item {
            padding: 14px 16px;
            gap: 12px;
          }
          
          .contact-icon svg {
            width: 18px;
            height: 18px;
          }
          
          .contact-label {
            font-size: 9px;
          }
          
          .contact-value {
            font-size: 13px;
          }
          
          .actions-row {
            gap: 8px;
          }
          
          .action-btn {
            padding: 12px;
            font-size: 12px;
          }
          
          .map-placeholder {
            height: 120px;
          }
          
          .map-placeholder svg {
            width: 24px;
            height: 24px;
          }
          
          .map-placeholder p {
            font-size: 12px;
          }
          
          .map-placeholder span {
            font-size: 11px;
          }
          
          .map-link {
            padding: 12px;
            font-size: 12px;
          }
        }
      `}</style>
    </section>
  );
}
