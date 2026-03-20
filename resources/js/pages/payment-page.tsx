import { CreditCard, Building2, Wallet, FileText, Shield } from "lucide-react";

export function PaymentPage() {
  const paymentMethods = [
    {
      icon: Building2,
      title: "БЕЗНАЛИЧНЫЙ РАСЧЁТ",
      description: "Для юридических лиц. Оплата по счёту с НДС."
    },
    {
      icon: Wallet,
      title: "НАЛИЧНЫЙ РАСЧЁТ",
      description: "При получении на складе или курьеру."
    },
    {
      icon: CreditCard,
      title: "КАРТА ОНЛАЙН",
      description: "Оплата банковской картой через защищённый шлюз."
    }
  ];

  const conditions = [
    { label: "Предоплата", value: "30-100%" },
    { label: "Отсрочка", value: "До 30 дней" },
    { label: "Мин. заказ", value: "50 BYN" }
  ];

  return (
    <section className="payment-page">
      <div className="page-header">
        <h1 className="page-title">ОПЛАТА</h1>
        <p className="page-subtitle">Удобные способы оплаты для физических и юридических лиц</p>
      </div>

      <div className="content-wrapper">
        {/* Payment Methods */}
        <div className="methods-list">
          {paymentMethods.map((method, idx) => {
            const Icon = method.icon;
            return (
              <div key={idx} className="method-row">
                <div className="method-icon">
                  <Icon size={24} />
                </div>
                <div className="method-content">
                  <h3>{method.title}</h3>
                  <p>{method.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Conditions */}
        <div className="conditions-box">
          <h3 className="box-title">УСЛОВИЯ ОПЛАТЫ</h3>
          <div className="conditions-grid">
            {conditions.map((cond, idx) => (
              <div key={idx} className="condition-item">
                <span className="condition-label">{cond.label}</span>
                <span className="condition-value">{cond.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Documents & Security */}
        <div className="info-row">
          <div className="info-card">
            <FileText size={20} />
            <div>
              <h4>ДОКУМЕНТЫ</h4>
              <p>Счёт, акт, накладная, УПД</p>
            </div>
          </div>
          <div className="info-card">
            <Shield size={20} />
            <div>
              <h4>ГАРАНТИЯ</h4>
              <p>До 12 месяцев на всё</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="cta-box">
          <p>Нужен индивидуальный договор или особые условия оплаты?</p>
          <button>СВЯЗАТЬСЯ С МЕНЕДЖЕРОМ</button>
        </div>
      </div>

      <style>{`
        .payment-page {
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
          max-width: 600px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .methods-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .method-row {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px 24px;
          background: var(--surface);
          border-radius: 12px;
          box-shadow: 
            4px 4px 8px var(--shadow-dark),
            -1px -1px 4px var(--shadow-light);
        }

        .method-icon {
          color: #ffd7a8;
          filter: drop-shadow(0 0 6px #ffaa00);
          flex-shrink: 0;
        }

        .method-content h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 14px;
          letter-spacing: 0.06em;
          color: var(--text-primary);
          margin: 0 0 4px 0;
        }

        .method-content p {
          font-family: 'PT Sans', sans-serif;
          font-size: 13px;
          color: var(--text-secondary);
          margin: 0;
        }

        .conditions-box {
          padding: 24px;
          background: var(--surface);
          border-radius: 12px;
          box-shadow: 
            4px 4px 8px var(--shadow-dark),
            -1px -1px 4px var(--shadow-light);
        }

        .box-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 14px;
          letter-spacing: 0.06em;
          color: var(--text-primary);
          text-align: center;
          margin: 0 0 20px 0;
        }

        .conditions-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          text-align: center;
        }

        .condition-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .condition-label {
          font-family: 'PT Sans', sans-serif;
          font-size: 12px;
          color: var(--text-secondary);
        }

        .condition-value {
          font-family: 'JetBrains Mono', monospace;
          font-size: 14px;
          color: var(--accent-green);
          font-weight: 600;
        }

        .info-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .info-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 20px;
          background: var(--surface);
          border-radius: 12px;
          box-shadow: 
            4px 4px 8px var(--shadow-dark),
            -1px -1px 4px var(--shadow-light);
        }

        .info-card svg {
          color: var(--gri-glow);
          filter: drop-shadow(0 0 4px #ffaa00);
          flex-shrink: 0;
        }

        .info-card h4 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 12px;
          letter-spacing: 0.06em;
          color: var(--text-primary);
          margin: 0 0 2px 0;
        }

        .info-card p {
          font-family: 'PT Sans', sans-serif;
          font-size: 12px;
          color: var(--text-secondary);
          margin: 0;
        }

        .cta-box {
          padding: 24px;
          background: linear-gradient(135deg, var(--surface) 0%, var(--surface-highlight) 100%);
          border: 1px solid rgba(255, 154, 77, 0.2);
          border-radius: 12px;
          text-align: center;
          box-shadow: 
            4px 4px 8px var(--shadow-dark),
            -1px -1px 4px var(--shadow-light);
        }

        .cta-box p {
          font-family: 'PT Sans', sans-serif;
          font-size: 13px;
          color: var(--text-secondary);
          margin: 0 0 16px 0;
        }

        .cta-box button {
          padding: 12px 24px;
          background: var(--gri-glow);
          border: none;
          border-radius: 8px;
          color: var(--background-primary);
          font-family: 'Bebas Neue', sans-serif;
          font-size: 13px;
          letter-spacing: 0.06em;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(255, 154, 77, 0.3);
          transition: all 0.3s;
        }

        .cta-box button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(255, 154, 77, 0.4);
        }

        @media (max-width: 768px) {
          .payment-page {
            padding: 72px 16px 40px;
          }
          
          .page-title {
            font-size: 22px;
          }
          
          .page-subtitle {
            font-size: 13px;
          }
          
          .method-row {
            padding: 14px 16px;
            gap: 12px;
          }
          
          .method-content h3 {
            font-size: 13px;
          }
          
          .method-content p {
            font-size: 11px;
          }

          .conditions-box {
            padding: 16px;
          }
          
          .box-title {
            font-size: 12px;
            margin-bottom: 16px;
          }

          .conditions-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 8px;
          }
          
          .condition-label {
            font-size: 10px;
          }
          
          .condition-value {
            font-size: 12px;
          }

          .info-row {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }
          
          .info-card {
            padding: 12px;
            gap: 8px;
          }
          
          .info-card h4 {
            font-size: 10px;
          }
          
          .info-card p {
            font-size: 10px;
          }
          
          .cta-box {
            padding: 20px;
          }
          
          .cta-box p {
            font-size: 12px;
          }
        }
      `}</style>
    </section>
  );
}
