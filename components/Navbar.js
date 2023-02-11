import { Link } from "react-router-dom";
import Logo from  "./../images/logo.svg";

const Navbar = function () {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" href="#">
          <img src={Logo} />
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/account">
              Account
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/my-devices">
              My Devices
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/tech-services">
              Tech Services
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/file-a-claim">
              File a claim
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
