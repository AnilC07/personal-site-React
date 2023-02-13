import "./App.css";
import Divider from "./components/Divider";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/Sections/About/About";
import Realisations from "./components/Sections/Realisations/Realisations";
import Experiences from "./components/Sections/Experiences/Experiences";
import Contact from "./components/Sections/Contact/Contact";

import UserService from "./Ctx";

function App() {

  return (
    <>
      
      <Header />
      <main id="main">
        <About />
        <Divider />
        <Realisations />
        <Divider />
        <Experiences />
        <Divider />
        <UserService>
          <Contact />
        </UserService>
      </main>

      <footer id="footer"></footer>
    </>
  );
}

export default App;
