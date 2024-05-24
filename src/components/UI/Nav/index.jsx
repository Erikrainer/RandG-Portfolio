import { useState } from 'react';
import './style.css';

function NavTabs({ currentPage, handlePageChange }) {
    return (
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#home"
            onClick={() => handlePageChange('Home')}
  
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Project"
            onClick={() => handlePageChange('Project')}
            //  TODO: Add a comment explaining what this logic is doing
  
            className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'}
          >
            Project
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#ContactForm"
            onClick={() => handlePageChange('ContactForm')}
  
            className={currentPage === 'ContactForm' ? 'nav-link active' : 'nav-link'}
          >
            Contact Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#About"
            //  TODO: Add a comment explaining what this logic is doing
  
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </a>
        </li>
      </ul>
    );
  }
  
  export default NavTabs;