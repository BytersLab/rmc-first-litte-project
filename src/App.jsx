import "./App.css";
import { Footer } from "./components/Footer/Footer.comp.jsx";
import { Hero } from "./components/Hero/Hero.comp.jsx";
import { Navbar } from "./components/Navbar/Navbar.comp.jsx";
import { Newsletter } from "./components/Newsletter/Newsletter.comp.jsx";
import { ProductSection } from "./components/ProductSection/ProductSection.comp.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <ProductSection />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

export default App;
