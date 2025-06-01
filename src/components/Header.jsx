import { Link, useLocation } from 'react-router-dom';
import { FaGithub,FaGamepad , FaHome, FaInfoCircle, FaBriefcase,  FaEnvelope, FaFile} from 'react-icons/fa';
import "./style.css"
function NavTabs() {
  const currentPage = useLocation().pathname;
  return (
    <nav className="navbar-expand-sm border-info border-bottom border-1" id="navBar">
      <div className="navbar-collapse justify-content-between">
        <Link
        to="/"
        >
       <h1 className="navbar-brand m-3 fw-bold" id="headerTitle">Borges&Gontijo Cleaning</h1>
    </Link>
    <ul className="navbar-nav">
      <li className="nav-item m-5" id="icons">
        <Link
          to="/About"
        >
          <FaInfoCircle size={35} color={currentPage === '/About' ? "#2e94b9" : "#475053"} />
        </Link>
      </li>
      <li className="nav-item m-5" id="icons">
        <Link
          to="/JavaScriptProject"
        >
          <FaBriefcase size={35} color={currentPage === '/JavaScriptProject' ? "#2e94b9" : "#475053"} />
        </Link>
      </li>
      <li className="nav-item m-5" id="icons">
        <Link
          to="/UnrealProject"
        >
          <FaGamepad size={35} color={currentPage === '/UnrealProject' ? "#2e94b9" : "#475053"} />
        </Link>
      </li>
    </ul>
      <a href="/contact" className="btn-clean mt-3">GET A QUICK QUOTE</a>
    </div>
    </nav>
  );
}

export default NavTabs;