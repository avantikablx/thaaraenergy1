import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import SolutionsSection from '../components/SolutionsSection';
import PartnershipSection from '../components/PartnershipSection';
import VisionSection from '../components/VisionSection';
import MissionSection from '../components/MissionSection';
import IndustrySection from '../components/IndustrySection';
import CTASection from '../components/CTASection';
const Home = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-black">
      <HeroSection />
      <SolutionsSection />
      <PartnershipSection />
      <VisionSection />
      <MissionSection />
      <IndustrySection />
      <CTASection />
      <Footer />
    </div>
  );
};


export default Home;