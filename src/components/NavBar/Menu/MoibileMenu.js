import React, {useRef, useEffect} from 'react'
import { TimelineMax } from 'gsap'
import './MobileMenu.scss'


export const MobileMenu = ({menu, isClosed}) => {
  
   const tl = new TimelineMax
    useEffect(() => {
        tl.fromTo(".menu-container", 0.5, {x: -340}, {x: 0})
        if (isClosed == true) {tl.to(".menu-container", 0.4, {x: -380})}
       
    }, [menu, isClosed])

   
    return (
        <>
          <div className={menu ? "menu-container": ""} >
            
         </div> 
        </>
    )
}