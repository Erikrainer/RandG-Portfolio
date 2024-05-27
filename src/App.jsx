import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { CSSTransition } from 'react-transition-group';
import "./style.css";

function App() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="app-container d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
          <Outlet />
        </CSSTransition>
      </main>
      <Footer />
    </div>
  );
}

export default App;
