import "./Footer.style.css";

export function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="logo-container">
          <h3>BytersLab</h3>
        </div>
        <div className="footer-links-container">
          <div className="footer-links">
            <h4>Shop</h4>
            <ul>
              <a href="#">All Products</a>
              <a href="#">Men</a>
              <a href="#">Woman</a>
              <a href="#">Child</a>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Support</h4>
            <ul>
              <a href="#">About Us</a>
              <a href="#">Chat</a>
              <a href="#">Jobs</a>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
