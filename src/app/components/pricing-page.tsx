import { Seo } from "./Seo";
import { Navbar } from "./navbar";
import { Pricing } from "./pricing";
import { Footer } from "./footer";

export function PricingPage() {
  return (
    <>
      <Seo
        title="Orbit Pricing — Simple, Transparent Plans for Service Businesses"
        description="See Orbit's pricing. Start free with up to 10 clients, or upgrade to Pro for $12/month with unlimited clients, AI assistant, online payments, and more."
        canonical="https://getorbitcrm.com/pricing"
      />
      <Navbar />
      <div className="min-h-screen bg-white pt-20">
        <Pricing />
      </div>
      <Footer />
    </>
  );
}
