import React, { useState } from 'react';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss'

const Footer = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { name, email, message } = formData;

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = () => {

        setIsLoading(true);

        const contact = {
            _type: 'contact',
            name,
            email,
            message
        }

        client.create(contact)
            .then(() => {
                setIsLoading(false);
                setIsSubmitted(true);
            }).catch(err => {
                console.log(err);
                setIsLoading(false);
            })
    }

    return (
        <>
            <h2 className='head-text'>Grab a coffee and chat with me</h2>

            <div className='app__footer-cards'>
                <div className='app__footer-card'>
                    <img src={images.email} alt='email' />
                    <a href='mailto:ivo.markoff@gmail.com' className='p-text'>ivo.markoff@gmail.com</a>
                </div>
 
            </div>
            {!isSubmitted ?
                <div className='app__footer-form app__flex'>
                    <div className='app__flex'>
                        <input
                            className='p-text'
                            type='text'
                            placeholder='Your Name'
                            name='name'
                            value={name}
                            onChange={handleChangeInput} />
                    </div>
                    <div className='app__flex'>
                        <input
                            className='p-text'
                            type='email'
                            placeholder='Your Email'
                            name='email'
                            value={email}
                            onChange={handleChangeInput} />
                    </div>
                    <div>
                        <textarea
                            className='p-text'
                            placeholder='Your Message'
                            name='message'
                            value={message}
                            onChange={handleChangeInput} />
                    </div>
                    <button
                        type='button'
                        className='p-text'
                        onClick={handleSubmit}>{isLoading ? 'Sending' : 'Send Message'}
                    </button>
                </div>
                : <div>
                    <h3 className='head-text'>Thank you for getting in touch!</h3>
                </div>
            }
        </>
    )
}

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__primarybg');
