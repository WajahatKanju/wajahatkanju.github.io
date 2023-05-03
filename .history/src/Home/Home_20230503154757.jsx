import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import './styles/Home.scss';

function Home() {
  return (
    <div className="home">
      <Header />
      <main>
        <section className="hero">
          <h1>Welcome to My Portfolio</h1>
          <p>I am a full-stack web developer.</p>
          <button>Contact Me</button>
        </section>
        <section className="services">
          <h2>Services</h2>
          <ul>
            <li>Web Design</li>
            <li>Web Development</li>
            <li>Mobile App Development</li>
          </ul>
        </section>
        <section className="projects">
          <h2>Projects</h2>
          <ul>
            <li>Project 1</li>
            <li>Project 2</li>
            <li>Project 3</li>
          </ul>
        </section>
        <section className="testimonials">
          <h2>Testimonials</h2>
          <ul>
            <li>Testimonial 1</li>
            <li>Testimonial 2</li>
            <li>Testimonial 3</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;