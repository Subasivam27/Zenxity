import Navbar from "@/components/Navbar";
import BackToHome from "@/components/BackToHome";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const ContactUs = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <BackToHome />
      <main className="pt-16">
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
