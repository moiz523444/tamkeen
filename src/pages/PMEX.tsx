import PMEXHeroSection from '../components/PMEXHeroSection';
import MarketOverview from '../components/MarketOverview';
import MarketWatch from '../components/MarketWatch';
import SearchStocks from '../components/SearchStocks';
import DirectMarketAccess from '../components/DirectMarketAccess';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import NavigateMarket from '../components/NavigateMarket';
import Insights from '../components/Insights';
import CTABanner from '../components/CTABanner';
import FAQ from '../components/FAQ';

const PMEX = () => {
  return (
    <main>
      <PMEXHeroSection />
      <MarketOverview />
      <MarketWatch />
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

export default PMEX;
