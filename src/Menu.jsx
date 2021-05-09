import React ,{useState,useEffect} from 'react'
import './Menu.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import MenuIcon from '@material-ui/icons/Menu';
function Menu() {
    const[show,set]=useState("container_hide");
   
    const[color_nav,setColor]=useState("rgb(24,24,28)")
    const [scrollY, setScrollY] = useState(0);
    const logit=()=> {
        setScrollY((data)=>{
            if(data>=0 && data<10 || show==="container_show")
            {
                setColor("rgb(24,24,28)");
            }
            else
            {
              setColor("white");
            }
            return window.pageYOffset;
        });
        
      }
    
      useEffect(() => {
          console.log("shrey");
        function watchScroll() {
          window.addEventListener("scroll", logit);
        }
        watchScroll();
        return () => {
          window.removeEventListener("scroll", logit);
        };
      });
    
   
    const up=()=>{

 if(show ==="container_show")
 {
  
       set("container_hide");
       
      
 }
       else{
          
        set("container_show");
       
       
      
      }}
    return (
        <>
        <div className="nav_container" style={{

            backgroundColor:color_nav
        }}>
            <div className="nav_container_left">
              <EmojiObjectsIcon/>
               <h3>clearcut</h3>
               </div>
               <div className="nav_container_right">
                 <Link to="/form">
               <button className="button_nav">Say Hello</button>
               </Link>
              <h5>Menu</h5>
              
            <MenuIcon className="Menu"  onClick={up}/>
            </div>
           
            </div>
           
           
            <div className={show}>
          
                <div className="item"><span>00</span>About</div>
                <div className="item"><span>01</span>Work</div>
                <div className="item"><span>02</span>Blog</div>
                <div className="item"><span>03</span>Contact</div>
              
                </div>
            
        
        </>
    )
}

export default Menu
