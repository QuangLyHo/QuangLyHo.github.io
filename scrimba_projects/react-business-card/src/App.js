import React from "react";
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'


export default function App() {
    return (
        <div className='card'>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}