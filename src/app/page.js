import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import TechStack from "../components/TechStack";
import Work from "../components/Work";
import Experience from "../components/Experience";
import Awards from "../components/Awards";
import Credentials from "../components/Credentials";
import Services from "../components/Services";
import FeedbackProcess from "../components/FeedbackProcess";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ChatWidget from "../components/ChatWidget";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col bg-[var(--bg-deep)] text-[var(--text-primary)]">
      {/* 4.1 Navbar */}
      <Navbar />

      {/* 4.2 Hero Section — Centered Photo Layout */}
      <Hero />

      {/* 4.3 About Section */}
      <About />

      {/* 4.4 Tech Stack Section */}
      <TechStack />

      {/* 4.5 Work / Projects Section */}
      <Work />

      {/* 4.6 Experience Section */}
      <Experience />

      {/* Awards Section */}
      <Awards />

      {/* Recognition & Credentials Section */}
      <Credentials />

      {/* Services & Process Section */}
      <Services />

      {/* Feedback & Next Steps Section */}
      <FeedbackProcess />

      {/* 4.7 Contact Section */}
      <Contact />

      {/* 4.8 Footer */}
      <Footer />

      {/* 4.9 AI Portfolio Assistant */}
      <ChatWidget />
    </main>
  );
}
