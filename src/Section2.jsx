import React from 'react'
import './Section2.css';
import ScrollAnimation from 'react-animate-on-scroll';
import {Animated} from "react-animated-css";
import "animate.css/animate.min.css";
function Section2() {
    return (
        <>
        <div className="main_section2">
            <div className="section2_container">
             <div className="section2_text1"></div>
             <div className="section2_text">
             <ScrollAnimation
                        animateIn='animate__zoomIn'
                        animateOut='animate__fadeOut'
                        >
                 Strategic UX <br></br>
                 Design & Brand <br></br>
                 Studio.<br></br>
                 </ScrollAnimation>
                 <div className="text">
                 <ScrollAnimation
                        animateIn='animate__zoomIn'
                        animateOut='animate__fadeOut'
                        >
                 We help entrepreneurs and businesses achieve 
                 ambitious dreams by building design
                  centric products and brands.
                  </ScrollAnimation>
                 </div>
             </div>
            </div>
            </div>
        </>
    )
}

export default Section2
