import profileImage from '../../assets/images/profile-photo.jpg';

function AboutMe(){
    return(
        <section className="container d-flex flex-column align-items-center">
            <img className='hero-img my-3' src={profileImage} alt='Shantanu Mazumder'/>
            <p className='fs-1 fw-semibold mb-0'>Shantanu Mazumder</p>
            <h6 className='fw-semibold'>Aspiring Full Stack Web Developer</h6>
            <p>Learning new skills has always been my passion. I started out my career as a Manufacturing Engineer in the Metal Fabrication industry, then moved into the Optics industry and now into Web Development. Being able to solve complex new challenges using innovative and creative solutions is what drives me to push myself to learn new skills everyday.</p>
        </section>
    );
}

export default AboutMe;