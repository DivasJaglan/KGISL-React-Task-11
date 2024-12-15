import { Outlet, Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow">
        <div className="container">
          <Link to="/" className="navbar-brand fw-bold fs-4">
            Jaglan Shop
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link">
                  Cart
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-primary ms-2">Login</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
