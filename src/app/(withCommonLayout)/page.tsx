import FeatureVideoSection from "@/components/UI/home/feature-video-section/FeatureVideoSection";
import HeroSection from "@/components/UI/home/hero-section/HeroSection";
import HobbySection from "@/components/UI/home/hobby-section/HobbySection";
import WelcomeSection from "@/components/UI/home/welcome-section/WelcomeSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <HobbySection />
      <FeatureVideoSection />
    </>
  );
};

export default HomePage;
