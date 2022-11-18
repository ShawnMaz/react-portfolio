import {useState} from 'react';
import Project from '../Project';

function Portfolio(){
    const [projects] = useState([
        {
            name:'Giglr',
            image:'Giglr.png',
            deployedUrl:'https://giglr.herokuapp.com/',
            githubRepo:'https://github.com/KeeveRW11/giglr',
            techStack:'MySQL, Express, Node & Bootstrap'
        }, 
        {
            name:'Undercurrents',
            image:'Undercurrents.png',
            deployedUrl:'https://helpvisa.github.io/undercurrents/',
            githubRepo:'https://github.com/helpvisa/undercurrents',
            techStack:'JavaScript, jQuery & Bulma'
        }, 
        {
            name:'Weather Dashboard',
            image:'weather-dashboard.png', 
            deployedUrl:'https://shawnmaz.github.io/weather-forecast/',
            githubRepo:'https://github.com/ShawnMaz/weather-forecast',
            techStack:'HTML, Bootstrap, JavaScript'
        }
    ]);
    return(
        <section>
            <Project  projects={projects}/>
        </section>
    );
}

export default Portfolio;