import { FaGithub } from 'react-icons/fa';

function Header(){
return(
<div>
<h1>Erik Gontijo</h1>
<a href="https://github.com/Erikrainer" target="_blank" rel="noopener noreferrer">
      <FaGithub size={40} style={{ color: '#000' }} />
</a>
</div>
)
}

export default Header;