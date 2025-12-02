import HeroSection from '../components/landing/HeroSection';
import HowItWorksSection from '../components/landing/HowItWorksSection';
import FeaturesSection from '../components/landing/FeaturesSection';
import CTASection from '../components/landing/CTASection';

const LandingPage = () => {
    return (
        <div className="bg-white">
            <HeroSection />
            <HowItWorksSection />
            <FeaturesSection />
            <CTASection />
        </div>
    );
};

export default LandingPage;
