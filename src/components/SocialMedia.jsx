import React from 'react'
import { BsTwitter, BsLinkedin} from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';


const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <a href='https://twitter.com/IvoMarkoff' target='_blank' rel='noopener noreferrer'>
                    <BsTwitter />
                </a>
            </div>
            <div>
                <a href='https://www.linkedin.com/in/ivo-m-466b461ab/' target='_blank' rel='noopener noreferrer'>
                    <BsLinkedin />
                </a>
            </div>
            <div>
                <a href='https://www.facebook.com/ivo.markov' target='_blank' rel='noopener noreferrer'>
                    <FaFacebook />
                </a>
            </div>
        </div>
    )
}

export default SocialMedia