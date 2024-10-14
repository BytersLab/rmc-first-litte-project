import "./Navbar.style.css";

export function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-part nav-left-side">
          <li>BytersLab</li>
          <li>Products</li>
          <li>Support</li>
        </div>
        <div className="nav-part nav-right-side">
          <li>Instagram</li>
          <li>Twitter</li>
        </div>
      </nav>
    </>
  );
}
