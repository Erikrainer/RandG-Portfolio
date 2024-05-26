import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router';
import Header from "./components/Header"
import Footer from "./components/Footer"
import { CSSTransition } from 'react-transition-group';
import "./style.css"
function App() {
  const location = useLocation();
  console.log(location.pathname)
  return (
    <>
    <Header/>
      <main className="mx-3">
      <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
        <Outlet />
      </CSSTransition>
      </main>
      <Footer />
    </>
  );
}

export default App;
