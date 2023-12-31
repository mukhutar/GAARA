import { useState } from 'react'
import ToogleButton from './ToogleButton/ToogleButton'
import Links from './Links/Links'
import {motion} from "framer-motion"
import "./SidBar.scss"
 
function SideBar() {

  const closeSidebar = () => {
    setOpen(false);
    
  };
  

    const[open , setOpen] = useState(false)

    const variants = {
        open:{
             clipPath: "circle(1220px at 50px 50px)",
             transition:{
                type:"spring",
                stiffness:20,
             },
        },

        closed:{
            clipPath:"circle(30px at 50px 50px)",
            transition:{
                delay:0.5,
                type:"spring", 
                stiffness:400,
                damping:40,    
            },
        },
    }; 
  return (
    <motion.div className='sideBar' animate ={open ? "open" :"closed"} >
      <motion.div className="bg" variants={variants}>
        <Links  closeSidebar={closeSidebar} />
      </motion.div>
      
      <ToogleButton setOpen = {setOpen}/>
    </motion.div>
  )
}

export default SideBar
