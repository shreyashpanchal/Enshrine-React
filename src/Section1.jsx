import React from 'react'
import './section1.css';
import ScrollAnimation from 'react-animate-on-scroll';
import {Animated} from "react-animated-css";
import "animate.css/animate.min.css";
function Section1() {
    return (
        <>
            <div className="section_container">
                <div className="section_text ">
                    
                <ScrollAnimation
                    animateIn='animate__fadeInUp'
                    animateOut='animate__fadeOut'
                    >Great Idea<br></br>
                    </ScrollAnimation>
                    <ScrollAnimation
                    animateIn='animate__fadeInUp'
                    animateOut='animate__fadeOut'
                    >              
                    Deserves Great<br></br>
                    </ScrollAnimation>
                    <ScrollAnimation
                    animateIn='animate__fadeInUp'
                    animateOut='animate__fadeOut'
                    >

                   Products
                    </ScrollAnimation>
                   
                    
                    
                    </div>               <div className="section_text"></div>
             </div>
        </>
    )
}

export default Section1
