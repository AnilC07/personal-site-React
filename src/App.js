import "./App.css";
import Divider from "./components/Divider";

import Header from "./components/Header/Header";
import About from "./components/Sections/About/About";
import Realisations from "./components/Sections/Realisations/Realisations";
import Experiences from "./components/Sections/Experiences/Experiences";
import Contact from "./components/Sections/Contact/Contact";

import UserService from "./Ctx";
import Footer from "./components/Sections/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main id="main">
        <About />
        <Divider />
        <UserService>
          <Realisations />
        </UserService>
        <Divider />
        <Experiences />
        <Divider />
        <UserService>
          <Contact />
        </UserService>
      </main>
      <Footer />
    </>
  );
}

export default App;
