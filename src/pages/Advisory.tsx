import AdvisoryHeroSection from '../components/AdvisoryHeroSection';
import PortfolioPerformance from '../components/PortfolioPerformance';
import AdvisoryServices from '../components/AdvisoryServices';
import SearchStocks from '../components/SearchStocks';
import DirectMarketAccess from '../components/DirectMarketAccess';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import NavigateMarket from '../components/NavigateMarket';
import Insights from '../components/Insights';
import CTABanner from '../components/CTABanner';
import FAQ from '../components/FAQ';

const Advisory = () => {
  return (
    <main>
      <AdvisoryHeroSection />
      <PortfolioPerformance />
      <AdvisoryServices />
      <SearchStocks />
      <DirectMarketAccess />
      <Services />
      <WhyChooseUs />
      <NavigateMarket />
      <Insights />
      <CTABanner />
      <FAQ />
    </main>
  );
};

export default Advisory;
