import { FaGithub } from 'react-icons/fa';
import Nav from './Nav';

function Header(){
return(
<div>
<h1 className="titleHeader">Erik Gontijo</h1>
<div className="navLinks">
<Nav />
</div>
<a className="gitHub"href="https://github.com/Erikrainer" target="_blank" rel="noopener noreferrer">
      <FaGithub size={40} style={{ color: '#000' }} />
</a>
</div>
)
}

export default Header;