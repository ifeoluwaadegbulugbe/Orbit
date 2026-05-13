import { AnnouncementBar } from "./components/announcement-bar";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { ProductPreview } from "./components/product-preview";
import { TabbedFeatures } from "./components/tabbed-features";
import { AIAssistant } from "./components/ai-assistant";
import { OnlinePayments } from "./components/online-payments";
import { Analytics } from "./components/analytics";
import { Automation } from "./components/automation";
import { Pricing } from "./components/pricing";
import { FAQ } from "./components/faq";
import { CTA } from "./components/cta";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <ProductPreview />
      <TabbedFeatures />
      <AIAssistant />
      <OnlinePayments />
      <Analytics />
      <Automation />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}