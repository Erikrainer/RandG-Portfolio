import Form from "./components/UI/Form";
import Footer from "./components/UI/Footer"
import Header from "./components/UI/Header"
import Nav from "./components/UI/Nav"
import Project from "./components/UI/Project"
import Container from "./UI/Container"
import Home from "./UI/Home"
import About from "./UI/About"
const PortfolioContainer = () => {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
          return <Home />;
        }
        if (currentPage === 'Project') {
          return <Project />;
        }
        if (currentPage === 'ContactForm') {
          return <Form />;
        }
        return <About />;
      };
      
      const handlePageChange = (page) => setCurrentPage(page);

      return (
        <div>
          <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
          <main className="mx-3">{renderPage()}</main>
        </div>
    
      );
      
};

export default PortfolioContainer;