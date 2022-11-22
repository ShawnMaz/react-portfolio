import './App.css';
import Nav from './Components/Nav';
import AboutMe from './Components/AboutMe';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Resume from './Components/Resume';
import Footer from './Components/Footer';
import {useState} from 'react';

function App() {
  // Nav bar links
  const [navLinks] = useState([
    {
      name:'About Me'
    },
    {
      name:'Portfolio'
    },
    {
      name:'Contact'
    },
    {
      name:'Resume'
    }
  ]);

  // Default state of the Nav bar
  const [currentNavLink, setCurrentNavLink] = useState(navLinks[0]);
  
  return (
    <div className='app-body'>
      <Nav navLinks = {navLinks} currentNavLink={currentNavLink} setCurrentNavLink={setCurrentNavLink}></Nav>
      <main className='content'>
        {
          currentNavLink.name === 'About Me' && <AboutMe/>
        }
        {
          currentNavLink.name === 'Portfolio' && <Portfolio/>
        }
        {
          currentNavLink.name === 'Contact' && <Contact/>
        }
        {
          currentNavLink.name === 'Resume' && <Resume/>
        }
      </main>
      <Footer/>
    </div>
  );
}

export default App;
