import { Header } from "./components/Header";
import { HeroBanner } from "./components/HeroBanner";
import { Categories } from "./components/Categories";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { Advantages } from "./components/Advantages";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroBanner />
      <Categories />
      <FeaturedProducts />
      <Advantages />
      <Footer />
    </div>
  );
}
