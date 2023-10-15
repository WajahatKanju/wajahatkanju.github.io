import "./styles/App.scss";
import Header from "./Header";
import Navigation from "./Navigation";
import About from "./About";
import ContactForm from "./ContactForm";
import Skills from "./Skills";
import Projects from "./Projects";
import Accomplishment from "./Accomplishments";

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Accomplishment />
      <ContactForm />
    </>
  );
}

export default App;
