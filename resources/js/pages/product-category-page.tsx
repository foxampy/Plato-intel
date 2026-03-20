import { ArrowLeft, Package, FileText, MessageCircle, Phone } from "lucide-react";

interface ProductCategoryPageProps {
  categoryId: string | null;
  onBack: () => void;
}

const categoryData: Record<string, { title: string; description: string }> = {
  "circuit-breakers": {
    title: "Автоматические выключатели",
    description: "Надёжная защита электрических цепей от перегрузок и коротких замыканий"
  },
  "starters": {
    title: "Магнитные пускатели",
    description: "Управление электродвигателями и другими электроприёмниками"
  },
  "thermal-relays": {
    title: "Тепловые реле",
    description: "Защита электродвигателей от перегрузки и нарушения режима работы"
  },
  "contactors": {
    title: "Контакторы",
    description: "Дистанционное включение и выключение электрических цепей"
  },
  "hydro-thrusters": {
    title: "Гидротолкатели",
    description: "Гидравлические приводы для тормозных систем кранов"
  },
  "crane-brakes": {
    title: "Крановые тормоза",
    description: "Надёжная остановка и удержание грузоподъёмных механизмов"
  },
  "electromagnets": {
    title: "Электромагниты",
    description: "Магнитные системы для кранов и промышленного оборудования"
  },
  "limit-switches": {
    title: "Концевые выключатели",
    description: "Контроль положения механизмов и защита от аварийных ситуаций"
  }
};

// Демо-товары для каждой категории
const demoProducts: Record<string, Array<{ name: string; article: string; price: string }>> = {
  "circuit-breakers": [
    { name: "Автоматический выключатель ВА57-35", article: "ВА57-35-340010-100А", price: "145 BYN" },
    { name: "Автоматический выключатель ВА88-33", article: "ВА88-33-344710-160А", price: "189 BYN" },
    { name: "Автоматический выключатель АЕ-2046", article: "АЕ-2046-100-00УЗА", price: "95 BYN" }
  ],
  "starters": [
    { name: "Магнитный пускатель ПМЛ-1220", article: "ПМЛ-1220-УХЛ4-220В", price: "78 BYN" },
    { name: "Магнитный пускатель ПМЛ-1621", article: "ПМЛ-1621-УХЛ4-380В", price: "112 BYN" },
    { name: "Магнитный пускатель ПМЕ-071", article: "ПМЕ-071-УХЛ4-220В", price: "45 BYN" }
  ],
  "thermal-relays": [
    { name: "Тепловое реле РТЛ-1016", article: "РТЛ-1016-М7-1,0-1,6А", price: "34 BYN" },
    { name: "Тепловое реле РТЛ-2053", article: "РТЛ-2053-М7-23-32А", price: "52 BYN" },
    { name: "Тепловое реле РТТ-5", article: "РТТ-5-10-1У3-80А", price: "67 BYN" }
  ],
  "contactors": [
    { name: "Контактор КТИ-5115", article: "КТИ-5115-230В-50Гц", price: "156 BYN" },
    { name: "Контактор КТИ-5265", article: "КТИ-5265-380В-50Гц", price: "289 BYN" },
    { name: "Контактор КМИ-11210", article: "КМИ-11210-230В", price: "89 BYN" }
  ],
  "hydro-thrusters": [
    { name: "Гидротолкатель ТЭ-30", article: "ТЭ-30-СУ-У2-220В", price: "420 BYN" },
    { name: "Гидротолкатель ТЭ-50", article: "ТЭ-50-СУ-У2-380В", price: "580 BYN" },
    { name: "Гидротолкатель ТЭ-80", article: "ТЭ-80-СУ-У2-380В", price: "790 BYN" }
  ],
  "crane-brakes": [
    { name: "Тормоз колодочный ТКГ-160", article: "ТКГ-160-У2-220В", price: "340 BYN" },
    { name: "Тормоз колодочный ТКГ-200", article: "ТКГ-200-У2-380В", price: "450 BYN" },
    { name: "Тормоз дисковый ТКП-200", article: "ТКП-200-У2-220В", price: "520 BYN" }
  ],
  "electromagnets": [
    { name: "Электромагнит МО-100", article: "МО-100-У3-220В-50%", price: "280 BYN" },
    { name: "Электромагнит МО-200", article: "МО-200-У3-220В-40%", price: "450 BYN" },
    { name: "Электромагнит МИС-3100", article: "МИС-3100-У3-380В", price: "320 BYN" }
  ],
  "limit-switches": [
    { name: "Выключатель ВП15-21Б-231", article: "ВП15-21Б-231-54У2", price: "28 BYN" },
    { name: "Выключатель ВП15К21Б-231", article: "ВП15К21Б-231-54У2", price: "32 BYN" },
    { name: "Выключатель ВПК-2111", article: "ВПК-2111-БУ2-25А", price: "45 BYN" }
  ]
};

