import './App.css';
import Nav from './Components/Nav';
import {useState} from 'react';

function App() {
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
  const [currentNavLink, setCurrentNavLink] = useState(navLinks[0]);
  return (
    <div>
      <Nav navLinks = {navLinks} currentNavLink={currentNavLink} setCurrentNavLink={setCurrentNavLink}></Nav>
    </div>
  );
}

export default App;
