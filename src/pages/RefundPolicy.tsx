import Navbar from "@/components/Navbar";
import BackToHome from "@/components/BackToHome";
import Footer from "@/components/Footer";

const RefundPolicy = () => (
  <div className="min-h-screen">
    <Navbar />
    <BackToHome />
    <main className="pt-24 pb-20">
      <section className="container max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground mb-6">Refund Policy</h1>
        <div className="prose prose-green max-w-none text-muted-foreground space-y-4">
          <p>We want you to be satisfied with Zenxity's services. Here's our refund policy.</p>
          <h3 className="text-foreground font-semibold">Subscription Refunds</h3>
          <p>If you cancel within 7 days of subscribing, you'll receive a full refund. After 7 days, the current billing period will complete but no further charges will apply.</p>
          <h3 className="text-foreground font-semibold">Service Issues</h3>
          <p>If you experience service issues (missed updates, unresponsive team, etc.), contact us and we'll resolve the issue or provide a prorated refund.</p>
          <h3 className="text-foreground font-semibold">How to Request a Refund</h3>
          <p>Email hello@zenxity.in or call +91 90423 59210. Refunds are processed within 7–10 business days.</p>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default RefundPolicy;
