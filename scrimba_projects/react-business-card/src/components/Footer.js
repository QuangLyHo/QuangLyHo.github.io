import React from 'react'
import twitterIcon from '../images/twitter.svg'
import facebookIcon from '../images/facebook.svg'
import instagramIcon from '../images/instagram.svg'
import githubIcon from '../images/github.svg'


export default function Footer() {
    return (
        <footer>
            <a href='https://www.twitter.com/'>
                <img className='footer--img' src={twitterIcon} alt='twitter' />
            </a>

            <a href='https://www.facebook.com/'>
                <img className='footer--img' src={facebookIcon} alt='facebook'/>
            </a>

            <a href='https://www.instagram.com/'>
                <img className='footer--img' src={instagramIcon} alt='instagram' />
            </a>

            <a href='https://www.github.com/'>
                <img className='footer--img' src={githubIcon} alt='github'/>
            </a>
        </footer>
    )
}
