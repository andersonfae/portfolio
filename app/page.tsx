import { Header } from "./components/Header/Header";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { TransacationSection } from "./components/TransacationSection/TransacationSection";
import { Footer } from "./components/Footer/Footer";
import { MainContent } from "./components/MainContent/MainContent";
export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-900">
      <Header />
      <HeroSection />
      <TransacationSection />
      <MainContent />
      <Footer />
    </div>
  );
}
