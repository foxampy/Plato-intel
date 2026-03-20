import { useState } from "react";
import { NeomorphButton } from "./neomorph-button";

const inquiryTypes = [
  "Подбор оборудования",
  "Запрос цены",
  "Техническая консультация",
  "Гарантийный случай"
];

export function ContactSection() {
  const [selectedType, setSelectedType] = useState(0);

  return (
    <section className="contact-section">
      <div className="section-container">
        <h2 className="section-title">ОБСУДИТЬ ПРОЕКТ</h2>
        
        <div className="contact-grid">
          <div className="form-module">
            <form className="contact-form">
              <div className="form-field">
                <label htmlFor="name" className="field-label">ИМЯ</label>
                <input 
                  type="text" 
                  id="name"
                  className="neomorph-input"
                  placeholder="Введите ваше имя"
                />
              </div>
              
              <div className="form-field">
                <label htmlFor="company" className="field-label">КОМПАНИЯ</label>
                <input 
                  type="text" 
                  id="company"
                  className="neomorph-input"
                  placeholder="Название организации"
                />
              </div>
              
              <div className="form-field">
                <label htmlFor="phone" className="field-label">ТЕЛЕФОН</label>
                <input 
                  type="tel" 
                  id="phone"
                  className="neomorph-input"
                  placeholder="+375 (__)___-__-__"
                />
              </div>
              
              <div className="form-field">
                <label className="field-label">ЧТО ТРЕБУЕТСЯ</label>
                <div className="inquiry-selector">
                  {inquiryTypes.map((type, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`inquiry-option ${selectedType === idx ? 'active' : ''}`}
                      onClick={() => setSelectedType(idx)}
                    >
                      <div className="option-indicator"></div>
                      <span>{type}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="form-field">
                <label htmlFor="message" className="field-label">КОММЕНТАРИЙ</label>
                <textarea 
                  id="message"
                  className="neomorph-input textarea"
                  rows={4}
                  placeholder="Опишите ваш запрос..."
                ></textarea>
              </div>
              
              <NeomorphButton variant="primary" className="submit-button">
                ОТПРАВИТЬ ЗАПРОС
              </NeomorphButton>
            </form>
          </div>
          
          <div className="info-module">
            <div className="info-card">
              <h3 className="info-title">КОНТАКТНАЯ ИНФОРМАЦИЯ</h3>
              
              <div className="info-items">
                <div className="info-item">
                  <div className="info-label">ТЕЛЕФОН</div>
                  <a href="tel:+375291234567" className="info-value">+375 (29) 123-45-67</a>
                </div>
                
                <div className="info-item">
                  <div className="info-label">EMAIL</div>
                  <a href="mailto:info@plato-intel.by" className="info-value">info@plato-intel.by</a>
                </div>
                
                <div className="info-item">
                  <div className="info-label">АДРЕС</div>
                  <div className="info-value">г. Минск, ул. Промышленная, 15</div>
                </div>
                
                <div className="info-item">
                  <div className="info-label">РЕЖИМ РАБОТЫ</div>
                  <div className="info-value">Пн-Пт: 9:00 - 18:00<br/>Сб-Вс: выходной</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          padding: 120px 5%;
          background: var(--background-primary);
          position: relative;
        }

        .contact-section::before {
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

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
        }

        .form-module {
          display: flex;
          flex-direction: column;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .field-label {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 12px;
          letter-spacing: 0.08em;
          color: var(--text-secondary);
          text-transform: uppercase;
        }

        .neomorph-input {
          padding: 14px 20px;
          background: var(--surface);
          border: 1px solid var(--grid-lines);
          border-radius: 8px;
          color: var(--text-primary);
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          transition: all 0.3s;
          box-shadow: 
            inset 2px 2px 4px rgba(0,0,0,0.3),
            inset -1px -1px 3px rgba(255,255,255,0.02);
        }

        .neomorph-input::placeholder {
          color: var(--text-secondary);
        }

        .neomorph-input:focus {
          outline: none;
          border-color: var(--accent-green);
          box-shadow: 
            inset 2px 2px 4px rgba(0,0,0,0.3),
            inset -1px -1px 3px rgba(255,255,255,0.02),
            0 0 0 2px rgba(74, 222, 128, 0.2);
        }

        .neomorph-input.textarea {
          resize: vertical;
          min-height: 100px;
        }

        .inquiry-selector {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .inquiry-option {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: var(--surface);
          border: 1px solid var(--grid-lines);
          border-radius: 8px;
          color: var(--text-primary);
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          text-align: left;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 
            2px 2px 4px rgba(0,0,0,0.2),
            -1px -1px 3px rgba(255,255,255,0.02);
        }

        .inquiry-option:hover {
          border-color: var(--text-secondary);
        }

        .inquiry-option.active {
          border-color: var(--accent-green);
          box-shadow: 
            inset 2px 2px 4px rgba(0,0,0,0.3),
            inset -1px -1px 3px rgba(255,255,255,0.02),
            0 0 0 2px rgba(74, 222, 128, 0.2);
        }

        .option-indicator {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 2px solid var(--grid-lines);
          position: relative;
          transition: all 0.3s;
        }

        .inquiry-option.active .option-indicator {
          border-color: var(--accent-green);
          background: var(--accent-green);
          box-shadow: 0 0 10px rgba(74, 222, 128, 0.5);
        }

        .inquiry-option.active .option-indicator::after {
          content: '';
          position: absolute;
          inset: 3px;
          border-radius: 50%;
          background: var(--surface);
        }

        .submit-button {
          margin-top: 8px;
          width: 100%;
        }

        .info-module {
          display: flex;
          flex-direction: column;
        }

        .info-card {
          padding: 40px;
          background: var(--surface);
          border-radius: 12px;
          box-shadow: 
            6px 6px 12px var(--shadow-dark),
            -2px -2px 8px var(--shadow-light);
        }

        .info-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 24px;
          letter-spacing: 0.08em;
          color: var(--text-primary);
          margin: 0 0 32px 0;
          text-transform: uppercase;
        }

        .info-items {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .info-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .info-label {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 12px;
          letter-spacing: 0.08em;
          color: var(--text-secondary);
          text-transform: uppercase;
        }

        .info-value {
          font-family: 'PT Sans', sans-serif;
          font-size: 16px;
          color: var(--text-primary);
          line-height: 1.6;
          text-decoration: none;
          transition: color 0.3s;
        }

        a.info-value:hover {
          color: var(--gri-glow);
        }

        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 768px) {
          .contact-section {
            padding: 40px 16px;
          }
          
          .section-title {
            font-size: 24px;
            margin-bottom: 32px;
          }
          
          .contact-grid {
            gap: 24px;
          }
          
          .contact-form {
            gap: 16px;
          }
          
          .form-field {
            gap: 6px;
          }
          
          .field-label {
            font-size: 10px;
          }
          
          .neomorph-input {
            padding: 10px 14px;
            font-size: 13px;
          }
          
          .inquiry-option {
            padding: 10px 12px;
            font-size: 12px;
          }
          
          .neomorph-input.textarea {
            min-height: 80px;
          }
          
          .submit-button {
            padding: 14px;
            font-size: 13px;
          }

          .info-card {
            padding: 20px;
          }
          
          .info-title {
            font-size: 16px;
            margin-bottom: 20px;
          }
          
          .info-items {
            gap: 16px;
          }
          
          .info-value {
            font-size: 14px;
          }
        }
        
        @media (max-width: 480px) {
          .inquiry-selector {
            gap: 8px;
          }
          
          .inquiry-option {
            padding: 8px 10px;
            font-size: 11px;
          }
        }
      `}</style>
    </section>
  );
}
