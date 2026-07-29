import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Seo } from "./components/Seo";
import { AnnouncementBar } from "./components/announcement-bar";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { ProductPreview } from "./components/product-preview";
import { TabbedFeatures } from "./components/tabbed-features";
import { AIAssistant } from "./components/ai-assistant";
import { OnlinePayments } from "./components/online-payments";
import { Analytics } from "./components/analytics";
import { Automation } from "./components/automation";
import { IndustryStrip } from "./components/industry-strip";
import { Pricing } from "./components/pricing";
import { FAQ } from "./components/faq";
import { CTA } from "./components/cta";
import { Footer } from "./components/footer";
import { ScrollToTop } from "./components/scroll-to-top";
import { Privacy } from "./components/privacy";
import { Terms } from "./components/terms";
import { PricingPage } from "./components/pricing-page";
import { BookingPage } from "./components/booking-page";
import { PaymentsPage } from "./components/payments-page";

function HomePage() {
  return (
    <>
      <Seo
        title="Orbit: Business Management Software for Service Businesses"
        description="Orbit is the AI-powered business operating system for service businesses. Manage clients, bookings, invoicing, and payments, all in one workspace."
        canonical="https://www.getorbitcrm.com/"
      />
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <ProductPreview />
      <TabbedFeatures />
      <AIAssistant />
      <OnlinePayments />
      <Analytics />
      <Automation />
      <IndustryStrip />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white antialiased">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/features/booking" element={<BookingPage />} />
          <Route path="/features/payments" element={<PaymentsPage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </div>
    </Router>
  );
}