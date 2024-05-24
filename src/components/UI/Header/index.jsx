import './style.css';
import Nav from "../Nav"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Header(){
<div>
<h1>Erik Gontijo</h1>
<Nav />
    <div className="App">
        <a href="https://github.com/Erikrainer" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
    </div>
</div>
}

export default Header;