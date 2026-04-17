import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Platforms from "@/components/Platforms";
import HowToPlay from "@/components/HowToPlay";
import Promo from "@/components/Promo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Featured />
      <Platforms />
      <HowToPlay />
      <Promo />
      <Footer />
    </main>
  );
};

export default Index;