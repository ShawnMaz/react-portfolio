import './App.css';
import Nav from './Components/Nav';
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
    <div>
      <Nav navLinks = {navLinks} currentNavLink={currentNavLink} setCurrentNavLink={setCurrentNavLink}></Nav>
    </div>
  );
}

export default App;
