import React, { useState } from "react";
import { Header } from "./components/header";
import { HeroSection } from "./components/hero-section";
import { ProductsSection } from "./components/products-section";
import { AdvantagesSection } from "./components/advantages-section";
import { LogosSection } from "./components/logos-section";
import { PresentationSection } from "./components/presentation-section";
import { SolutionsSection } from "./components/solutions-section";
import { ContactSection } from "./components/contact-section";
import { ProductsOfferSection } from "./components/products-offer-section";
import { Footer } from "./components/footer";
import { TelegramWidget } from "./components/telegram-widget";
import { InfoPopup } from "./components/info-popup";

type Page = "home" | "catalog" | "about" | "delivery" | "payment" | "contacts";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [infoPopupOpen, setInfoPopupOpen] = useState(false);
  const [infoPopupContent, setInfoPopupContent] = useState({ title: "", description: "" });

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openInfoPopup = (title: string, description: string) => {
    setInfoPopupContent({ title, description });
    setInfoPopupOpen(true);
  };

  return (
    <div className="app">
      <Header
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenInfo={openInfoPopup}
      />
      <main>
        {currentPage === "home" && (
          <>
            <HeroSection />
            <ProductsSection onSelectCategory={() => navigateTo("catalog")} />
            <AdvantagesSection />
            <LogosSection />
            <SolutionsSection />
            <ContactSection />
            <ProductsOfferSection />
            <PresentationSection />
          </>
        )}
        {currentPage === "catalog" && <ProductsSection onSelectCategory={() => {}} />}
        {currentPage === "about" && <PresentationSection />}
        {currentPage === "delivery" && <ContactSection />}
        {currentPage === "payment" && <ContactSection />}
        {currentPage === "contacts" && <ContactSection />}
      </main>
      <Footer />
      <TelegramWidget />
      <InfoPopup
        isOpen={infoPopupOpen}
        onClose={() => setInfoPopupOpen(false)}
        content={infoPopupContent}
      />

      <style>{`
        .app {
          min-height: 100vh;
          background: var(--background-primary);
        }

        main {
          padding-top: 72px;
        }

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
}
