import React from 'react';
import { Element, Link, scroller } from 'react-scroll';
import './Home.css';

const Home: React.FC = () => {
    const name = "Michael Arvelo";
    const title = "Software Engineer";

    function scrollToSection(sectionName: string) {
        return scroller.scrollTo(sectionName, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        });
    }

    return (
        <Element name="home" className="home-section">
            <img src="/background.png" id="image-background" />
            <div className="home-content">
                <video autoPlay muted loop id="video-background">
                    <source src="/background-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="intro-text">
                    <h1>{name}</h1>
                    <em>{title}</em>

                    <p>
                        Experienced in front-end and back-end development I have honed my skills in all kinds of
                        {" "}
                        <a onClick={() => scrollToSection('skills')}>
                            <b>technologies</b>
                        </a>
                        {". "}
                        When I'm not coding, you can find me learning a wide range of
                        {" "}
                        <a onClick={() => scrollToSection('side-projects')}>
                            <b>practices</b>
                        </a>
                        {". "}
                        I've always had a drive to create and along the way I've found the more I learn, the more I can create. So I'm always eager to learn new things and take on exciting challenges. Let's connect and create something amazing together!
                    </p>
                </div>
            </div>

            <Link to="skills" smooth={true} duration={500} className="down-arrow">
                <span className="chevron"></span>
            </Link>
        </Element>
    );
}

export default Home;
