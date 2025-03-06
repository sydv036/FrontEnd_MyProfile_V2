import Header from "components/layout/HeaderComponent";
import Footer from "components/layout/FooterComponent";
import { Outlet } from "react-router-dom";
// import './App.css'

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
