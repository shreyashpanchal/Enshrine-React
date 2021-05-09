import React from 'react'
import './Section3.css';
import ScrollAnimation from 'react-animate-on-scroll';
import {Animated} from "react-animated-css";
import "animate.css/animate.min.css";
import PlusOneIcon from '@material-ui/icons/PlusOne';
function Section3() {
    return (
        <>
            <div className="section3_container">
                <div class="wrap1">
                <h1>Featured Work.</h1>
                <hr></hr>
                </div>
                <div className="wrap2">
                    <div className="section_left">
                    <ScrollAnimation
                        animateIn='animate__zoomIn'
                        animateOnce={true}
                        duration='1'
                        >
                     <div className="pic"></div>
                     <div className="pic_text">
                         <h2>Car Service</h2>
                         <p>Building India's first ever rental car marketplace.</p>
                     </div>
                     </ScrollAnimation>
                    </div>
                    <div className="section_right">
                    <ScrollAnimation
                        animateIn='animate__zoomIn'
                        animateOnce={true}
                        duration='1'
                        >
                       <div className="pic2">
                           <video  autoPlay="true" muted loop width="100%" height="100%" 
                            src="./Videos/mobile.mp4" type="video/mp4"/>
                       </div>
                       <div className="pic2_text">
                           <h2>
                             
                               One-Plus</h2>
                               <PlusOneIcon/>
                           <p>New Mobile Launch</p>
                       </div>
                      </ScrollAnimation>
                    </div>
                </div>
            </div>
          
        </>
    )
}

export default Section3;
