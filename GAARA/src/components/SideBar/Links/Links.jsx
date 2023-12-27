import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import DropDown from "/assets/DropIcon.svg";
import Arrow from '/assets/ArrowWhite.svg'
import { useState } from 'react'




const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};


const Links = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

      const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
      };

        const closeSidebar = () => {
          setIsDropdownOpen(false);
          
        };

  return (
    <motion.div className="links" variants={variants}>
   
  <motion.ul>

<li >
    <Link className='activeLink'  onClick={closeSidebar} to='/'>Home</Link>
</li>


<li >
    <Link  className='productDrop'onClick={toggleDropdown} >Products <img src={DropDown} alt="Dro" srcset="" />
    {isDropdownOpen && (
     <div className="productList">
            <ul className="unchanged">
                <li>
                    <Link className='listItem' onClick={closeSidebar} to='/product/tree loan'>Tree loan</Link>
                </li>
                <li>
                    <Link className='listItem' onClick={closeSidebar} to='/product/Carbon Program' > Carbon Program</Link>
                </li>
                <li>
                    <Link className='listItem' onClick={closeSidebar} to= '/product/Carbon foresty leasing' >Carbon foresty leasing </Link>
                </li>
                <li>
                    <Link className='listItem' onClick={closeSidebar} >Farmer's Digital monital</Link>
                </li>

                <li>
                    <Link className='listItem' onClick={closeSidebar} >Agribussiness Consulting </Link>
                </li>
             </ul>

             </div>
             )}
    </Link>
</li>

          <li>
              <Link className='activeLink'  onClick={closeSidebar} href="#">How it works</Link>
          </li>

          <li>
              <Link className='activeLink'  onClick={closeSidebar} href="#">About Us</Link>
          </li>

          <li>
              <Link className='activeLink'  onClick={closeSidebar}  href="#"><button >Estimate Income <img src={Arrow} alt="arrow svg" srcset="" /></button></Link>
          </li>
</motion.ul>
    </motion.div>
  );
};

export default Links;
