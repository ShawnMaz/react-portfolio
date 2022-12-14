import resume from './resume.pdf';

function Resume(){

    return(
        <section className='container mt-3'>
            <h2>Resume</h2>
            <div className='row'>
                <div className='col-sm-12 mx-auto my-3'>
                    <p><a href={resume} className='text-primary' download>Click here</a> to download the resume.</p>
                </div>
                <div className='col-sm-12'>
                    <h2>Front-end Proficiencies</h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Responsive design</li>
                        <li>React</li>                        
                        <li>Bootstrap</li>                        
                    </ul>
                </div>
                <div className='col-sm-12'>
                    <h2>Back-end Proficiencies</h2>
                    <ul>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MySQL, Sequelize</li>
                        <li>MongoDB, Mongoose</li>
                        <li>REST</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Resume;