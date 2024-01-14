import React from 'react'
import About from './About'
import Project from './Project'
import Technology from './Technology'
import Contact from './Contact'
import Footer from './Footer'
import Home from './Home';
import Navbar from './Navbar'
const Main = () => {
    return (
        <>
            {/* Navbar */}
            <Navbar />

            {/* Home Section */}
            <Home />

            {/* About Section */}
            <About />

            {/* Project Section */}
            <Project />

            {/* Technology */}
            <Technology />

            {/* Contact */}
            <Contact />

            {/* Footer */}
            <Footer />

        </>

    )
}

export default Main;