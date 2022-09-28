import React from 'react'


export default function MainContent() {
    return (
        <div className='main'>

            <div className='info'>
                <h1 className='info--name'>Quang Ly Ho</h1>
                <p className='info--role'>Frontend Dev</p>
                <p className='info--link'>gonggong.com</p>
            
                <div className='button-container'>
                    <a  href='mailto:someone@example.com'>
                        <button className='button--email'>Email</button>
                    </a>

                    <a href="https://www.linkedin.com/">
                        <button className='button--linkedin'>LinkedIn</button>
                    </a> 
                </div>
            </div>
            <div className='about'>
                <h2 >About</h2>
                <p>I am a frontend developer with a   particular interest in making things simple and automating daily  tasks. I try to keep up with security and best practices, and am     always looking for new things to learn.</p>

                <h2>Interests</h2>
                <p>Food expert. Music scholar. Reader.    Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop   culture ninja. Coffee fanatic.</p>
            </div>
        </div>
    )
}