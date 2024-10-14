import { BtnCTA } from "../BtnCTA.comp";
import "./Hero.style.css";

export function Hero() {
  return (
    <>
      <header className="hero-section">
        <div className="hero-titles">
          <h1>BytersLab</h1>
          <h3>The Lab for Devs</h3>
        </div>
        <BtnCTA />
      </header>
    </>
  );
}
