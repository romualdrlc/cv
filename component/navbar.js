import Link from "next/link";
const Navbar = () => (
  <nav class="navbar sticky-top navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="/picnavbar.jpeg" style={{ width: 150, height: 100 }} />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a
              href="mailto:romuald.lecorroller@gmail.com"
              class="nav-link active"
              aria-current="page"
            >
              Mail me
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              My Projects
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a class="dropdown-item" href="#">
                  Spotify
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Next js et MongoDb
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Instasport
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
export default Navbar;
