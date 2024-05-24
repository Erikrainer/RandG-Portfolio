import PortfolioContainer from "./components/PortfolioContainer";
import { Outlet } from 'react-router-dom';
import Header from "./components/UI/Header"
import Footer from "./components/UI/Footer"

const App = () => {
  return (
  <>
  <PortfolioContainer />
  <Header />
  <main className="mx-3">
    <Outlet />
  </main>
  <Footer />
  </>
  );
}

export default App;
