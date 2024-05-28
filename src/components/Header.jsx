import { Link, useLocation } from 'react-router-dom';
import { FaGithub, FaHome, FaInfoCircle, FaBriefcase,  FaEnvelope, FaFile} from 'react-icons/fa';
import "./style.css"
function NavTabs() {
  const currentPage = useLocation().pathname;
  return (
    <nav className="navbar-expand-sm border-info border-bottom border-1" id="navBar">
      <div className="navbar-collapse justify-content-between">
    <h1 className="navbar-brand m-3 fw-bold text-uppercase" id="headerTitle">Erik Gontijo</h1>
    <ul className="navbar-nav">
      <li className="nav-item m-5" id="icons">
        <Link
          to="/"
        >
          <FaHome size={35} color={currentPage === '/' ? "#2e94b9" : "#475053"} />
        </Link>
      </li>
      <li className="nav-item m-5" id="icons">
        <Link
          to="/About"
        >
          <FaInfoCircle size={35} color={currentPage === '/About' ? "#2e94b9" : "#475053"} />
        </Link>
      </li>
      <li className="nav-item m-5" id="icons">
        <Link
          to="/Project"
        >
          <FaBriefcase size={35} color={currentPage === '/Project' ? "#2e94b9" : "#475053"} />
        </Link>
      </li>
      <li className="nav-item m-5" id="icons">
        <Link
          to="/Contact"
        >
          <FaEnvelope size={35} color={currentPage === '/Contact' ? "#2e94b9" : "#475053"} />
        </Link>
        </li>
        <li className="nav-item m-5" id="icons">
        <Link
          to="/Resume"
        >
          <FaFile size={35} color={currentPage === '/Resume' ? "#2e94b9" : "#475053"} />
        </Link>
      </li>
    </ul>
    <a className="m-4" id="icons" href="https://github.com/Erikrainer" target="_blank" rel="noopener noreferrer">
      <FaGithub size={50} style={{ color: '#2e94b9' }} />
    </a>
    </div>
    </nav>
  );
}

export default NavTabs;