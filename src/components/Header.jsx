import { Link, useLocation } from 'react-router-dom';
import { FaGithub, FaHome, FaInfoCircle, FaBriefcase,  FaEnvelope} from 'react-icons/fa';
import "./style.css"
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="collapse navbar-collapse justify-content-between">
    <h1 className="navbar-brand m-4 font-weight-bold" id="headerTitle">Erik Gontijo</h1>
    <ul className="navbar-nav">
      <li className="nav-item m-5">
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          <FaHome size={30} color="white" />
        </Link>
      </li>
      <li className="nav-item m-5">
        <Link
          to="/About"
          className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
        >
          <FaInfoCircle size={30} color="white" />
        </Link>
      </li>
      <li className="nav-item m-5">
        <Link
          to="/Project"
          className={currentPage === '/Project' ? 'nav-link active' : 'nav-link'}
        >
          <FaBriefcase size={30} color="white" />
        </Link>
      </li>
      <li className="nav-item m-5">
        <Link
          to="/Contact"
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          <FaEnvelope size={30} color="white" />
        </Link>
      </li>
    </ul>
    <a className="m-4" id="gitHub" href="https://github.com/Erikrainer" target="_blank" rel="noopener noreferrer">
      <FaGithub size={50} style={{ color: 'white' }} />
    </a>
    </div>
    </nav>
  );
}

export default NavTabs;