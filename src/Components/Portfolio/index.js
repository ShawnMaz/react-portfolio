import {useState} from 'react';
function Portfolio(){
    const [projects] = useState([
        {
            name:'Giglr',
            deployedUrl:'https://giglr.herokuapp.com/',
            githubRepo:'https://github.com/KeeveRW11/giglr',
            techStack:'MERN'
        }, 
        {
            name:'Undercurrents',
            deployedUrl:'https://helpvisa.github.io/undercurrents/',
            githubRepo:'https://github.com/helpvisa/undercurrents',
            techStack:'JavaScript, jQuery & Bulma'
        }
    ])
    return(
        <section projects={projects}>

        </section>
    );
}

export default Portfolio;