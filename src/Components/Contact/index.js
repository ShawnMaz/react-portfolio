import {useState} from 'react';
import {validateEmail} from '../../utils/helper';

function Contact(){
    const [formState, setFormState] = useState({name:'', email:'', message:''});
    const {name, email, message} = formState;

    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (event) => {
        if(event.target.name === 'email'){
            const isValid = validateEmail(event.target.value);

            if(!isValid){
                setErrorMessage('Invalid email address');
            } else {
                setErrorMessage('');
            }
        } else {
            if(!event.target.value.length){
                setErrorMessage(`${event.target.name} is required`);
            } else {
                setErrorMessage('');
            }
        }

        if(!errorMessage){
            setFormState({...formState, [event.target.name]:event.target.value});
        }

    };

    const handleSubmit = (event) => {
        // prevents the page from refreshing after submitting
        event.preventDefault();
        // resets the form after submitting
        event.target.reset();
        // resets the form state
        setFormState({name:'', email:'', message:''});
    };

    return (
        <section className="container mt-3">
            <div className="row">
                <form id='contact-form' className="col-sm-12 col-md-6" onSubmit={handleSubmit} noValidate>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input type='text' name='name' className='form-control' defaultValue={name} placeholder='Full name' onBlur={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input type='email' name='email' className='form-control' defaultValue={email} placeholder='Email address' onBlur={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea rows='5' name='message' className='form-control' defaultValue={message} placeholder="Your message" onBlur={handleChange}/>
                    </div>
                    {
                        errorMessage && (
                            <div>
                                <p className='text-danger'>{errorMessage}</p>
                            </div>
                        )
                    }
                    <button type='submit' className="btn btn-secondary">Submit</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;