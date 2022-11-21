import resume from './resume.pdf';

function Resume(){

    return(
        <section className='container'>
            <div className='d-flex flex-column mt-3'>
                <iframe title='myResume' src={resume}></iframe>
            </div>
        </section>
    );
}

export default Resume;