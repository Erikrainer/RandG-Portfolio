import "./ResumePage.css"
import { FaFile } from 'react-icons/fa';

const ResumePage = () => {
    return (
        <div id="resumeContainer" className= "container">
        <a href="./ErikGontijoResume.pdf" download>
          <button type="button" className="btn btn-dark btn-lg mb-5" >Download Resume<FaFile className="m-2" size={20} color={"white"}/></button>
        </a>
        <li className="list-group-item"><span id="resumeTitle">Languages</span>
        <ul class="list-group">
            <li className="list-group-item">
                HTML5
            </li>
            <li className="list-group-item">
                CSS3
            </li>
            <li className="list-group-item">
                JavaScript
            </li>
            <li className="list-group-item">
                C++
            </li>
        </ul>
        </li>
            <li className="mt-5 list-group-item"><span id="resumeTitle">Tecnologies</span>
            <ul className="list-group">
            <li className="list-group-item">
                jQuery
            </li>
            <li className="list-group-item">
                API
            </li>
            <li className="list-group-item">
                Bootstrap
            </li>
            <li className="list-group-item">
                Node.js
            </li>
            <li className="list-group-item">
                Express.js
            </li>
            <li className="list-group-item">
                Handlebars
            </li>
            <li className="list-group-item">
                React
            </li>
            <li className="list-group-item">
                PostgreSQL
            </li>
            <li className="list-group-item">
                NoSQL
            </li>
            <li className="list-group-item">
                SQL
            </li>
            <li className="list-group-item">
                MongoDB
            </li>
            <li className="list-group-item">
                JSON
            </li>
            <li className="list-group-item">
                AJAX
            </li>
            <li className="list-group-item">
                MERN
            </li>
            <li className="list-group-item">
                GraphQL
            </li>
            <li className="list-group-item">
                Next.js
            </li>
            </ul>
        </li>
        <li className="mt-5 list-group-item"><span id="resumeTitle">Skills</span>
        <ul className="list-group">
            <li className="list-group-item">
                Team Collaboration
            </li>
            <li className="list-group-item">
                Agile Development
            </li>
            <li className="list-group-item">
                Project Demonstration
            </li>
            <li className="list-group-item">
                Storytelling
            </li>
            <li className="list-group-item">
                Object-oriented Programming
            </li>
            <li className="list-group-item">
                MVC Paradigm
            </li>
            <li className="list-group-item">
                Testing
            </li>
            <li className="list-group-item">
                Computer Science Fundamentals
            </li>
            <li className="list-group-item">
                Creative Thinking
            </li>
            <li className="list-group-item">
                Feasibility
            </li>
            <li className="list-group-item">
                Object-Relational Mapping
            </li>
            <li className="list-group-item">
                Model-View-Controller
            </li>
            <li className="list-group-item">
                Progressive Web App (PWA)
            </li>
        </ul>
        </li>
      </div>
    );
}

export default ResumePage;