export function ProductCategoryPage({ categoryId, onBack }: ProductCategoryPageProps) {
  const category = categoryId ? categoryData[categoryId] : null;
  const products = categoryId ? demoProducts[categoryId] || [] : [];

  if (!category) {
    return (
      <section className="category-page">
        <div className="error-state">
          <Package size={48} />
          <h2>Категория не найдена</h2>
          <button onClick={onBack}>Вернуться в каталог</button>
        </div>
      </section>
    );
  }

  return (
    <section className="category-page">
      {/* Header */}
      <div className="category-header">
        <button className="back-btn" onClick={onBack}>
          <ArrowLeft size={18} />
          <span>Назад в каталог</span>
        </button>
        <h1 className="category-title">{category.title}</h1>
        <p className="category-desc">{category.description}</p>
      </div>

      {/* Products Table Header */}
      <div className="products-table-header">
        <span className="th-product">Товар</span>
        <span className="th-article">Артикул</span>
        <span className="th-price">Цена</span>
        <span className="th-action"></span>
      </div>

      {/* Products List */}
      <div className="products-list">
        {products.map((product, idx) => (
          <div key={idx} className="product-row">
            <div className="product-main">
              <h3 className="product-name">{product.name}</h3>
            </div>
            <div className="product-article">
              <span className="article-label">Артикул:</span>
              <span className="article-value">{product.article}</span>
            </div>
            <div className="product-price">
              <span className="price-value">{product.price}</span>
            </div>
            <div className="product-actions">
              <button className="action-btn action-request">
                <MessageCircle size={16} />
                <span>Запросить</span>
              </button>
              <button className="action-btn action-phone">
                <Phone size={16} />
                <span>Позвонить</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Info Banner */}
      <div className="info-banner">
        <FileText size={20} />
        <div className="info-banner-text">
          <strong>Обратите внимание:</strong> Точные цены, наличие и сроки поставки уточняйте у менеджеров.
          Мы подберём оптимальное решение под ваши задачи с учётом бюджета и требований.
        </div>
      </div>

      <style>{`
        .category-page {
          padding: 100px 5% 60px;
          background: var(--background-primary);
          min-height: calc(100vh - 80px);
        }

        .error-state {
          max-width: 400px;
          margin: 80px auto;
          text-align: center;
          color: var(--text-secondary);
        }

        .error-state h2 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 24px;
          color: var(--text-primary);
          margin: 20px 0;
        }

        .error-state button {
          padding: 12px 24px;
          background: var(--gri-glow);
          border: none;
          border-radius: 8px;
          color: var(--background-primary);
          font-family: 'Bebas Neue', sans-serif;
          font-size: 13px;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(255, 154, 77, 0.3);
        }

        .category-header {
          max-width: 1200px;
          margin: 0 auto 32px;
        }

        .back-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: var(--surface);
          border: 1px solid var(--grid-lines);
          border-radius: 8px;
          color: var(--text-secondary);
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          cursor: pointer;
          margin-bottom: 24px;
          box-shadow:
            3px 3px 6px var(--shadow-dark),
            -1px -1px 3px var(--shadow-light);
          transition: all 0.3s;
        }

        .back-btn:hover {
          border-color: var(--gri-glow);
          color: var(--gri-glow);
          background: var(--background-secondary);
        }

        .category-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(28px, 4vw, 40px);
          letter-spacing: 0.06em;
          color: var(--text-primary);
          margin: 0 0 12px 0;
          text-transform: uppercase;
        }

        .category-desc {
          font-family: 'PT Sans', sans-serif;
          font-size: 15px;
          color: var(--text-secondary);
          margin: 0;
          line-height: 1.6;
        }

        /* Table Header */
        .products-table-header {
          display: grid;
          grid-template-columns: 2fr 2fr 1fr 180px;
          gap: 16px;
          max-width: 1200px;
          margin: 0 auto 16px;
          padding: 14px 20px;
          background: var(--surface);
          border: 1px solid var(--grid-lines);
          border-radius: 8px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 12px;
          letter-spacing: 0.08em;
          color: var(--text-secondary);
          text-transform: uppercase;
        }

        .th-article, .th-price {
          text-align: center;
        }

        .th-action {
          text-align: right;
        }

        /* Products List */
        .products-list {
          max-width: 1200px;
          margin: 0 auto 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .product-row {
          display: grid;
          grid-template-columns: 2fr 2fr 1fr 180px;
          gap: 16px;
          align-items: center;
          padding: 20px 20px;
          background: var(--surface);
          border: 1px solid var(--grid-lines);
          border-radius: 8px;
          box-shadow:
            3px 3px 6px var(--shadow-dark),
            -1px -1px 3px var(--shadow-light);
          transition: all 0.3s;
        }

        .product-row:hover {
          border-color: rgba(255, 154, 77, 0.3);
          box-shadow:
            4px 4px 10px var(--shadow-dark),
            -2px -2px 6px var(--shadow-light);
        }

        .product-main {
          min-width: 0;
        }

        .product-name {
          font-family: 'PT Sans', sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .product-article {
          display: flex;
          flex-direction: column;
          gap: 4px;
          text-align: center;
        }

        .article-label {
          font-family: 'PT Sans', sans-serif;
          font-size: 11px;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .article-value {
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          color: var(--text-primary);
          font-weight: 500;
        }

        .product-price {
          text-align: center;
        }

        .price-value {
          font-family: 'JetBrains Mono', monospace;
          font-size: 16px;
          font-weight: 700;
          color: var(--accent-green);
        }

        .product-actions {
          display: flex;
          gap: 8px;
          justify-content: flex-end;
        }

        .action-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          border-radius: 6px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 12px;
          letter-spacing: 0.04em;
          cursor: pointer;
          transition: all 0.3s;
          border: none;
        }

        .action-request {
          background: var(--gri-glow);
          color: var(--background-primary);
          box-shadow: 0 2px 8px rgba(255, 154, 77, 0.3);
        }

        .action-request:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(255, 154, 77, 0.4);
        }

        .action-phone {
          background: var(--background-secondary);
          color: var(--text-primary);
          border: 1px solid var(--grid-lines);
        }

        .action-phone:hover {
          border-color: var(--gri-glow);
          color: var(--gri-glow);
          background: var(--background-primary);
        }

        .action-btn svg {
          flex-shrink: 0;
        }

        .action-btn span {
          white-space: nowrap;
        }

        /* Info Banner */
        .info-banner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 20px 24px;
          background: rgba(255, 154, 77, 0.08);
          border: 1px solid rgba(255, 154, 77, 0.2);
          border-radius: 8px;
        }

        .info-banner svg {
          color: var(--gri-glow);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .info-banner-text {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .info-banner-text strong {
          color: var(--text-primary);
          font-weight: 600;
        }

        @media (max-width: 1024px) {
          .products-table-header {
            grid-template-columns: 1.5fr 1.5fr 1fr 160px;
            padding: 12px 16px;
            font-size: 11px;
          }

          .product-row {
            grid-template-columns: 1.5fr 1.5fr 1fr 160px;
            gap: 12px;
            padding: 16px;
          }

          .product-name {
            font-size: 14px;
          }

          .article-value {
            font-size: 12px;
          }

          .price-value {
            font-size: 14px;
          }

          .action-btn {
            padding: 6px 10px;
            font-size: 11px;
          }
        }

        @media (max-width: 768px) {
          .category-page {
            padding: 72px 16px 40px;
          }

          .back-btn {
            padding: 8px 12px;
            font-size: 13px;
            margin-bottom: 16px;
          }

          .category-title {
            font-size: 22px;
            margin-bottom: 8px;
          }

          .category-desc {
            font-size: 13px;
          }

          .products-table-header {
            display: none;
          }

          .product-row {
            grid-template-columns: 1fr;
            gap: 16px;
            padding: 16px;
          }

          .product-main {
            text-align: center;
          }

          .product-name {
            font-size: 15px;
            white-space: normal;
          }

          .product-article {
            text-align: center;
            padding: 12px;
            background: var(--background-primary);
            border-radius: 6px;
          }

          .article-label {
            font-size: 10px;
          }

          .article-value {
            font-size: 13px;
            word-break: break-word;
          }

          .product-price {
            text-align: center;
            padding: 12px;
            background: var(--background-primary);
            border-radius: 6px;
          }

          .price-value {
            font-size: 18px;
          }

          .product-actions {
            justify-content: center;
            gap: 10px;
          }

          .action-btn {
            padding: 10px 16px;
            font-size: 12px;
          }

          .info-banner {
            flex-direction: row;
            padding: 16px;
            gap: 12px;
          }

          .info-banner svg {
            width: 20px;
            height: 20px;
          }

          .info-banner-text {
            font-size: 13px;
          }
        }

        @media (max-width: 480px) {
          .back-btn span {
            display: none;
          }

          .category-title {
            font-size: 20px;
          }

          .product-row {
            padding: 14px;
          }

          .product-name {
            font-size: 14px;
          }

          .article-value {
            font-size: 12px;
          }

          .price-value {
            font-size: 16px;
          }

          .action-btn span {
            display: none;
          }

          .action-btn {
            padding: 10px 14px;
          }

          .info-banner-text {
            font-size: 12px;
          }
        }
      `}</style>
    </section>
  );
}
