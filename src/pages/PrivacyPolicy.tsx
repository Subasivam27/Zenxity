import Navbar from "@/components/Navbar";
import BackToHome from "@/components/BackToHome";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => (
  <div className="min-h-screen">
    <Navbar />
    <BackToHome />
    <main className="pt-24 pb-20">
      <section className="container max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground mb-6">Privacy Policy</h1>
        <div className="prose prose-green max-w-none text-muted-foreground space-y-4">
          <p>At Zenxity Agri Pvt. Ltd., we value your privacy. This policy explains how we collect, use, and protect your personal information.</p>
          <h3 className="text-foreground font-semibold">Information We Collect</h3>
          <p>We collect your name, phone number, email, land details, and location when you register or contact us. We may also collect usage data to improve our services.</p>
          <h3 className="text-foreground font-semibold">How We Use Your Information</h3>
          <p>Your information is used to provide farming services, match you with farmers, send updates, process payments, and improve our platform.</p>
          <h3 className="text-foreground font-semibold">Data Protection</h3>
          <p>We use industry-standard security measures to protect your data. We never sell your personal information to third parties.</p>
          <h3 className="text-foreground font-semibold">Contact</h3>
          <p>For privacy concerns, email us at hello@zenxity.in or call +91 90423 59210.</p>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default PrivacyPolicy;
