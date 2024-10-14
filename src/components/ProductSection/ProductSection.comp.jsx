import { ProductCard } from "../ProductCard.comp";
import { SectionTitles } from "../SectionTitles.comp";
import "./ProductSection.style.css";

export function ProductSection() {
  return (
    <>
      <section className="product-section">
        <SectionTitles />
        <div className="products-container">
          <ProductCard imgpath={"/schuh1.webp"} />
          <ProductCard imgpath={"/schuh2.webp"} />
          <ProductCard imgpath={"/schuh3.webp"} />
        </div>
      </section>
    </>
  );
}
