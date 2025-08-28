import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Categories from "@/components/Categories";
import BestSellers from "@/components/BestSellers";
import FlashDeals from "@/components/FlashDeals";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <Categories />
        <BestSellers />
        <FlashDeals />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
