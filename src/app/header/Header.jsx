import "./Header.scss";

const Header = () => {
  return (
    <nav className="dkHeader navbar navbar-expand-lg navbar-dark bg-dark py-4">
      <div className="container-fluid">
        <a className="navbar-brand text-uppercase" href="/">
          AFI Tech
        </a>
        <button
          className="btn btn-link"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-expanded="false"
          aria-label="Toggle offcanvas navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
};

export default Header;
