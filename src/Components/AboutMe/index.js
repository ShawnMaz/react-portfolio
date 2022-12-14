import profileImage from '../../assets/images/profile-photo.jpg';

function AboutMe(){
    return(
        <section className="container d-flex flex-column align-items-center">
            <h2 className='my-3'>About Me</h2>
            <img data-testid='profilePhoto' className='hero-img my-3' src={profileImage} alt='Shantanu Mazumder'/>
            <p data-testid='profileUserName' className='fs-1 fw-semibold mb-0'>Shantanu Mazumder</p>
            <h6 data-testid='profileUserTitle' className='fw-semibold'>Aspiring Full Stack Web Developer</h6>
            <p data-testid='profileUserDescription'>Learning new skills has always been my passion. I started out my career as a Manufacturing Engineer in the Metal Fabrication industry, then moved into the Optics industry and now into Web Development. Being able to solve complex new challenges using innovative and creative solutions is what drives me to push myself to learn new skills everyday.</p>
        </section>
    );
}

export default AboutMe;