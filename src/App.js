// import logo from './logo.svg';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import AboutMe from './components/AboutMe';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Social from './components/Social';

import './App.css';


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <AboutMe />
      <Portfolio />
      <Experience />
      <Contact />

      <Social/>
    </div>
  );
}

export default App;
