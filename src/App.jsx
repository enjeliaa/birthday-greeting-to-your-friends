import HeroSection from "./components/HeroSection";
import BirthdayCard from "./components/BirthdayCard";
import Cake from "./components/Cake";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";

export default function App() {
  return (
    <div className="app">
      <MusicPlayer />
      <HeroSection />
      <BirthdayCard />
      <Cake />
      <Footer />
    </div>
  );
}
