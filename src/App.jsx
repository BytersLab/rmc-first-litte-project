import "./App.css";
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
    </>
  );
}

export default App;
