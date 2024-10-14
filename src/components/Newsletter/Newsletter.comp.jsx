import { BtnSubmit } from "../BtnSubmit.comp";
import { Forminput } from "../Forminput.comp";
import { SectionTitles } from "../SectionTitles.comp";
import "./Newsletter.style.css";

export function Newsletter() {
  return (
    <>
      <section className="newsletter-section">
        <SectionTitles
          title={"Newsletter"}
          secondtitle={"Get our best prices"}
        />
        <form className="newsletter-form">
          <Forminput />
          <BtnSubmit />
        </form>
      </section>
    </>
  );
}
