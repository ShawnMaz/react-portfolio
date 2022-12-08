import {useState} from 'react';
import Project from '../Project';

function Portfolio(){
    const [projects] = useState([
        {
            name:"Serf's Market",
            image:'serfs-market.png',
            deployedUrl:'https://serfs-market.herokuapp.com/',
            githubRepo:'https://github.com/ShawnMaz/serfs-market',
            techStack:'MERN Stack with GraphQL'
        },
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
        },
        {
            name:'Coding Quiz',
            image:'coding-quiz.png',
            deployedUrl:'https://shawnmaz.github.io/coding-quiz/',
            githubRepo:'https://github.com/ShawnMaz/coding-quiz',
            techStack:'HTML, CSS & JavaScript'
        },
        {
            name:'Social Network API',
            image:'social-network-api.png',
            deployedUrl:'https://drive.google.com/file/d/1Y7hzS__JwlnRsbdZLG6xfrHL7OpiVMf3/view?usp=sharing',
            githubRepo:'https://github.com/ShawnMaz/SocialNetworkAPI',
            techStack:'Express, MongoDB & Node'
        }, 
        {
            name:'E-commerce API',
            image:'ecommerce-api.png',
            deployedUrl:'https://drive.google.com/file/d/1gXRhRjEjAcsXV_fE73UtN_qVNpVQqsJZ/view?usp=sharing',
            githubRepo:'https://github.com/ShawnMaz/E-commerce',
            techStack:'MySQL, Express & Node'
        }
    ]);
    return(
        <section className='d-flex flex-column align-items-center mt-3'>
            <h2>Portfolio</h2>
            <Project  projects={projects}/>
        </section>
    );
}

export default Portfolio;