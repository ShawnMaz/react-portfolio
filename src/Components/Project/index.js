import {useState} from 'react';

function Project(props){
    const [hoverState, setHoverState] = useState(false);

    return(
        <section className="container">
            <div className="row">
                {props.projects.map((project, i) => (
                    <div 
                        className="col-md-12 col-lg-5 p-0 my-3 mx-auto card"
                        onMouseOver={() => setHoverState(true)}
                        onMouseOut={() => setHoverState(false)}
                        // onClick={() => setHoverState(!hoverState)}
                        key={`card-${project.title}`}
                    >
                        <img 
                            src={require(`../../assets/images/${project.image}`)} 
                            className={`img-fluid border border-1 border-dark border-opacity-25 rounded-2 shadow-lg ${hoverState && 'img-blur'}`} 
                            alt="..." 
                        />
                        <div 
                            className={`card-img-overlay ${hoverState ? 'overlay-visible' : 'overlay-invisible'}`} 
                        >
                            <h5 className="card-title my-3">{project.name}</h5>
                            <p className="card-text">{project.techStack}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Project;