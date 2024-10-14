import { ProductCard } from "../ProductCard.comp";
import { SectionTitles } from "../SectionTitles.comp";
import "./ProductSection.style.css";

export function ProductSection() {
  return (
    <>
      <section className="product-section">
        <SectionTitles
          title={"Check Our Products"}
          secondtitle={"Best quality of life"}
        />
        <div className="products-container">
          <ProductCard imgpath={"/schuh1.webp"} />
          <ProductCard imgpath={"/schuh2.webp"} />
          <ProductCard imgpath={"/schuh3.webp"} />
        </div>
      </section>
    </>
  );
}
