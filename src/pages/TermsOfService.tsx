import Navbar from "@/components/Navbar";
import BackToHome from "@/components/BackToHome";
import Footer from "@/components/Footer";

const TermsOfService = () => (
  <div className="min-h-screen">
    <Navbar />
    <BackToHome />
    <main className="pt-24 pb-20">
      <section className="container max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground mb-6">Terms of Service</h1>
        <div className="prose prose-green max-w-none text-muted-foreground space-y-4">
          <p>By using Zenxity's services, you agree to these terms. Please read them carefully.</p>
          <h3 className="text-foreground font-semibold">Services</h3>
          <p>Zenxity provides managed farming services on registered agricultural land. We match landowners with verified farmers and manage the farming process.</p>
          <h3 className="text-foreground font-semibold">Your Responsibilities</h3>
          <p>You must provide accurate land information and valid documentation. The land must be legally owned or authorized for farming use by you.</p>
          <h3 className="text-foreground font-semibold">Payments & Cancellation</h3>
          <p>Subscription fees are billed monthly or annually. You can cancel anytime with no lock-in. Refunds are processed as per our refund policy.</p>
          <h3 className="text-foreground font-semibold">Limitation of Liability</h3>
          <p>Zenxity is not liable for crop failure due to natural disasters, weather events, or circumstances beyond our control. We commit to best-effort farming practices.</p>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default TermsOfService;
