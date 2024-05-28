import { FaGithub, FaLink, FaVideo} from 'react-icons/fa';
import React, { useState } from 'react';
import ProjectCard from "../Utils/SmallProjectCard";
import BigProjectCard from '../Utils/BigProjectCard';
import "./ProjectPage.css"
function ProjectPage() {
  const [currentPage, setCurrentPage] = useState(1);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Function to render cards based on current page
  const renderCards = () => {
    switch (currentPage) {
      case 1:
        return (
          <>
            {/* Render first set of cards */}
            <BigProjectCard
              title="Battle For Employment"
              imageName="battleForEmployment.png"
              description="Prepare for an epic coding showdown! Master HTML, JavaScript, and more to determine your fate. In a world where enemies guard your goal, wield code as your weapon. Answer challenging questions and conquer with every correct line. Arm yourself with knowledge and emerge victorious!"
              siteLink="https://battle-for-employment.onrender.com/"
              githubLink="https://github.com/CoGoaring/battle-for-employment"
            />
            <div className="row">
        {currentPage === 1 && (
          <>
            <ProjectCard 
              title="RandGBetterTextEditor"
              imageName="RandGBetterTextEditor.png"
              siteLink="https://randgbettertexteditor.onrender.com/"
              githubLink="https://github.com/Erikrainer/RandGBetterTextEditor"
            />
            <ProjectCard 
              title="RandG SocialNetwork"
              imageName="RandG-SocialNetwork.png"
              siteVideo="https://www.youtube.com/watch?v=9N03P2cJ-4g"
              githubLink=" https://github.com/Erikrainer/RandG-SocialNetwork"
            />
            <ProjectCard 
              title="RandG HexValue"
              imageName="RandGHexValue.png"
              githubLink="https://gist.github.com/Erikrainer/c5d9cd09d4a4a6087f4bee6b27d56f6d"
            />
            <ProjectCard 
              title="RandG BlogPost"
              imageName="RandGBlogpost.png"
              siteLink=" https://randg-blogpost.onrender.com/"
              githubLink="https://github.com/Erikrainer/RandG-BlogPost"
            />
            <ProjectCard 
              title="RandG E commerce"
              imageName="RandGECommerce.png"
              siteVideo="https://youtu.be/nbOJKyJZl-A"
              githubLink="https://github.com/Erikrainer/RandG-E-commerce"
            />
            <ProjectCard 
              title="RandGCompany"
              imageName="RandGCompany.png"
              siteVideo="https://youtu.be/ODy1kA3qj7U"
              githubLink="https://github.com/Erikrainer/RandGCompany"
            />
            <ProjectCard 
              title="backEndNoteTaker"
              imageName="backEndNoteTaker.png"
              siteLink="https://backendnotetaker.onrender.com/"
              githubLink="https://github.com/Erikrainer/backEndNoteTaker"
            />
            <ProjectCard 
              title="LogoCreator"
              imageName="logoCreator.gif"
              siteVideo="https://www.youtube.com/watch?v=JKCg0m2nvX0"
              githubLink="https://github.com/Erikrainer/logoCreator"
            />    
            <ProjectCard 
              title="readmeAutomator"
              imageName="readmeAutomator.gif"
              siteVideo="https://www.youtube.com/watch?v=R0VuPYHrhj8"
              githubLink="https://github.com/Erikrainer/readmeAutomator"
            />     
          </>
        )}
      </div>
          </>
        );
      case 2:
        return (
          <>
          {/* Render second set of cards */}
            <BigProjectCard
              title="Gifs and Giggles"
              imageName="gifs-n-giggles.gif"
              description="This is a webapp that allows users to choose a genre of jokes and gifs to be displayed. The user can choose to display a different gif by selecting the corresponding button below the Gif. The modal allows the user to choose between pun, christmas, programming, spooky, and misc."
              siteLink="https://ccreed86.github.io/gifs-n-giggles/"
              githubLink="https://github.com/ccreed86/gifs-n-giggles"
            />
            <div className="row">
        {currentPage === 2 && (
          <>
            <ProjectCard 
              title="RainerWeatherDashboard"
              imageName="RainerWeatherDashboard.gif"
              siteLink="https://erikrainer.github.io/rainerWeatherDashboard/"
              githubLink="https://github.com/Erikrainer/rainerWeatherDashboard"
            />
            <ProjectCard 
              title="ProjectManagerAPI"
              imageName="TaskBoard.gif"
              siteLink="https://erikrainer.github.io/projectManagerAPI/"
              githubLink="https://github.com/Erikrainer/projectManagerAPILinks"
            />
            <ProjectCard 
              title="CaffeCodeBlog"
              imageName="cafeCodeBlog.gif"
              siteLink="https://erikrainer.github.io/caffeCodeBlog/"
              githubLink="https://github.com/Erikrainer/caffeCodeBlog"
            />
            <ProjectCard 
              title="PayrollTracker"
              imageName="EmployeePayrollTracker.gif"
              siteLink="https://erikrainer.github.io/payrollTracker/"
              githubLink="https://github.com/Erikrainer/payrollTracker"
            />
            <ProjectCard 
              title="Erik Rainer ShowCase"
              imageName="erikrainerShowcase.gif"
              siteLink="https://erikrainer.github.io/erikrainer-showcase/"
              githubLink="https://github.com/Erikrainer/erikrainer-showcase"
            />
            <ProjectCard 
              title="Horiseon Challenge"
              imageName="horiseon.png"
              siteLink="https://erikrainer.github.io/horiseon-challenge/"
              githubLink="https://github.com/Erikrainer/horiseon-challenge"
            />
            <ProjectCard 
              title="Prework Study Guide"
              imageName="prework.png"
              siteLink="https://erikrainer.github.io/prework-study-guide/"
              githubLink="https://github.com/Erikrainer/prework-study-guide"
            />
          </>
        )}
      </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <main className="main-container">
      {renderCards()}

      {/* Pagination */}
      <nav>
      <ul className="pagination pagination-lg">
        <li className="page-item">
          <button
            className="page-link"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>
        <li className={`page-item ${currentPage === 1 ? 'active' : ''}`}>
          <button className="page-link" onClick={() => handlePageChange(1)}>1</button>
        </li>
        <li className={`page-item ${currentPage === 2 ? 'active' : ''}`}>
          <button className="page-link" onClick={() => handlePageChange(2)}>2</button>
        </li>
        <li className="page-item">
          <button 
            className="page-link"
            disabled={currentPage === 2}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
    </main>

    
  );
}

export default ProjectPage;