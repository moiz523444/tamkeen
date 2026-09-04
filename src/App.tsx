import React from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MarketOverview from './components/MarketOverview';
import MarketWatch from './components/MarketWatch';
import SearchStocks from './components/SearchStocks';
import DirectMarketAccess from './components/DirectMarketAccess';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import NavigateMarket from './components/NavigateMarket';
import Insights from './components/Insights';
import CTABanner from './components/CTABanner';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      <TopBar />
      <Navbar />
      <main>
        <HeroSection />
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
      <Footer />
    </div>
  );
}

export default App;
